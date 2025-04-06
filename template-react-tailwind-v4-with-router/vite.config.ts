import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   plugins: [tailwindcss(), react()],
   server: {
      allowedHosts: [
         '5173-ashishsimpl-createclass-bxhdd3ki37g.ws-eu118.gitpod.io',
         '4173-ashishsimpl-createclass-bxhdd3ki37g.ws-eu118.gitpod.io',
      ],
   },
})
