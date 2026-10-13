import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Народные сказки",
  "site.desc": "Многоязычная цифровая библиотека китайских народных сказок, легенд и историй о знаменитых людях.",
};

const RULocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "Народные сказки",
  "hero.body": `
        Народные сказки — это многоязычная цифровая библиотека, которая собирает
        китайские народные сказки, легенды и истории о знаменитых людях.
        Мы тщательно отбираем китайские народные сказки и представляем их
        на английском, испанском, французском, арабском и русском языках,
        чтобы больше читателей по всему миру могли открыть для себя
        китайские истории и почувствовать очарование народных легенд.
`,
  "hero.beforeReadme": "Начните читать сказки или ознакомьтесь с",
  "hero.readme": "О нас",
  "hero.afterReadme": "для получения дополнительной информации.",

  // General
  copy: "Копировать",
  copied: "Скопировано",
  by: "автор",
  about: "О сайте",
  socialLinks: "Социальные ссылки",
  home: "Главная",
  posts: "Сказки",
  "posts.desc": "Все сказки, собранные в проекте «Народные сказки».",
  tag: "Тег",
  "tag.desc": 'Все сказки с тегом "{name}".',
  tags: "Теги",
  "tags.desc": "Все теги, используемые в сказках",
  archives: "Архив",
  "archives.desc": "Все сказки, заархивированные в проекте «Народные сказки».",
  featured: "Избранное",
  recentPosts: "Последние сказки",
  tableOfContents: "Содержание",
  "tableOfContents.desc": "Открыть содержание",
  allPosts: "Все сказки",
  search: "Поиск",
  "search.desc": "Искать любую сказку",
  "search.placeholder": "Поиск по заголовкам, аннотациям или тексту...",
  pages: "Страницы",
  page: "Страница",
  pageWithNo: "Страница {no}",

  // Navigation
  "navigation.goBack": "Назад",
  "navigation.goBackHome": "Вернуться на главную",
  "navigation.backToTop": "Наверх",
  "navigation.nextPost": "Следующая сказка",
  "navigation.prevPost": "Предыдущая сказка",
  pageNotFound: "Страница не найдена",
  notFound: "Не найдено",
  rssFeed: "RSS-лента",
  suggestChanges: "Предложить изменения",
  toggleLightAndDark: "Переключить светлую/тёмную тему",
  "pagination.prev": "Предыдущая",
  "pagination.next": "Следующая",

  // Footer
  "footer.text": "Авторские права © {year} Народные сказки | Все права защищены",

  // Date
  "date.published": "Опубликовано",
  "date.updated": "Обновлено",
  "date.month.1": "января",
  "date.month.2": "февраля",
  "date.month.3": "марта",
  "date.month.4": "апреля",
  "date.month.5": "мая",
  "date.month.6": "июня",
  "date.month.7": "июля",
  "date.month.8": "августа",
  "date.month.9": "сентября",
  "date.month.10": "октября",
  "date.month.11": "ноября",
  "date.month.12": "декабря",

  // Socials
  "socials.github": `Github ${baseStrings["site.title"]}`,
  "socials.facebook": `Facebook ${baseStrings["site.title"]}`,
  "socials.instagram": `Instagram ${baseStrings["site.title"]}`,
  "socials.linkedin": `LinkedIn ${baseStrings["site.title"]}`,
  "socials.mail": `Отправить письмо ${baseStrings["site.title"]}`,
  "socials.x": `X ${baseStrings["site.title"]}`,
  "socials.twitch": `Twitch ${baseStrings["site.title"]}`,
  "socials.youtube": `YouTube ${baseStrings["site.title"]}`,
  "socials.whatsapp": `WhatsApp ${baseStrings["site.title"]}`,
  "socials.snapchat": `Snapchat ${baseStrings["site.title"]}`,
  "socials.pinterest": `Pinterest ${baseStrings["site.title"]}`,
  "socials.tiktok": `TikTok ${baseStrings["site.title"]}`,
  "socials.codepen": `CodePen ${baseStrings["site.title"]}`,
  "socials.discord": `Discord ${baseStrings["site.title"]}`,
  "socials.gitlab": `GitLab ${baseStrings["site.title"]}`,
  "socials.reddit": `Reddit ${baseStrings["site.title"]}`,
  "socials.skype": `Skype ${baseStrings["site.title"]}`,
  "socials.steam": `Steam ${baseStrings["site.title"]}`,
  "socials.telegram": `Telegram ${baseStrings["site.title"]}`,
  "socials.mastodon": `Mastodon ${baseStrings["site.title"]}`,

  // Share
  "sharePost.desc": "Поделиться этой сказкой в",
  "sharePost.on": "Поделиться этой сказкой в {media}",
  "sharePost.via": "Поделиться этой сказкой через {media}",

  // A11y
  "a11y.skipToContent": "Перейти к содержимому",
  "a11y.rssFeed": "RSS-лента",
  "a11y.openMenu": "Открыть меню",
  "a11y.closeMenu": "Закрыть меню",
  "a11y.archives": "Архив",
  "a11y.search": "Поиск",
  "a11y.themeButtonDefaultLabel": "Авто",
  "a11y.pagination": "Пагинация",
  "a11y.breadcrumb": "Хлебные крошки",
  "a11y.languagePicker": "Выбор языка",
};

export default RULocale;