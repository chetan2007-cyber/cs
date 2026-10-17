import { Router } from 'express';
import {
  adminLogin,
  listInquiries,
  getInquiryDetails,
  updateInquiryStatus,
  adminLogout,
} from '../controllers/admin.controller';
import { requireAdminAuth } from '../middleware/auth.middleware';

const router = Router();

// Public auth endpoints
router.post('/login', adminLogin);
router.post('/logout', adminLogout);

// Protected endpoints
router.get('/inquiries', requireAdminAuth as any, listInquiries);
router.get('/inquiries/:id', requireAdminAuth as any, getInquiryDetails);
router.patch('/inquiries/:id', requireAdminAuth as any, updateInquiryStatus);

export default router;
