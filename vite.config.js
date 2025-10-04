import { defineConfig } from "vite";
// import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react-swc";
let repoName = "todo-list-app";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}`,
});
