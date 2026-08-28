// ─────────────────────────────────────────────────────────────
// UI STRINGS — every piece of static site chrome (nav, buttons,
// section headings, labels) in all 4 supported languages.
// This does NOT include your personal content (bio, projects,
// certificates, etc.) — that lives in src/i18n/content.ts.
// ─────────────────────────────────────────────────────────────

import { L, type LocalizedText } from './config'

export const ui = {
  nav: {
    home: L('Home', 'Главная', 'Асосӣ', 'الرئيسية'),
    about: L('About', 'Обо мне', 'Дар бораи ман', 'نبذة عني'),
    education: L('Education', 'Образование', 'Таҳсилот', 'التعليم'),
    achievements: L('Achievements', 'Достижения', 'Дастовардҳо', 'الإنجازات'),
    projects: L('Projects', 'Проекты', 'Лоиҳаҳо', 'المشاريع'),
    skills: L('Skills', 'Навыки', 'Малакаҳо', 'المهارات'),
    gallery: L('Gallery', 'Галерея', 'Галерея', 'معرض الصور'),
    experience: L('Experience', 'Опыт', 'Таҷриба', 'الخبرة'),
    contact: L('Contact', 'Контакты', 'Тамос', 'التواصل'),
  },

  hero: {
    viewJourney: L('View My Journey', 'Мой путь', 'Роҳи ман', 'مسيرتي'),
    viewProjects: L('View My Projects', 'Мои проекты', 'Лоиҳаҳои ман', 'مشاريعي'),
  },

  about: {
    eyebrow: L('about', 'обо мне', 'дар бораи ман', 'نبذة عني'),
    title: L('Who I am', 'Кто я', 'Ман кистам', 'من أنا'),
    subtitle: L(
      'A short introduction, in my own words',
      'Краткое представление своими словами',
      'Муаррифии кӯтоҳ бо забони худам',
      'مقدمة موجزة بكلماتي الخاصة'
    ),
    journeyLabel: L('My Journey', 'Мой путь', 'Роҳи ман', 'مسيرتي'),
  },

  education: {
    eyebrow: L('education', 'образование', 'таҳсилот', 'التعليم'),
    title: L('Where I\'ve studied', 'Где я учился', 'Дар куҷо таҳсил кардам', 'أين درست'),
  },

  achievements: {
    eyebrow: L('achievements', 'достижения', 'дастовардҳо', 'الإنجازات'),
    title: L('Certificates & achievements', 'Сертификаты и достижения', 'Сертификатҳо ва дастовардҳо', 'الشهادات والإنجازات'),
    subtitle: L(
      'A growing collection of certificates, courses, and milestones. Click any card to view it in full.',
      'Растущая коллекция сертификатов, курсов и достижений. Нажмите на карточку, чтобы посмотреть полностью.',
      'Маҷмӯаи афзояндаи сертификатҳо, курсҳо ва дастовардҳо. Барои дидани пурра ба корт зер кунед.',
      'مجموعة متنامية من الشهادات والدورات والإنجازات. اضغط على أي بطاقة لعرضها بالكامل.'
    ),
    viewCertificate: L('View certificate', 'Посмотреть сертификат', 'Дидани сертификат', 'عرض الشهادة'),
  },

  categories: {
    All: L('All', 'Все', 'Ҳама', 'الكل'),
    Programming: L('Programming', 'Программирование', 'Барномасозӣ', 'البرمجة'),
    'AI / ML': L('AI / ML', 'ИИ / МО', 'ИИ / ML', 'الذكاء الاصطناعي'),
    'Web Development': L('Web Development', 'Веб-разработка', 'Веб-барномасозӣ', 'تطوير الويب'),
    Education: L('Education', 'Образование', 'Таҳсилот', 'التعليم'),
    Other: L('Other', 'Другое', 'Дигар', 'أخرى'),
  } as Record<string, LocalizedText>,

  projects: {
    eyebrow: L('projects', 'проекты', 'лоиҳаҳо', 'المشاريع'),
    title: L('Things I\'ve built', 'Что я создал', 'Чизҳое, ки сохтам', 'أشياء قمت ببنائها'),
    subtitle: L(
      'A selection of projects — some finished, some still in progress. More are always in the pipeline.',
      'Подборка проектов — некоторые завершены, некоторые ещё в процессе. Впереди ещё больше.',
      'Интихоби лоиҳаҳо — баъзеашон анҷом ёфта, баъзеашон ҳанӯз дар раванд. Боз ҳам бештар дар роҳ аст.',
      'مجموعة مختارة من المشاريع — بعضها مكتمل وبعضها قيد التنفيذ. المزيد قادم دائمًا.'
    ),
    code: L('Code', 'Код', 'Код', 'الكود'),
    liveDemo: L('Live Demo', 'Демо', 'Намоиши зинда', 'عرض مباشر'),
  },

  status: {
    Live: L('Live', 'Готово', 'Фаъол', 'مباشر'),
    'In Progress': L('In Progress', 'В процессе', 'Дар раванд', 'قيد التنفيذ'),
    Archived: L('Archived', 'В архиве', 'Бойгонишуда', 'مؤرشف'),
  } as Record<string, LocalizedText>,

  skills: {
    eyebrow: L('skills', 'навыки', 'малакаҳо', 'المهارات'),
    title: L('What I work with', 'С чем я работаю', 'Бо чӣ кор мекунам', 'ما الذي أعمل به'),
    subtitle: L(
      'Tools and technologies I\'ve used and continue to build with — no exaggerated levels, just what\'s real.',
      'Инструменты и технологии, которые я использую — без преувеличений, только реальный опыт.',
      'Асбобҳо ва технологияҳое, ки истифода мебарам — бидуни муболиға, танҳо воқеӣ.',
      'الأدوات والتقنيات التي استخدمتها وما زلت أعمل بها — بلا مبالغة، فقط الواقع.'
    ),
  },

  gallery: {
    eyebrow: L('gallery', 'галерея', 'галерея', 'معرض الصور'),
    title: L('A few moments', 'Несколько моментов', 'Якчанд лаҳза', 'بعض اللحظات'),
    subtitle: L(
      'University, hackathons, certificates, and everything in between.',
      'Университет, хакатоны, сертификаты и всё остальное.',
      'Донишгоҳ, хакатонҳо, сертификатҳо ва ҳама чизи дигар.',
      'الجامعة، الهاكاثونات، الشهادات، وكل ما بينها.'
    ),
  },

  experience: {
    eyebrow: L('experience', 'опыт', 'таҷриба', 'الخبرة'),
    title: L('Where I\'ve worked', 'Где я работал', 'Дар куҷо кор кардам', 'أين عملت'),
  },

  goals: {
    eyebrow: L('what\'s next', 'что дальше', 'минбаъд чӣ', 'ما التالي'),
    title: L('Still compiling.', 'Всё ещё компилируется.', 'Ҳанӯз дар компиляция.', 'لا يزال قيد التجميع.'),
    subtitle: L(
      'This portfolio is a snapshot, not a finish line. Here\'s what I\'m working toward next.',
      'Это портфолио — снимок момента, а не финиш. Вот к чему я иду дальше.',
      'Ин портфолио як лаҳза аст, на хатти анҷом. Инак чизе ки ба сӯи он ҳаракат мекунам.',
      'هذا الملف هو لقطة، وليس خط النهاية. إليك ما أعمل من أجله لاحقًا.'
    ),
  },

  contact: {
    eyebrow: L('contact', 'контакты', 'тамос', 'التواصل'),
    title: L('Let\'s connect', 'Давайте свяжемся', 'Биёед пайваст шавем', 'لنتواصل'),
    subtitle: L(
      'I\'m always interested in learning, building, collaborating, and connecting with people in technology.',
      'Мне всегда интересно учиться, создавать, сотрудничать и знакомиться с людьми в сфере технологий.',
      'Ман ҳамеша ба омӯхтан, сохтан, ҳамкорӣ ва шинос шудан бо одамони соҳаи технология шавқманд ҳастам.',
      'أنا دائمًا مهتم بالتعلم والبناء والتعاون والتواصل مع أشخاص في مجال التقنية.'
    ),
  },

  footer: {
    shortcutHint: L(
      'press "g" then "h" to jump home',
      'нажмите «g», затем «h», чтобы перейти на главную',
      '"g" пас аз он "h"-ро пахш кунед, то ба асосӣ равед',
      'اضغط "g" ثم "h" للانتقال إلى الرئيسية'
    ),
  },
}
