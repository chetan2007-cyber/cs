import { z } from 'zod';

export const adminLoginSchema = z.object({
  username: z.string().trim().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const updateInquiryStatusSchema = z.object({
  status: z.enum(['PENDING', 'IN_REVIEW', 'CONTACTED', 'ARCHIVED'], {
    errorMap: () => ({ message: 'Status must be PENDING, IN_REVIEW, CONTACTED, or ARCHIVED' }),
  }),
});
