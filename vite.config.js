import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const repoName = 'todo-list-app';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:`/${repoName}`
})
