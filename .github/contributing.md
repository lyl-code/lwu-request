---
outline: deep
---
# LWU-REQUEST 贡献指南

您好，我们非常高兴您有兴趣为LWU-REQUEST做出贡献。在提交您的文件之前，请务必花点时间阅读以下指南：

- [代码行为准则](./code-of-conduct.md)
- [拉取请求指导原则](#拉取请求指导原则)

## 拉取请求指导原则

- 从相关分支中 `checkout` 出主题分支，例如“main”，然后根据该分支合并回来。

- 如果添加新功能:

  - 提供添加此功能的理由。理想情况下，你应该先打开一个建议问题，并在处理之前获得批准。

- 如果修复错误：

  - 在PR中提供错误的详细描述。尽量提供可复现错误的演示代码。

- 在PR上工作时，可以有多个小的提交——GitHub可以在合并前自动压缩它们。

- 提交内容时必须遵循[提交内容协议](./commit-convention.md)从而可以自动生成变更日志。

## 开发设置

您可以使用 [pnpm](https://pnpm.io)

克隆代码后运行:

```sh
# 安装项目依赖
$ pnpm install
```

### 调试主插件源码

开始测试LWU-REQUEST的最简单方法是直接打开 `uniapp-request` 包源码，所有发行版本都将通过该包发行。