# next-design

## 安装

```
npm install --save next-design
```

## 使用

```js
import { Alert } from 'next-design';

Vue.component(Alert.name, Alert);
```

## 开发

打包部署：

```
npm run build
```

代码校验：

```
npm run lint
```

文档中心会使用`webpack-dev-server`跑一个服务器，通过`http://localhost:8080`就可以看到我们的组件Demo，以及使用教程。

```
npm run docs
```

文档中心js打包：

```
npm run builddocs
```
