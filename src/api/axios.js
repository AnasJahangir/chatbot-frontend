// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://chatbot-backend-six-azure.vercel.app/api", // Adjust according to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally add interceptors here if needed

export default api;
