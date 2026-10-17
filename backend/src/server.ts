import { app } from './app';
import { env } from './config/env';
import { checkDatabaseConnection } from './services/db';

async function startServer() {
  // Test MongoDB connection
  const dbConnected = await checkDatabaseConnection();
  if (dbConnected) {
    console.log('[MongoDB Atlas] Connected to database cluster successfully.');
  } else {
    console.warn('[MongoDB Atlas] Connection pending. Fallback active for local operations.');
  }

  const server = app.listen(env.PORT, () => {
    console.log(`===============================================`);
    console.log(`🚀 WeCove.in Backend API Server`);
    console.log(`   Port:        ${env.PORT}`);
    console.log(`   Environment: ${env.NODE_ENV}`);
    console.log(`   Health:      http://localhost:${env.PORT}/api/v1/health`);
    console.log(`   Inquiries:   http://localhost:${env.PORT}/api/v1/inquiries`);
    console.log(`   Email Sender:${env.EMAIL_USER}`);
    console.log(`   Recipient:   ${env.CONTACT_EMAIL}`);
    console.log(`===============================================`);
  });

  // Graceful shutdown
  const shutdown = async (signal: string) => {
    console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log('[Server] Connections closed. Process terminated.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

startServer().catch((err) => {
  console.error('[Server] Fatal startup error:', err);
  process.exit(1);
});
