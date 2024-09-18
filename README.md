# 开发
- yarn install
- yarn dev
- open localhost:3000/xxx/index.html


# 打包
多文件各自打包，生成各自静态资源
```
1. 执行 ./build_test.sh
2. 脚本依次传递文件名到vite.config.ts中执行build
3. vite.config.ts 根据脚本设置的VITE_APP_PROJECT进行指定文件夹的打包
```
