import path from "path";
import { defineConfig } from 'vite';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve("./src"),
        },
    },
    plugins: [
        devtools({
            enhancedLogs: { enabled: true },
            logging: true,
            removeDevtoolsOnBuild: true,
        }),
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        tailwindcss(),
        babel({ presets: [reactCompilerPreset()] })
    ],
});
