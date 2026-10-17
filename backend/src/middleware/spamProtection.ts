import { Request, Response, NextFunction } from 'express';

export function spamProtection(req: Request, res: Response, next: NextFunction): void {
  // 1. Honeypot check: 'website_trap' should always be empty for real users
  if (req.body.website_trap && req.body.website_trap.trim() !== '') {
    console.warn('[SpamProtection] Honeypot triggered by IP:', req.ip);
    // Return fake success or 400 to discard bot submission
    res.status(400).json({
      success: false,
      error: 'Submission rejected by spam detection engine.',
    });
    return;
  }

  // 2. Submission speed check: Bots submit forms within milliseconds
  if (req.body._timestamp) {
    const elapsedMs = Date.now() - Number(req.body._timestamp);
    if (elapsedMs < 1200) {
      // Submitting faster than 1.2s indicates automated bot script
      console.warn('[SpamProtection] Fast bot submission detected (< 1.2s). Elapsed:', elapsedMs, 'ms');
      res.status(400).json({
        success: false,
        error: 'Form submission was too fast. Please verify you are human and try again.',
      });
      return;
    }
  }

  next();
}
