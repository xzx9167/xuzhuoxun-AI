import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '徐倬迅 · A股思维框架',
  description: '徐倬迅的A股实战思维操作系统 — 14个核心心智模型、12条决策启发式、完整交易心理学',
  base: '/xuzhuoxun-AI/',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['README.md', 'SKILL.md', 'CONSOLIDATED.md'],

  head: [
    ['link', { rel: 'icon', href: '/xuzhuoxun-AI/favicon.ico' }]
  ],

  themeConfig: {
    logo: false,
    nav: [
      { text: '知识库', link: '/references/models/01-odds-over-probability' },
      { text: 'GitHub', link: 'https://github.com/ThinkPeace/xuzhuoxun-AI' }
    ],

    sidebar: [
      {
        text: '心智模型',
        collapsed: false,
        items: [
          { text: '模型1：赔率优先于概率', link: '/references/models/01-odds-over-probability' },
          { text: '模型2：弹簧理论', link: '/references/models/02-spring-theory' },
          { text: '模型3：资金面权重最高', link: '/references/models/03-capital-flow-supremacy' },
          { text: '模型4：情绪博弈论', link: '/references/models/04-emotion-game' },
          { text: '模型5：牛市两阶段论', link: '/references/models/05-bull-market-two-phase' },
          { text: '模型6：极端分化法则（马太效应）', link: '/references/models/06-matthew-effect' },
          { text: '模型7：抱团游戏', link: '/references/models/07-bandwagon' },
          { text: '模型8：趋势钝化与趋势判断', link: '/references/models/08-trend-dulling' },
          { text: '模型9：慢思考与长逻辑', link: '/references/models/09-slow-thinking' },
          { text: '模型10：资金面实战指标', link: '/references/models/10-capital-flow-indicators' },
          { text: '模型11：运动战思维', link: '/references/models/11-movement-warfare' },
          { text: '东升西落', link: '/references/models/east-rises-west-falls' },
          { text: '经济天气预报', link: '/references/models/fundamentals-weather-forecast' },
          { text: '财富再分配模型', link: '/references/models/market-redistribution-simulation' },
        ]
      },
      {
        text: '决策启发式',
        collapsed: true,
        items: [
          { text: '以损定量', link: '/references/heuristics/01-loss-based-sizing' },
          { text: '两个隔夜止损', link: '/references/heuristics/02-two-night-stop' },
          { text: '正金字塔仓位', link: '/references/heuristics/03-positive-pyramid' },
          { text: '预备队思维', link: '/references/heuristics/04-reserve-force' },
          { text: '弹簧压紧松开', link: '/references/heuristics/05-spring-compression' },
          { text: '热点生命周期', link: '/references/heuristics/06-hot-topic-lifecycle' },
          { text: '先结论后逻辑', link: '/references/heuristics/07-conclusion-first' },
          { text: '凯利公式仓位管理', link: '/references/heuristics/kelly-formula' },
          { text: '七大盯盘核心信号', link: '/references/heuristics/market-monitoring-signals' },
          { text: '趋势判断实战规则', link: '/references/heuristics/10-trend-judgment' },
          { text: '短逻辑陷阱', link: '/references/heuristics/11-short-logic-trap' },
          { text: '买者自负', link: '/references/heuristics/12-follow-market' },
        ]
      },
      {
        text: '历史案例',
        collapsed: true,
        items: [
          { text: '案例索引', link: '/references/cases/00-index' },
          { text: '弹簧理论买点复盘', link: '/references/cases/spring-theory' },
          { text: '2025年1月开年暴跌', link: '/references/cases/2025-january-crash' },
          { text: '924行情复盘', link: '/references/cases/924-rally' },
          { text: '4000点收费站', link: '/references/cases/4000-toll-booth' },
          { text: 'A500ETF考编行情', link: '/references/cases/a500-etf' },
          { text: 'ETF降温进度条', link: '/references/cases/etf-cooling-progress' },
        ]
      },
      {
        text: '经典语录',
        collapsed: true,
        items: [
          { text: '语录索引', link: '/references/quotes/00-index' },
          { text: '资金面篇', link: '/references/quotes/fund-flow' },
          { text: '弹簧理论篇', link: '/references/quotes/spring-theory' },
          { text: '仓位管理篇', link: '/references/quotes/position-sizing' },
          { text: '止损纪律篇', link: '/references/quotes/stop-loss' },
          { text: '情绪博弈篇', link: '/references/quotes/emotion' },
          { text: '牛市熊市篇', link: '/references/quotes/bull-bear' },
          { text: '交易心理篇', link: '/references/quotes/trading-psychology' },
          { text: '思维方法篇', link: '/references/quotes/thinking-method' },
        ]
      },
      {
        text: '交易心理学',
        collapsed: true,
        items: [
          { text: '三大心魔与五项原则', link: '/references/psychology/00-index' },
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '表达DNA', link: '/references/expression/00-index' },
          { text: '人物时间线', link: '/references/timeline/00-index' },
          { text: '三种能力', link: '/references/misc/three-abilities' },
          { text: '主要矛盾与做减法', link: '/references/misc/main-contradiction' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThinkPeace/xuzhuoxun-AI' }
    ],

    footer: {
      message: '基于徐倬迅公众号文章与知识星球问答深度调研提炼',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdatedText: '最后更新',
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    notFound: {
      title: '页面未找到',
      quote: '投资就像找路，有时候会迷路，但总能找到方向。',
      linkText: '返回首页'
    }
  }
})
