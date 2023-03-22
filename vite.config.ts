import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        svgr({
            include: '**/*.svg'
        }),
        react(),
        AutoImport({
            include: [
                /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
            ],
            imports: [
                'vitest'
            ],
            defaultExportByFilename: false
        }),
        tsConfigPaths()
    ],
    server: {
        port: 3000,
        open: true
    }
})
