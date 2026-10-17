import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { env } from './config/env';
import healthRoutes from './routes/health.routes';
import inquiryRoutes from './routes/inquiry.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandler } from './middleware/errorHandler';
import { apiLimiter } from './middleware/rateLimiter';

export const app: Application = express();

// 1. Security Headers via Helmet
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows React scripts/Three.js shaders in production bundle
    crossOriginEmbedderPolicy: false,
  })
);

// 2. CORS configuration
const allowedOrigins = [
  env.FRONTEND_URL,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Dev-friendly fallback
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// 3. Body Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// 4. Request Logging
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// 5. Global Rate Limiter
app.use('/api', apiLimiter);

// 6. API Routes
app.use('/api/v1', healthRoutes);
app.use('/api/v1', inquiryRoutes);
app.use('/api/v1/admin', adminRoutes);

// 7. Serve Static Frontend Bundle in Production (if built)
const frontendDistPath = path.resolve(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

// For all non-API GET requests, serve index.html for React Router client-side routing
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, error: 'Endpoint not found' });
  }
  const indexHtml = path.join(frontendDistPath, 'index.html');
  res.sendFile(indexHtml, (err) => {
    if (err) {
      // If frontend is running on dev server (port 3000), provide a helpful response
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>WeCove.in API</title>
            <style>
              body { font-family: system-ui, sans-serif; background: #0b0f19; color: #f8fafc; padding: 40px; }
              .card { max-width: 600px; margin: 0 auto; background: #161f30; padding: 32px; border-radius: 12px; border: 1px solid #233148; }
              h1 { color: #818cf8; margin-top: 0; }
              a { color: #38bdf8; text-decoration: none; }
              code { background: #0f172a; padding: 2px 6px; border-radius: 4px; }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>WeCove.in Backend API Active</h1>
              <p>The Express REST API is running successfully on port ${env.PORT}.</p>
              <p>Health check endpoint: <a href="/api/v1/health"><code>/api/v1/health</code></a></p>
              <p>Frontend dev server runs at: <a href="${env.FRONTEND_URL}"><code>${env.FRONTEND_URL}</code></a></p>
            </div>
          </body>
        </html>
      `);
    }
  });
});

// 8. Error handling
app.use(errorHandler);
