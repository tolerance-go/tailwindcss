# 源码输入

- platform

  - node

    - `src/**`

      - language
        - js
      - module
        - esm
      - target(语言标准及环境版本)
        - ESNext
      - platform
        - node

  - browser

    - `src/browser`

      - language
        - js
      - module
        - esm
      - target(语言标准及环境版本)
        - ESNext
      - platform
        - node

# 模块导出

- exports

  - platform

    - browser

      - dist/index.browser.js
        - language
          - js
        - target
          - es5
          - DOM3
        - module
          - cjs
        - types

    - node

      - lib/index.js(main)
        - language
          - js
        - target
          - es5
          - node@13
        - module
          - cjs
        - types
          - types/index.d.ts

    - node
      - corePlugins.js
        - language
          - js
        - target
          - es5
          - node@13
        - module
          - cjs
        - types
          - corePlugins.d.ts

## 命令行导出

### 初始化

install

### 重置

clean

### 代码检查

lint

### 开发

### 生成

### 测试

### 框架

### 构建

build

#### 打包器

swc/webpack

### 发布

### 部署

####

# 开发流程

# 测试流程

# 打包流程

# 部署流程
