// API configuration
export const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';

export function getApiUrl(path: string): string {
  // If the path already starts with http, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // If the path starts with /api, prepend the base URL
  if (path.startsWith('/api')) {
    return `${API_BASE_URL}${path}`;
  }
  
  // Otherwise, assume it's a relative path and prepend the base URL with /api
  return `${API_BASE_URL}/api${path.startsWith('/') ? path : `/${path}`}`;
} 