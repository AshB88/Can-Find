import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use Render's port if available
    open: true,
    host: '0.0.0.0' // Ensure it binds to all network interfaces
  }
});

