import axios from 'axios';
import { api } from './api';

export const loginUser = async ({ email, password }) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data; // Expected: { success: true, user: {...}, token: '...' }
};

export const signupUser = async ({ name, email, password }) => {
  const response = await api.post('/auth/signup', { name, email, password });
  return response.data; // Expected: { success: true, user: {...}, token: '...' }
};