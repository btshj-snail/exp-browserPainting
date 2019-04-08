Exp-browserPainting

本工程是一个技术验证工程,主要是为了验证浏览器渲染过程.以nodejs为做后台服务.文章地址为<https://vsnail.cn/static/doc/blog/browserPerformance.html>

## 目录结构

- /server

后台服务程序.`app.js`是入口文件,`server.js`是请求解析处理文件,`mime.js`是文档类型文件.

- /static

web程序.

## 启动

启动命令

``` javaScript

node ./server/app.js

```

浏览器输入地址:`http://localhost:9001/static/index.html`

![](./doc/img/first_painting.png)