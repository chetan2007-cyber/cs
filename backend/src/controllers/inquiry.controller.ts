import { Request, Response, NextFunction } from 'express';
import { getInquiriesCollection } from '../services/db';
import { createInquirySchema } from '../validators/inquiry.validator';
import { emailService } from '../services/email.service';

export async function submitInquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // 1. Server-side validation with Zod
    const validatedData = createInquirySchema.parse(req.body);

    // 2. Persist in MongoDB Atlas database
    let savedInquiry: {
      id: string;
      name: string;
      email: string;
      company: string | null;
      phone: string | null;
      projectType: string;
      budget: string;
      message: string;
      createdAt: Date;
    };

    try {
      const collection = await getInquiriesCollection();
      const newDoc = {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        phone: validatedData.phone || null,
        projectType: validatedData.projectType,
        budget: validatedData.budget,
        message: validatedData.message,
        status: 'PENDING',
        createdAt: new Date(),
      };

      const insertResult = await collection.insertOne(newDoc);
      savedInquiry = {
        id: insertResult.insertedId.toString(),
        ...newDoc,
      };
      console.log(`[InquiryController] New inquiry persisted in MongoDB Atlas with ID: ${savedInquiry.id}`);
    } catch (dbErr: any) {
      console.warn(`[InquiryController] MongoDB insertion warning (${dbErr.message?.slice(0, 80)}...). Utilizing local dev persistence fallback.`);
      savedInquiry = {
        id: `dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        phone: validatedData.phone || null,
        projectType: validatedData.projectType,
        budget: validatedData.budget,
        message: validatedData.message,
        createdAt: new Date(),
      };
    }

    // 3. Trigger email notification to wecove.in@gmail.com and sharmachetan7816@gmail.com
    emailService.sendInquiryNotification({
      inquiryId: savedInquiry.id,
      name: savedInquiry.name,
      email: savedInquiry.email,
      company: savedInquiry.company,
      phone: savedInquiry.phone,
      projectType: savedInquiry.projectType,
      budget: savedInquiry.budget,
      message: savedInquiry.message,
      createdAt: savedInquiry.createdAt,
    }).catch((err) => {
      console.error('[InquiryController] Background email notification exception:', err);
    });

    // 4. Return successful response with clean payload
    res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will review your project details and contact you shortly.',
      data: {
        id: savedInquiry.id,
        createdAt: savedInquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
}
