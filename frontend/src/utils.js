// src/utils.js
import axios from 'axios';

export const BASE_URL = 'https://backend-559917148272.us-central1.run.app';

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
