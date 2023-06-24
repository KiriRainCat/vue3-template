# 柒夜雨猫的 Vue3 项目模板（基于 TypeScript）

此模板包含了：

- Vite 4 + Vue 3 + TypeScript（也支持 TSX）
- Vue Router 4
- Pinia
- Axios
- Vue i18n
- TailwindCSS
- Element Plus
- Cypress
- | Vue，Router，Pinia，i18n 的 API | Vue 组件 | UI 框架组件 | → **均支持自动引入** ヾ(✿ ﾟ ▽ ﾟ)ノ

---

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（最好使用 Take Over 模式，关闭 VsCode 自带的 TS/JS 支持）

## 安装依赖

```sh
npm install
```

### 启动 Vite Dev 服务器

```sh
npm run dev
```

### 检查类型 & 打包生产环境文件

```sh
npm run build
```

### 使用 [Cypress](https://www.cypress.io/) 进行组件测试

```sh
npm run test:unit
```

### 使用 [Cypress](https://www.cypress.io/) 进行 e2e 测试

```sh
npm run test:e2e
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e:prod
```

### 使用 [Prettier](https://prettier.io/) 进行格式化

```sh
npm run format
```

### 使用 [ESLint](https://eslint.org/) 代码规范检查

```sh
npm run lint
```
