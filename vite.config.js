import { defineConfig } from 'vite';

process.env.BROWSER = 'chrome'; // or 'google-chrome', depending on your OS

export default defineConfig({
 
  server: {
    hmr: {
      overlay: true, // Set to false to disable the overlay if needed
    },
    open: true,
    port: 3000,
  },  
});