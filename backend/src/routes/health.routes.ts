import { Router, Request, Response } from 'express';
import { checkDatabaseConnection } from '../services/db';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  const dbHealthy = await checkDatabaseConnection();

  res.json({
    status: dbHealthy ? 'healthy' : 'degraded',
    service: 'wecove-api',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    database: {
      type: 'MongoDB Atlas',
      connected: dbHealthy,
    },
    system: {
      uptimeSeconds: process.uptime(),
      nodeVersion: process.version,
    },
  });
});

export default router;
