新建文件夹，并npm init -y，生成一个package.json
添加webpack.config.js，index.html,安装相关依赖
新增script命令webpack serve，启动服务
此时目录结构如下：
  webpack-construct
+ |- index.html
  |- package.json
+ |- webpack.config.js
+ |- /src
+   |- index.js

安装Vue Vuerouter VueX
新建app.vue文件
  webpack-construct
  |- package.json
  |- /src
+   |- app.vue

src/index.js入口文件，写入内容

新增路由文件src/router/index.js
  webpack-construct
  |- package.json
  |- /src
+   |- /router
+     |- index.js

新增Vue页面src/views/.......
  project-name
  |- package.json
  |- /src
+   |- /views
+     |- 404.vue
+     |- about.vue
+     |- index.vue

在index.vue里引入router

新增Vuerouter src/store/index.js


在about.vue使用store

package.json新增打包命令   "build": "webpack"