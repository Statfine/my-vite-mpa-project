import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/** 兼容文件协议打开 */
const resetAttr = () => {
  return {
    name: 're-attribute',
    transformIndexHtml(html: string) {
      return html
        .replace(
          /type="module" crossorigin|type="module"|crossorigin/g,
          'defer'
        )
        .replace(/(\.\.\/)/g, './')
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('process.env.VITE_APP_PROJECT===>', process.env.VITE_APP_PROJECT)
  const defaultProject = process.env.VITE_APP_PROJECT as string
  return {
    base: './',
    plugins: [react(), ...(mode === 'development' ? [] : [resetAttr()])],
    root: 'src/pages',
    build: {
      rollupOptions: {
        input: {
          // en: path.resolve(__dirname, 'src/pages/en/index.html'),
          // projectB: path.resolve(__dirname, 'src/projectB/index.html'),
          [defaultProject]: path.resolve(
            __dirname,
            `src/pages/${defaultProject}/index.html`
          ),
          // [defaultProject]: path.resolve(
          //   __dirname,
          //   `src/pages/${defaultProject}/index.html`
          // ),
        },
        output: {
          // dir: 'dist',
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
