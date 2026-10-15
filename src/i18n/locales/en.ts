import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "China Folk Tales",
  "site.desc": "A multilingual digital collection of Chinese folk tales, legendary stories and stories of notable figures.",
};

const ENLocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "China Folk Tales",
  "hero.body": `
        Folk Tales is a multilingual digital collection of Chinese folk tales,
        legendary stories and stories of notable figures.
        We carefully curate Chinese folk tales and present them in English, Spanish,
        French, Arabic and Russian, so that more readers around the world can
        discover Chinese stories and feel the charm of folk legends.
`,
  "hero.beforeReadme": "Start reading stories, or check",
  "hero.readme": "About Us",
  "hero.afterReadme": "to learn more.",

  // General
  copy: "copy",
  copied: "copied",
  by: "by",
  about: "About",
  socialLinks: "Social Links",
  home: "Home",
  posts: "Stories",
  "posts.desc": "All the stories collected in Folk Tales.",
  tag: "Tag",
  "tag.desc": 'All the stories with the tag "{name}".',
  tags: "Tags",
  "tags.desc": "All the tags used in stories",
  archives: "Archives",
  "archives.desc": "All the stories archived in Folk Tales.",
  featured: "Featured",
  recentPosts: "Recent Stories",
  tableOfContents: "Table of contents",
  "tableOfContents.desc": "Open Table of contents",
  allPosts: "All Stories",
  search: "Search",
  "search.desc": "Search any story",
  "search.placeholder": "Search story titles, summaries or content...",
  pages: "Pages",
  page: "Page",
  pageWithNo: "Page {no}",

  // Navigation
  "navigation.goBack": "Go back",
  "navigation.goBackHome": "Go Back Home",
  "navigation.backToTop": "Back to Top",
  "navigation.nextPost": "Next Story",
  "navigation.prevPost": "Previous Story",
  pageNotFound: "Page Not Found",
  notFound: "Not Found",
  rssFeed: "RSS Feed",
  suggestChanges: "Suggest Changes",
  toggleLightAndDark: "Toggles light & dark",
  "pagination.prev": "Prev",
  "pagination.next": "Next",

  // Footer
  "footer.text": "Copyright © {year} Folk Tales | All rights reserved",

  // Date
  "date.published": "Published",
  "date.updated": "Updated",
  "date.month.1": "January",
  "date.month.2": "February",
  "date.month.3": "March",
  "date.month.4": "April",
  "date.month.5": "May",
  "date.month.6": "June",
  "date.month.7": "July",
  "date.month.8": "August",
  "date.month.9": "September",
  "date.month.10": "October",
  "date.month.11": "November",
  "date.month.12": "December",

  // Socials
  "socials.github": `${baseStrings["site.title"]} on Github`,
  "socials.facebook": `${baseStrings["site.title"]} on Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} on Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} on LinkedIn`,
  "socials.mail": `Send an email to ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} on X`,
  "socials.twitch": `${baseStrings["site.title"]} on Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} on Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} on Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} on Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} on Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} on TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} on CodePen`,
  "socials.discord": `${baseStrings["site.title"]} on Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} on GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} on Reddit`,
  "socials.skype": `${baseStrings["site.title"]} on Skype`,
  "socials.steam": `${baseStrings["site.title"]} on Steam`,
  "socials.telegram": `${baseStrings["site.title"]} on Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} on Mastodon`,

  // Share
  "sharePost.desc": "Share this story on",
  "sharePost.on": "Share this story on {media}",
  "sharePost.via": "Share this story via {media}",

  // A11y
  "a11y.skipToContent": "Skip to content",
  "a11y.rssFeed": "rss feed",
  "a11y.openMenu": "Open Menu",
  "a11y.closeMenu": "Close Menu",
  "a11y.archives": "archives",
  "a11y.search": "search",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.pagination": "Pagination",
  "a11y.breadcrumb": "breadcrumb",
  "a11y.languagePicker": "Language Picker",
};

export default ENLocale;