import { InquiryFormData } from '../types';

const API_BASE_URL = process.env.API_BASE_URL || '/api/v1';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: { field: string; message: string }[];
}

export async function submitInquiry(payload: InquiryFormData): Promise<ApiResponse<{ id: string }>> {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      return {
        success: false,
        error:
          res.status === 504 || res.status === 502
            ? 'Backend API server is not running on port 5050. Please start the backend service.'
            : `Server returned an invalid response (${res.status}).`,
      };
    }

    if (!res.ok) {
      return {
        success: false,
        error: data?.error || `Server responded with status ${res.status}`,
        details: data?.details,
      };
    }

    return data;
  } catch (err: any) {
    console.error('[API:submitInquiry Error]', err);
    return {
      success: false,
      error:
        err.message === 'Failed to fetch'
          ? 'Unable to reach the server. Please verify your backend API is running.'
          : err.message || 'An unexpected network error occurred.',
    };
  }
}

export async function checkBackendHealth(): Promise<{ healthy: boolean; data?: any }> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) return { healthy: false };
    const data = await res.json();
    return { healthy: data.status === 'healthy', data };
  } catch {
    return { healthy: false };
  }
}
