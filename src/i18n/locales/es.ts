import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Cuentos Populares Chinos",
  "site.desc": "Una biblioteca digital multilingüe de cuentos populares chinos, leyendas e historias de personajes célebres.",
};

const ESLocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "Cuentos Populares Chinos",
  "hero.body": `
        Cuentos Populares Chinos es una biblioteca digital multilingüe que reúne
        cuentos populares chinos, leyendas e historias de personajes célebres.
        Seleccionamos cuidadosamente los cuentos populares chinos y los presentamos
        en inglés, español, francés, árabe y ruso,
        para que más lectores de todo el mundo puedan descubrir
        las historias chinas y sentir el encanto de las leyendas populares.
`,
  "hero.beforeReadme": "Empieza a leer los cuentos o consulta",
  "hero.readme": "Sobre nosotros",
  "hero.afterReadme": "para saber más.",

  // General
  copy: "Copiar",
  copied: "Copiado",
  by: "por",
  about: "Acerca de",
  socialLinks: "Enlaces sociales",
  home: "Inicio",
  posts: "Cuentos",
  "posts.desc": "Todos los cuentos recopilados en Cuentos Populares Chinos.",
  tag: "Etiqueta",
  "tag.desc": 'Todos los cuentos con la etiqueta "{name}".',
  tags: "Etiquetas",
  "tags.desc": "Todas las etiquetas usadas en los cuentos",
  archives: "Archivo",
  "archives.desc": "Todos los cuentos archivados en Cuentos Populares Chinos.",
  featured: "Destacado",
  recentPosts: "Cuentos recientes",
  tableOfContents: "Tabla de contenidos",
  "tableOfContents.desc": "Abrir la tabla de contenidos",
  allPosts: "Todos los cuentos",
  search: "Buscar",
  "search.desc": "Buscar cualquier cuento",
  "search.placeholder": "Buscar títulos, resúmenes o textos...",
  pages: "Páginas",
  page: "Página",
  pageWithNo: "Página {no}",

  // Navigation
  "navigation.goBack": "Volver",
  "navigation.goBackHome": "Volver al inicio",
  "navigation.backToTop": "Volver arriba",
  "navigation.nextPost": "Cuento siguiente",
  "navigation.prevPost": "Cuento anterior",
  pageNotFound: "Página no encontrada",
  notFound: "No encontrado",
  rssFeed: "Feed RSS",
  suggestChanges: "Sugerir cambios",
  toggleLightAndDark: "Alternar entre modo claro y oscuro",
  "pagination.prev": "Anterior",
  "pagination.next": "Siguiente",

  // Footer
  "footer.text": "Copyright © {year} Cuentos Populares Chinos | Todos los derechos reservados",

  // Date
  "date.published": "Publicado",
  "date.updated": "Actualizado",
  "date.month.1": "enero",
  "date.month.2": "febrero",
  "date.month.3": "marzo",
  "date.month.4": "abril",
  "date.month.5": "mayo",
  "date.month.6": "junio",
  "date.month.7": "julio",
  "date.month.8": "agosto",
  "date.month.9": "septiembre",
  "date.month.10": "octubre",
  "date.month.11": "noviembre",
  "date.month.12": "diciembre",

  // Socials
  "socials.github": `${baseStrings["site.title"]} en GitHub`,
  "socials.facebook": `${baseStrings["site.title"]} en Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} en Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} en LinkedIn`,
  "socials.mail": `Enviar un correo a ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} en X`,
  "socials.twitch": `${baseStrings["site.title"]} en Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} en YouTube`,
  "socials.whatsapp": `${baseStrings["site.title"]} en WhatsApp`,
  "socials.snapchat": `${baseStrings["site.title"]} en Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} en Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} en TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} en CodePen`,
  "socials.discord": `${baseStrings["site.title"]} en Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} en GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} en Reddit`,
  "socials.skype": `${baseStrings["site.title"]} en Skype`,
  "socials.steam": `${baseStrings["site.title"]} en Steam`,
  "socials.telegram": `${baseStrings["site.title"]} en Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} en Mastodon`,

  // Share
  "sharePost.desc": "Comparte este cuento en",
  "sharePost.on": "Comparte este cuento en {media}",
  "sharePost.via": "Comparte este cuento vía {media}",

  // A11y
  "a11y.skipToContent": "Saltar al contenido",
  "a11y.rssFeed": "Feed RSS",
  "a11y.openMenu": "Abrir el menú",
  "a11y.closeMenu": "Cerrar el menú",
  "a11y.archives": "Archivo",
  "a11y.search": "Buscar",
  "a11y.themeButtonDefaultLabel": "Automático",
  "a11y.pagination": "Paginación",
  "a11y.breadcrumb": "Ruta de navegación",
  "a11y.languagePicker": "Selector de idioma",
};

export default ESLocale;