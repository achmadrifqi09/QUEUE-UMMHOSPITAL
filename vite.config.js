import { defineConfig } from 'vite';
import  {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins : [
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true,
            },

            manifest: {
                name: 'Sistem Antrian',
                short_name: 'Sistem Antrian',
                description: 'Sistem Antrian RSU UMM',
                theme_color: '#ffffff',
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            devOptions: {
                enabled: false,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },
        })
    ]
})