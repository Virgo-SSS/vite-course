import { defineConfig } from "vite";

export default defineConfig({
    // config list at vite documentation
    build: {
        outDir: "production",
        rollupOptions: {
            input: {
                index: "index.html",
                contact: "contact.html"
            }
        }
    },
})