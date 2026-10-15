import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Contes Populaires Chinois",
  "site.desc": "Une bibliothèque numérique multilingue de contes populaires chinois, de légendes et d'histoires de personnages célèbres.",
};

const FRLocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "Contes Populaires Chinois",
  "hero.body": `
        Contes Populaires Chinois est une bibliothèque numérique multilingue qui rassemble
        des contes populaires chinois, des légendes et des histoires de personnages célèbres.
        Nous sélectionnons avec soin les contes populaires chinois et les présentons
        en anglais, espagnol, français, arabe et russe,
        afin que davantage de lecteurs dans le monde puissent découvrir
        les histoires chinoises et ressentir le charme des légendes populaires.
`,
  "hero.beforeReadme": "Commencez à lire les contes ou consultez",
  "hero.readme": "À propos",
  "hero.afterReadme": "pour plus d'informations.",

  // General
  copy: "Copier",
  copied: "Copié",
  by: "par",
  about: "À propos",
  socialLinks: "Liens sociaux",
  home: "Accueil",
  posts: "Contes",
  "posts.desc": "Tous les contes recueillis dans Contes Populaires Chinois.",
  tag: "Étiquette",
  "tag.desc": 'Tous les contes avec l\'étiquette "{name}".',
  tags: "Étiquettes",
  "tags.desc": "Toutes les étiquettes utilisées dans les contes",
  archives: "Archives",
  "archives.desc": "Tous les contes archivés dans Contes Populaires Chinois.",
  featured: "À la une",
  recentPosts: "Contes récents",
  tableOfContents: "Table des matières",
  "tableOfContents.desc": "Ouvrir la table des matières",
  allPosts: "Tous les contes",
  search: "Rechercher",
  "search.desc": "Rechercher n'importe quel conte",
  "search.placeholder": "Rechercher des titres, résumés ou textes...",
  pages: "Pages",
  page: "Page",
  pageWithNo: "Page {no}",

  // Navigation
  "navigation.goBack": "Retour",
  "navigation.goBackHome": "Retour à l'accueil",
  "navigation.backToTop": "Retour en haut",
  "navigation.nextPost": "Conte suivant",
  "navigation.prevPost": "Conte précédent",
  pageNotFound: "Page introuvable",
  notFound: "Introuvable",
  rssFeed: "Flux RSS",
  suggestChanges: "Suggérer des modifications",
  toggleLightAndDark: "Basculer entre le mode clair et sombre",
  "pagination.prev": "Précédent",
  "pagination.next": "Suivant",

  // Footer
  "footer.text": "Copyright © {year} Contes Populaires Chinois | Tous droits réservés",

  // Date
  "date.published": "Publié",
  "date.updated": "Mis à jour",
  "date.month.1": "janvier",
  "date.month.2": "février",
  "date.month.3": "mars",
  "date.month.4": "avril",
  "date.month.5": "mai",
  "date.month.6": "juin",
  "date.month.7": "juillet",
  "date.month.8": "août",
  "date.month.9": "septembre",
  "date.month.10": "octobre",
  "date.month.11": "novembre",
  "date.month.12": "décembre",

  // Socials
  "socials.github": `Github de ${baseStrings["site.title"]}`,
  "socials.facebook": `Facebook de ${baseStrings["site.title"]}`,
  "socials.instagram": `Instagram de ${baseStrings["site.title"]}`,
  "socials.linkedin": `LinkedIn de ${baseStrings["site.title"]}`,
  "socials.mail": `Envoyer un e-mail à ${baseStrings["site.title"]}`,
  "socials.x": `X de ${baseStrings["site.title"]}`,
  "socials.twitch": `Twitch de ${baseStrings["site.title"]}`,
  "socials.youtube": `YouTube de ${baseStrings["site.title"]}`,
  "socials.whatsapp": `WhatsApp de ${baseStrings["site.title"]}`,
  "socials.snapchat": `Snapchat de ${baseStrings["site.title"]}`,
  "socials.pinterest": `Pinterest de ${baseStrings["site.title"]}`,
  "socials.tiktok": `TikTok de ${baseStrings["site.title"]}`,
  "socials.codepen": `CodePen de ${baseStrings["site.title"]}`,
  "socials.discord": `Discord de ${baseStrings["site.title"]}`,
  "socials.gitlab": `GitLab de ${baseStrings["site.title"]}`,
  "socials.reddit": `Reddit de ${baseStrings["site.title"]}`,
  "socials.skype": `Skype de ${baseStrings["site.title"]}`,
  "socials.steam": `Steam de ${baseStrings["site.title"]}`,
  "socials.telegram": `Telegram de ${baseStrings["site.title"]}`,
  "socials.mastodon": `Mastodon de ${baseStrings["site.title"]}`,

  // Share
  "sharePost.desc": "Partager ce conte sur",
  "sharePost.on": "Partager ce conte sur {media}",
  "sharePost.via": "Partager ce conte via {media}",

  // A11y
  "a11y.skipToContent": "Aller au contenu",
  "a11y.rssFeed": "Flux RSS",
  "a11y.openMenu": "Ouvrir le menu",
  "a11y.closeMenu": "Fermer le menu",
  "a11y.archives": "Archives",
  "a11y.search": "Rechercher",
  "a11y.themeButtonDefaultLabel": "Auto",
  "a11y.pagination": "Pagination",
  "a11y.breadcrumb": "Fil d'Ariane",
  "a11y.languagePicker": "Sélecteur de langue",
};

export default FRLocale;