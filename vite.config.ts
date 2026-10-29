import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// The dev server only serves exact public files, so /admin/ would fall through
// to the React app's 404 page. Production hosts serve public/admin/index.html fine.
const adminDev = (): Plugin => ({
  name: 'admin-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/admin' || req.url === '/admin/')
        req.url = '/admin/index.html'
      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), tailwindcss(), adminDev()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
