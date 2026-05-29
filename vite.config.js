import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/She_Can_Foundation_WebDevelopment_Internship/',
  plugins: [react(), tailwindcss()],
})