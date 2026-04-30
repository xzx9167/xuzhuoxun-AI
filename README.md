# 徐倬迅 · A股实战思维操作系统

> 在概率跟赔率之间，我一般只会考虑赔率。

基于徐倬迅（私募基金经理）全部公众号文章 + 知识星球 163 个问答深度调研，提炼出的 **14 个核心心智模型、12 条决策启发式、完整交易心理学和表达 DNA**。

这不是一个理论框架的堆砌，而是一个 **实战操作系统** — 每个模型都来自真金白银的交易经验，每条启发式都是可以立刻执行的决策规则。

## 知识库结构

```
├── SKILL.md             # Claude Code Skill 定义
├── references/          # 知识库内容
│   ├── models/          # 14个核心心智模型
│   ├── heuristics/      # 12条决策启发式
│   ├── cases/           # 历史案例复盘
│   ├── quotes/          # 经典语录
│   ├── psychology/      # 交易心理学
│   ├── timeline/        # 人物时间线
│   ├── expression/      # 表达DNA
│   └── misc/            # 其他核心认知
├── .vitepress/          # VitePress 文档站点配置
└── index.md             # 文档首页
```

## 快速开始

这是 **Claude Code Skill** + **VitePress 文档站点** 的双用途项目。

### 作为 Claude Code Skill 使用

在 Claude Code 中安装此 Skill 后，AI 可以以徐倬迅的第一人称视角回答 A 股相关问题。

### 本地预览文档

```bash
npm install
npm run docs:dev
```

访问 `http://localhost:5173/xuzhuoxun-AI/` 查看文档站点。

### 构建

```bash
npm run docs:build    # 生成静态站点到 .vitepress/dist/
npm run docs:preview  # 预览构建结果
```

## 免责声明

**本知识库仅供学习交流之用，不构成任何投资建议。**

- 所有内容基于徐倬迅个人投资经验和观点，不代表任何机构的立场
- 股市有风险，投资需谨慎。过去的交易经验和回报不代表未来的表现
- 任何投资决策应基于您自身的独立判断，不应依赖本知识库中的任何信息
- 作者及相关方不对因使用本知识库内容而产生的任何直接或间接损失承担责任
- 本知识库中提到的任何具体标的、策略、数据均仅作为案例分析，不构成买入、卖出或持有的建议

## License

MIT License — 详见 [LICENSE](./LICENSE) 文件。

## 作者

徐倬迅 — 私募基金经理，价值投资出身，A 股实战交易者。

知识库提炼与整理由 Claude Code 辅助完成。
