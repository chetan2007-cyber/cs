import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { getInquiriesCollection } from '../services/db';
import { env } from '../config/env';
import { adminLoginSchema, updateInquiryStatusSchema } from '../validators/admin.validator';

export async function adminLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { username, password } = adminLoginSchema.parse(req.body);

    const isConfigMatch =
      username === env.ADMIN_INITIAL_USERNAME && password === env.ADMIN_INITIAL_PASSWORD;

    if (!isConfigMatch) {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
      return;
    }

    const token = jwt.sign(
      { id: 'admin-primary', username },
      env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: { username, role: 'ADMIN' },
    });
  } catch (error) {
    next(error);
  }
}

export async function listInquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string, 10) || 20));
    const status = req.query.status as string;

    const query: any = {};
    if (status && ['PENDING', 'IN_REVIEW', 'CONTACTED', 'ARCHIVED'].includes(status)) {
      query.status = status;
    }

    const collection = await getInquiriesCollection();
    const [total, inquiries] = await Promise.all([
      collection.countDocuments(query),
      collection
        .find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
    ]);

    res.json({
      success: true,
      data: inquiries.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        email: doc.email,
        company: doc.company,
        phone: doc.phone,
        projectType: doc.projectType,
        budget: doc.budget,
        message: doc.message,
        status: doc.status,
        createdAt: doc.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getInquiryDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const collection = await getInquiriesCollection();
    let query: any = { id };
    if (ObjectId.isValid(id)) {
      query = { $or: [{ _id: new ObjectId(id) }, { id }] };
    }

    const inquiry = await collection.findOne(query);

    if (!inquiry) {
      res.status(404).json({ success: false, error: 'Inquiry not found' });
      return;
    }

    res.json({
      success: true,
      data: {
        id: inquiry._id.toString(),
        name: inquiry.name,
        email: inquiry.email,
        company: inquiry.company,
        phone: inquiry.phone,
        projectType: inquiry.projectType,
        budget: inquiry.budget,
        message: inquiry.message,
        status: inquiry.status,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function updateInquiryStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const { status } = updateInquiryStatusSchema.parse(req.body);

    const collection = await getInquiriesCollection();
    let query: any = { id };
    if (ObjectId.isValid(id)) {
      query = { $or: [{ _id: new ObjectId(id) }, { id }] };
    }

    const result = await collection.findOneAndUpdate(
      query,
      { $set: { status, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    res.json({
      success: true,
      message: `Inquiry status updated to ${status}`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export async function adminLogout(req: Request, res: Response): Promise<void> {
  res.json({ success: true, message: 'Logged out successfully' });
}
