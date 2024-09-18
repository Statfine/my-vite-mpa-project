# 添加权限chmod +x build_test.sh 


# #!/bin/sh
# # 设置环境变量并构建项目
# npx cross-env VITE_APP_PROJECT=zh vite build && echo "Build completed."

#!/bin/sh

# 定义一个包含不同项目名称的数组
projects=("en" "ja")

# 检查是否存在 dist 文件夹，如果存在则删除
if [ -d "dist" ]; then
  echo "Removing existing dist folder..."
  rm -rf dist
fi

# 循环遍历项目数组
for project in "${projects[@]}"; do
  # 设置环境变量并执行构建命令
  echo "Building project: $project"
  npx cross-env VITE_APP_PROJECT="$project" vite build
done

# 压缩 dist 目录到 ZIP 文件
zip -r "dist.zip" dist

echo "All projects built successfully."