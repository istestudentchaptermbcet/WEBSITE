import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
};

// Events API
export const eventsAPI = {
  getAll: () => api.get('/events'),
  getById: (id) => api.get(`/events/${id}`),
  create: (eventData) => api.post('/events', eventData),
  join: (eventId) => api.put(`/events/${eventId}/join`),
};

// Team API
export const teamAPI = {
  getAll: () => api.get('/team'),
  create: (memberData) => api.post('/team', memberData),
};

// Gallery API
export const galleryAPI = {
  getAll: () => api.get('/gallery'),
};

export default api;
