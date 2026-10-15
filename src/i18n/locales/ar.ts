import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "الحكايات الشعبية الصينية",
  "site.desc": "مكتبة رقمية متعددة اللغات للحكايات الشعبية الصينية، تجمع الحكايات الشعبية والأساطير وقصص الشخصيات الشهيرة.",
};

const ARLocale: I18nStrings = {
  ...baseStrings,

  // Hero
  "hero.title": "الحكايات الشعبية الصينية",
  "hero.body": `
        الحكايات الشعبية الصينية هي مكتبة رقمية متعددة اللغات تجمع الحكايات الشعبية الصينية
        والأساطير وقصص الشخصيات الشهيرة.
        نعمل على اختيار الحكايات الشعبية الصينية وتقديمها باللغات الإنجليزية
        والإسبانية والفرنسية والعربية والروسية،
        ليتمكن المزيد من القراء حول العالم من اكتشاف القصص الصينية
        والاستمتاع بسحر الأساطير الشعبية.
`,
  "hero.beforeReadme": "ابدأ بقراءة الحكايات، أو اطّلع على",
  "hero.readme": "من نحن",
  "hero.afterReadme": "لمعرفة المزيد.",

  // General
  copy: "نسخ",
  copied: "تم النسخ",
  by: "بواسطة",
  about: "عن الموقع",
  socialLinks: "روابط التواصل الاجتماعي",
  home: "الصفحة الرئيسية",
  posts: "الحكايات",
  "posts.desc": "جميع الحكايات المنشورة في الحكايات الشعبية الصينية.",
  tag: "وسم",
  "tag.desc": 'جميع الحكايات التي تحمل وسم "{name}".',
  tags: "الوسوم",
  "tags.desc": "جميع الوسوم المستخدمة في الحكايات",
  archives: "الأرشيف",
  "archives.desc": "جميع الحكايات المؤرشفة في الحكايات الشعبية الصينية.",
  featured: "مختارة",
  recentPosts: "أحدث الحكايات",
  tableOfContents: "جدول المحتويات",
  "tableOfContents.desc": "افتح جدول المحتويات",
  allPosts: "جميع الحكايات",
  search: "البحث",
  "search.desc": "ابحث عن أي حكاية",
  "search.placeholder": "ابحث في العناوين أو الملخصات أو النصوص...",
  pages: "الصفحات",
  page: "الصفحة",
  pageWithNo: "صفحة رقم {no}",

  // Navigation
  "navigation.goBack": "رجوع",
  "navigation.goBackHome": "العودة إلى الصفحة الرئيسية",
  "navigation.backToTop": "إلى الأعلى",
  "navigation.nextPost": "الحكاية التالية",
  "navigation.prevPost": "الحكاية السابقة",
  pageNotFound: "الصفحة غير موجودة",
  notFound: "غير موجود",
  rssFeed: "خلاصة RSS",
  suggestChanges: "اقترح تعديلاً",
  toggleLightAndDark: "التبديل بين الوضع الفاتح والداكن",
  "pagination.prev": "السابق",
  "pagination.next": "التالي",

  // Footer
  "footer.text": "حقوق النشر © {year} الحكايات الشعبية الصينية | جميع الحقوق محفوظة",

  // Date
  "date.published": "نُشر في",
  "date.updated": "حُدّث في",
  "date.month.1": "يناير",
  "date.month.2": "فبراير",
  "date.month.3": "مارس",
  "date.month.4": "أبريل",
  "date.month.5": "مايو",
  "date.month.6": "يونيو",
  "date.month.7": "يوليو",
  "date.month.8": "أغسطس",
  "date.month.9": "سبتمبر",
  "date.month.10": "أكتوبر",
  "date.month.11": "نوفمبر",
  "date.month.12": "ديسمبر",

  // Socials
  "socials.github": `${baseStrings["site.title"]} على GitHub`,
  "socials.facebook": `${baseStrings["site.title"]} على Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} على Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} على LinkedIn`,
  "socials.mail": `أرسل بريدًا إلكترونيًا إلى ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} على X`,
  "socials.twitch": `${baseStrings["site.title"]} على Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} على YouTube`,
  "socials.whatsapp": `${baseStrings["site.title"]} على WhatsApp`,
  "socials.snapchat": `${baseStrings["site.title"]} على Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} على Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} على TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} على CodePen`,
  "socials.discord": `${baseStrings["site.title"]} على Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} على GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} على Reddit`,
  "socials.skype": `${baseStrings["site.title"]} على Skype`,
  "socials.steam": `${baseStrings["site.title"]} على Steam`,
  "socials.telegram": `${baseStrings["site.title"]} على Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} على Mastodon`,

  // Share
  "sharePost.desc": "شارك هذه الحكاية على",
  "sharePost.on": "شارك هذه الحكاية على {media}",
  "sharePost.via": "شارك هذه الحكاية عبر {media}",

  // A11y
  "a11y.skipToContent": "تجاوز إلى المحتوى",
  "a11y.rssFeed": "خلاصة RSS",
  "a11y.openMenu": "افتح القائمة",
  "a11y.closeMenu": "أغلق القائمة",
  "a11y.archives": "الأرشيف",
  "a11y.search": "البحث",
  "a11y.themeButtonDefaultLabel": "تلقائي",
  "a11y.pagination": "ترقيم الصفحات",
  "a11y.breadcrumb": "مسار التنقل",
  "a11y.languagePicker": "اختيار اللغة",
};

export default ARLocale;