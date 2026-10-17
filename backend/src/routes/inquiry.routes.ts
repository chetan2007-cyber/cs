import { Router } from 'express';
import { submitInquiry } from '../controllers/inquiry.controller';
import { inquiryLimiter } from '../middleware/rateLimiter';
import { spamProtection } from '../middleware/spamProtection';

const router = Router();

// POST /api/v1/inquiries with rate limiter, honeypot/speed spam check, and controller
router.post('/inquiries', inquiryLimiter, spamProtection, submitInquiry);

export default router;
