
// Input sanitization and XSS protection utilities
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit input length
};

export const sanitizeEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeInput(email);
  return emailRegex.test(sanitized) ? sanitized : '';
};

export const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+\-\s()]/g, '').slice(0, 20);
};

export const sanitizeUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return '';
    }
    return urlObj.toString();
  } catch {
    return '';
  }
};

// Session management utilities
export const generateSessionId = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateSessionData = (data: unknown): boolean => {
  if (typeof data !== 'object' || data === null) return false;
  
  const session = data as Record<string, unknown>;
  return (
    typeof session.id === 'string' &&
    typeof session.timestamp === 'number' &&
    session.timestamp > Date.now() - 24 * 60 * 60 * 1000 // 24 hours
  );
};

export const encryptSessionData = (data: string, key?: string): string => {
  // Simple base64 encoding for client-side storage
  // In production, use proper encryption
  try {
    return btoa(encodeURIComponent(data));
  } catch {
    return data;
  }
};

export const decryptSessionData = (encryptedData: string): string => {
  try {
    return decodeURIComponent(atob(encryptedData));
  } catch {
    return encryptedData;
  }
};
