import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "民间奇谭",
  "site.desc": "中国民间故事多语种数字馆，汇聚民间故事、传奇故事与名人故事，支持多语言阅读。",
};

const CNLocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "民间奇谭",
  "hero.body": `
        民间奇谭是一个汇聚中国民间故事、传奇故事与名人故事的多语种数字馆。
        我们精心整理中国民间故事，并以英语、西语、法语、阿语、俄语等多种语言呈现，
        让更多人读到中国故事，感受民间传奇的魅力。
`,
  "hero.beforeReadme": "开始阅读故事，或查看",
  "hero.readme": "关于我们",
  "hero.afterReadme": "了解更多。",

  // 通用
  copy: "复制",
  copied: "已复制",
  by: "作者",
  about: "关于",
  socialLinks: "社交链接",
  home: "首页",
  posts: "故事",
  "posts.desc": "民间奇谭收录的全部故事。",
  tag: "标签",
  "tag.desc": '所有带有"{name}"标签的故事。',
  tags: "标签",
  "tags.desc": "故事中使用的所有标签",
  archives: "归档",
  "archives.desc": "民间奇谭归档的全部故事。",
  featured: "精选",
  recentPosts: "最新故事",
  tableOfContents: "目录",
  "tableOfContents.desc": "打开目录",
  allPosts: "全部故事",
  search: "搜索",
  "search.desc": "搜索任意故事",
  "search.placeholder": "搜索故事标题、摘要或正文...",
  pages: "页面",
  page: "页",
  pageWithNo: "第 {no} 页",

  // 导航
  "navigation.goBack": "返回",
  "navigation.goBackHome": "返回首页",
  "navigation.backToTop": "返回顶部",
  "navigation.nextPost": "下一个故事",
  "navigation.prevPost": "上一个故事",
  pageNotFound: "页面未找到",
  notFound: "未找到",
  rssFeed: "RSS 订阅",
  suggestChanges: "建议修改",
  toggleLightAndDark: "切换浅色/深色模式",
  "pagination.prev": "上一页",
  "pagination.next": "下一页",

  // 页脚
  "footer.text": "版权所有 © {year} 民间奇谭 | 保留所有权利",

  // 日期
  "date.published": "发布于",
  "date.updated": "更新于",
  "date.month.1": "一月",
  "date.month.2": "二月",
  "date.month.3": "三月",
  "date.month.4": "四月",
  "date.month.5": "五月",
  "date.month.6": "六月",
  "date.month.7": "七月",
  "date.month.8": "八月",
  "date.month.9": "九月",
  "date.month.10": "十月",
  "date.month.11": "十一月",
  "date.month.12": "十二月",

  // 社交
  "socials.github": `${baseStrings["site.title"]} 的 GitHub`,
  "socials.facebook": `${baseStrings["site.title"]} 的 Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} 的 Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} 的 LinkedIn`,
  "socials.mail": `发送邮件至 ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} 的 X`,
  "socials.twitch": `${baseStrings["site.title"]} 的 Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} 的 YouTube`,
  "socials.whatsapp": `${baseStrings["site.title"]} 的 WhatsApp`,
  "socials.snapchat": `${baseStrings["site.title"]} 的 Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} 的 Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} 的 TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} 的 CodePen`,
  "socials.discord": `${baseStrings["site.title"]} 的 Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} 的 GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} 的 Reddit`,
  "socials.skype": `${baseStrings["site.title"]} 的 Skype`,
  "socials.steam": `${baseStrings["site.title"]} 的 Steam`,
  "socials.telegram": `${baseStrings["site.title"]} 的 Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} 的 Mastodon`,

  // 分享
  "sharePost.desc": "在以下平台分享此故事",
  "sharePost.on": "在{media}分享此故事",
  "sharePost.via": "通过{media}分享此故事",

  // 无障碍
  "a11y.skipToContent": "跳至内容",
  "a11y.rssFeed": "RSS 订阅",
  "a11y.openMenu": "打开菜单",
  "a11y.closeMenu": "关闭菜单",
  "a11y.archives": "归档",
  "a11y.search": "搜索",
  "a11y.themeButtonDefaultLabel": "自动",
  "a11y.pagination": "分页",
  "a11y.breadcrumb": "面包屑导航",
  "a11y.languagePicker": "语言选择器",
};

export default CNLocale;