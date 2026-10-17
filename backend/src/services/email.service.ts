import nodemailer from 'nodemailer';
import { env } from '../config/env';

export interface EmailNotificationPayload {
  inquiryId: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  projectType: string;
  budget: string;
  message: string;
  createdAt: Date;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isConfigured = false;

  constructor() {
    this.initTransporter();
  }

  private initTransporter() {
    if (env.EMAIL_USER && env.EMAIL_PASS) {
      if (!env.EMAIL_HOST || env.EMAIL_HOST === 'smtp.gmail.com') {
        this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
          },
        });
      } else {
        this.transporter = nodemailer.createTransport({
          host: env.EMAIL_HOST,
          port: env.EMAIL_PORT || 587,
          secure: env.EMAIL_PORT === 465,
          auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
          },
        });
      }
      this.isConfigured = true;
      console.log('[EmailService] SMTP Transporter configured for:', env.EMAIL_USER);
    } else {
      console.log('[EmailService] SMTP credentials not provided in environment. Outgoing notifications will be logged to console.');
    }
  }

  public async sendInquiryNotification(payload: EmailNotificationPayload): Promise<{ delivered: boolean; info?: string }> {
    const formattedHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0c0f17; color: #f3f4f6; border-radius: 12px; overflow: hidden; border: 1px solid #1f293d;">
        <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 28px 24px;">
          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">WeCove.in — New Inquiry Received</h1>
          <p style="margin: 6px 0 0; color: #e0e7ff; font-size: 14px;">Notification automatically routed to <strong>${env.CONTACT_EMAIL}</strong></p>
        </div>
        
        <div style="padding: 24px;">
          <div style="background-color: #141b2a; border-radius: 8px; padding: 18px; margin-bottom: 20px; border: 1px solid #283548;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Client Information</p>
            <h2 style="margin: 0 0 12px; font-size: 20px; color: #ffffff;">${payload.name}</h2>
            <p style="margin: 4px 0; color: #cbd5e1; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${payload.email}" style="color: #818cf8; text-decoration: none;">${payload.email}</a></p>
            ${payload.company ? `<p style="margin: 4px 0; color: #cbd5e1; font-size: 15px;"><strong>Company:</strong> ${payload.company}</p>` : ''}
            ${payload.phone ? `<p style="margin: 4px 0; color: #cbd5e1; font-size: 15px;"><strong>Phone:</strong> <a href="tel:${payload.phone}" style="color: #818cf8; text-decoration: none;">${payload.phone}</a></p>` : ''}
          </div>

          <div style="display: flex; gap: 12px; margin-bottom: 20px;">
            <div style="flex: 1; background-color: #141b2a; padding: 14px; border-radius: 8px; border: 1px solid #283548;">
              <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Project Scope</span>
              <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #38bdf8;">${payload.projectType}</p>
            </div>
            <div style="flex: 1; background-color: #141b2a; padding: 14px; border-radius: 8px; border: 1px solid #283548;">
              <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Budget</span>
              <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #34d399;">${payload.budget}</p>
            </div>
          </div>

          <div style="background-color: #141b2a; border-radius: 8px; padding: 18px; margin-bottom: 20px; border: 1px solid #283548;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; text-transform: uppercase;">Message Content</p>
            <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${payload.message}</p>
          </div>

          <div style="border-top: 1px solid #1f293d; padding-top: 16px; font-size: 12px; color: #64748b; display: flex; justify-content: space-between;">
            <span>Inquiry ID: ${payload.inquiryId}</span>
            <span>Received: ${payload.createdAt.toISOString()}</span>
          </div>
        </div>
      </div>
    `;

    if (!this.isConfigured || !this.transporter) {
      console.log(`[EmailNotification:LOG_FALLBACK] Inquiry for ${env.CONTACT_EMAIL}:`);
      console.log(`  Name: ${payload.name} (${payload.email})`);
      console.log(`  Company: ${payload.company || 'N/A'}`);
      console.log(`  Project: ${payload.projectType} | Budget: ${payload.budget}`);
      console.log(`  Message: ${payload.message}`);
      return { delivered: false, info: 'Logged to server console (SMTP credentials not yet configured in .env)' };
    }

    try {
      const recipients = Array.from(
        new Set([env.CONTACT_EMAIL, env.EMAIL_USER].filter(Boolean) as string[])
      );

      const info = await this.transporter.sendMail({
        from: `"WeCove Studio" <${env.EMAIL_FROM}>`,
        to: recipients,
        replyTo: payload.email,
        subject: `[WeCove Inquiry] ${payload.name} (${payload.projectType})`,
        html: formattedHtml,
        text: `New Inquiry Received\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company || 'N/A'}\nPhone: ${payload.phone || 'N/A'}\nProject: ${payload.projectType}\nBudget: ${payload.budget}\n\nMessage:\n${payload.message}\n\nInquiry ID: ${payload.inquiryId}\nTimestamp: ${payload.createdAt.toISOString()}`,
      });

      console.log('[EmailService] Dispatched to:', recipients);
      console.log('[EmailService] Message ID:', info.messageId);
      console.log('[EmailService] SMTP Response:', info.response);
      return { delivered: true, info: info.messageId };
    } catch (error) {
      console.error('[EmailService:ERROR] Failed to dispatch email notification:', error);
      // As per spec: preserve inquiry, report notification failure through logging, never reject successful DB persistence
      return { delivered: false, info: (error as Error).message };
    }
  }
}

export const emailService = new EmailService();
