import { z } from 'zod';

export const createInquirySchema = z.object({
  name: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  email: z
    .string({ required_error: 'Email address is required' })
    .trim()
    .email('Please provide a valid email address')
    .max(150, 'Email cannot exceed 150 characters'),
  company: z
    .string()
    .trim()
    .max(100, 'Company name cannot exceed 100 characters')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .max(25, 'Phone number cannot exceed 25 characters')
    .optional()
    .or(z.literal('')),
  projectType: z
    .string({ required_error: 'Project type is required' })
    .trim()
    .min(2, 'Please select a project type'),
  budget: z
    .string({ required_error: 'Budget range is required' })
    .trim()
    .min(2, 'Please select a budget range'),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, 'Message must be at least 10 characters describing your project')
    .max(3000, 'Message cannot exceed 3000 characters'),
  // Honeypot spam defense
  website_trap: z.string().optional(),
  _timestamp: z.number().optional(),
});

export type CreateInquiryInput = z.infer<typeof createInquirySchema>;
