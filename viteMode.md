import path from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import pxToRemOrVwPlugin from 'vite-plugin-px-rem-vw'
// import zipPack from 'vite-plugin-zip-pack'
import react from '@vitejs/plugin-react-swc'

/** 兼容文件协议打开 */
const resetAttr = () => {
  return {
    name: 're-attribute',
    transformIndexHtml(html: string) {
      return html
        .replace(/type="module" crossorigin/g, 'defer')
        .replace(/rel="stylesheet" crossorigin/g, 'rel="stylesheet" defer')
        .replace(/(\.\.\/)/g, './')
    },
  }
}

export default defineConfig(({ mode }) => {
  const defaultProject = process.env.VITE_APP_PROJECT as string
  return {
    base: './',
    server: {
      port: 3001,
      open: `/en/index.html`, // 设置默认打开的路径
    },
    root: 'src/pages', // Vite 会根据 root 目录来查找 .env 文件
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    plugins: [
      UnoCSS(),
      react(),
      // legacy(),
      // zipPack({ outDir: './' }),
      ...(mode === 'development' ? [] : [resetAttr()]),
      pxToRemOrVwPlugin({
        type: 'vw',
        options: {
          viewportWidth: 375,
          mediaQuery: true,
          minPixelValue: 0.01,
        },
      }),
    ],
    build: {
      outDir: 'dist',
      target: 'es2015',
      rollupOptions: {
        input: {
          [defaultProject]: path.resolve(
            __dirname,
            `src/pages/${defaultProject}/index.html`
          ),
        },
        output: {
          dir: `dist/${defaultProject}`,
          format: 'cjs',
        },
        plugins: [
          {
            // @ts-ignore
            generateBundle(options: any, bundle: any) {
              // 提取文件夹下的html到上级目录
              Object.keys(bundle).forEach((fileName) => {
                console.log('fileName', fileName)
                if (fileName.includes('html')) {
                  const oldFileName = bundle[fileName].fileName
                  const newFileName = path.join(
                    './',
                    path.basename(oldFileName)
                  )
                  bundle[fileName].fileName = newFileName
                }
              })
            },
          } as any,
        ],
      },
    },
  }
})
