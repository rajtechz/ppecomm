import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Hardcoded placeholder URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock token for testing (remove in production)
const MOCK_TOKEN = 'mock-jwt-token-for-testing';

// Request interceptor to add token to headers
api.interceptors.request.use((config) => {
  // Use real token from localStorage if available, else use mock token for testing
  const token = localStorage.getItem('token') || MOCK_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };