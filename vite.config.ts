import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss() as unknown as PluginOption],
})
