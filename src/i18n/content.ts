// ─────────────────────────────────────────────────────────────
// CONTENT TRANSLATIONS — translated versions of your personal
// content (bio, timeline, certificates, etc.)
//
// HOW THIS WORKS: each array here lines up BY POSITION with the
// matching array in src/data/*.ts. Item [0] here translates
// item [0] there, and so on.
//
// If you add a new certificate/project/etc. in src/data/ without
// adding a matching translation here, it will simply display in
// English for Russian/Tajik/Arabic visitors — nothing breaks.
//
// If you REORDER or DELETE an item in src/data/, remember to
// reorder/delete the matching entry here too, or translations
// will end up attached to the wrong item.
// ─────────────────────────────────────────────────────────────

import { L, type LocalizedText } from './config'

// ── Profile (aligned with data/profile.ts single fields) ──────
export const profileText = {
  title: L(
    'Computer Engineering Student & Aspiring Software Engineer',
    'Студент компьютерной инженерии и начинающий инженер-программист',
    'Донишҷӯи муҳандисии компютерӣ ва муҳандиси барномасози ояндадор',
    'طالب هندسة حاسوب ومهندس برمجيات طموح'
  ),
  tagline: L(
    'Building my skills in software engineering, exploring technology, creating projects, and continuously pushing myself to become better.',
    'Развиваю навыки программной инженерии, изучаю технологии, создаю проекты и постоянно работаю над тем, чтобы становиться лучше.',
    'Малакаҳои муҳандисии барномасозиро инкишоф медиҳам, технологияро меомӯзам, лоиҳаҳо месозам ва пайваста барои беҳтар шудан талош мекунам.',
    'أطوّر مهاراتي في هندسة البرمجيات، وأستكشف التقنية، وأنشئ المشاريع، وأدفع نفسي باستمرار لأصبح أفضل.'
  ),
  status: L(
    'Preparing to study Computer Engineering at the University of Genoa',
    'Готовлюсь к учёбе по специальности «Компьютерная инженерия» в Университете Генуи',
    'Барои таҳсил дар риштаи муҳандисии компютерӣ дар Донишгоҳи Генуя омодагӣ мебинам',
    'أستعد لدراسة هندسة الحاسوب في جامعة جنوة'
  ),
  motto: L('Always learning. Always building.', 'Всегда учусь. Всегда создаю.', 'Ҳамеша меомӯзам. Ҳамеша месозам.', 'أتعلم دائمًا. أبني دائمًا.'),
}

// ── Bio paragraphs (aligned with data/profile.ts -> bio[]) ────
export const bioText: LocalizedText[] = [
  L(
    "I'm a Computer Science and Computer Engineering student with a growing focus on software development, AI, and web development. My path into technology has taken me across countries — I completed my secondary education in Abu Dhabi, where I first started building real programming skills alongside my studies.",
    'Я студент по специальностям компьютерные науки и компьютерная инженерия, с растущим интересом к разработке ПО, ИИ и веб-разработке. Мой путь в технологии проходил через разные страны — среднее образование я получил в Абу-Даби, где впервые начал развивать реальные навыки программирования параллельно с учёбой.',
    'Ман донишҷӯи риштаҳои информатика ва муҳандисии компютерӣ ҳастам, ки таваҷҷуҳи афзоянда ба таҳияи нармафзор, ҳуши сунъӣ ва веб-барномасозӣ дорам. Роҳи ман ба технология аз якчанд кишвар гузашт — маълумоти миёнаро дар Абу-Дабӣ гирифтам, ки дар он ҷо бори аввал малакаҳои воқеии барномасозиро дар баробари таҳсил инкишоф додам.',
    'أنا طالب في علوم الحاسوب وهندسة الحاسوب، مع اهتمام متزايد بتطوير البرمجيات والذكاء الاصطناعي وتطوير الويب. أخذني طريقي في التقنية عبر عدة بلدان — أكملت تعليمي الثانوي في أبوظبي، حيث بدأت أول مرة ببناء مهارات برمجية حقيقية إلى جانب دراستي.'
  ),
  L(
    'Hackathons and competitions became a big part of how I learned: getting a team together, building something under time pressure, and figuring things out as I went. That hands-on experience taught me more than any single course could.',
    'Хакатоны и соревнования стали важной частью моего обучения: собрать команду, создать что-то в условиях ограниченного времени и разбираться на ходу. Этот практический опыт научил меня большему, чем любой отдельный курс.',
    'Хакатонҳо ва мусобиқаҳо қисми муҳими омӯзиши ман шуданд: ҷамъ кардани даста, сохтани чизе дар шароити маҳдудияти вақт ва фаҳмидани ҳама чиз дар ҷараён. Ин таҷрибаи амалӣ ба ман бештар аз ҳар курси алоҳида омӯзонд.',
    'أصبحت الهاكاثونات والمسابقات جزءًا كبيرًا من طريقة تعلمي: تجميع فريق، وبناء شيء تحت ضغط الوقت، واكتشاف الحلول أثناء العمل. علّمتني هذه التجربة العملية أكثر مما قد يعلّمه أي مقرر دراسي واحد.'
  ),
  L(
    "I also gained internship experience in technology and innovation, which gave me a first real look at how software gets built outside the classroom. [ADD MORE DETAIL ABOUT YOUR INTERNSHIP ONCE YOU SHARE THE SPECIFICS]",
    'Я также получил опыт стажировки в сфере технологий и инноваций, что дало мне первое реальное представление о том, как создаётся ПО за пределами учебной аудитории. [ДОБАВЬТЕ БОЛЬШЕ ДЕТАЛЕЙ О СТАЖИРОВКЕ, КОГДА БУДУТ ГОТОВЫ]',
    'Ман инчунин таҷрибаи стажировкаро дар соҳаи технология ва инноватсия гирифтам, ки ба ман аввалин тасаввуроти воқеӣ дод, ки нармафзор берун аз синфхона чӣ гуна сохта мешавад. [ВАҚТЕ КИ МАЪЛУМОТИ ДАҚИҚ ДОРЕД, ИН ҶОРО ПУР КУНЕД]',
    'اكتسبت أيضًا خبرة تدريب في مجال التقنية والابتكار، ما أعطاني أول نظرة حقيقية على كيفية بناء البرمجيات خارج الفصل الدراسي. [أضف مزيدًا من التفاصيل حول تدريبك عند توفرها]'
  ),
  L(
    "I'm currently preparing to continue my studies in Computer Engineering at the University of Genoa in Italy — the next step in becoming a stronger, more capable engineer.",
    'Сейчас я готовлюсь продолжить обучение по специальности «Компьютерная инженерия» в Университете Генуи в Италии — это следующий шаг к тому, чтобы стать более сильным и опытным инженером.',
    'Ҳоло ман барои идомаи таҳсил дар риштаи муҳандисии компютерӣ дар Донишгоҳи Генуяи Итолиё омодагӣ мебинам — қадами навбатӣ барои муҳандиси қавитар ва боистеъдодтар шудан.',
    'أستعد حاليًا لمواصلة دراستي في هندسة الحاسوب في جامعة جنوة بإيطاليا — الخطوة التالية لأصبح مهندسًا أقوى وأكثر كفاءة.'
  ),
]

// ── Timeline (aligned with data/timeline.ts) ───────────────────
export const timelineText: { title: LocalizedText; description: LocalizedText }[] = [
  {
    title: L('First lines of code', 'Первые строки кода', 'Аввалин сатрҳои код', 'أول أسطر برمجية'),
    description: L(
      'Started developing my interest in technology and computers — curiosity turned into a habit.',
      'Начал развивать интерес к технологиям и компьютерам — любопытство переросло в привычку.',
      'Таваҷҷуҳ ба технология ва компютерҳоро инкишоф додам — кунҷковӣ ба одат табдил ёфт.',
      'بدأت في تنمية اهتمامي بالتقنية والحواسيب — تحول الفضول إلى عادة.'
    ),
  },
  {
    title: L('Studying abroad', 'Учёба за границей', 'Таҳсил дар хориҷа', 'الدراسة في الخارج'),
    description: L(
      'Continued my education abroad, adapting to a new environment while keeping technology close.',
      'Продолжил обучение за рубежом, адаптируясь к новой среде и не теряя связи с технологиями.',
      'Таҳсилро дар хориҷа идома додам, ба муҳити нав мутобиқ шудам, вале аз технология дур нашудам.',
      'واصلت تعليمي في الخارج، وتأقلمت مع بيئة جديدة مع البقاء قريبًا من التقنية.'
    ),
  },
  {
    title: L('Finished high school', 'Окончил школу', 'Хатми мактаби миёна', 'أنهيت المدرسة الثانوية'),
    description: L(
      'Completed high school and started preparing seriously for a future in engineering.',
      'Окончил среднюю школу и начал серьёзно готовиться к будущему в инженерии.',
      'Мактаби миёнаро хатм кардам ва ба омодагии ҷиддӣ барои ояндаи муҳандисӣ шурӯъ кардам.',
      'أكملت المرحلة الثانوية وبدأت الاستعداد الجاد لمستقبل في الهندسة.'
    ),
  },
  {
    title: L('Began Computer Science', 'Начал изучать информатику', 'Оғози омӯзиши информатика', 'بدأت علوم الحاسوب'),
    description: L(
      'Started studying Computer Science — my first real, structured exposure to the field.',
      'Начал обучение по специальности «Информатика» — мой первый настоящий, структурированный опыт в этой области.',
      'Ба омӯзиши информатика шурӯъ кардам — аввалин таҷрибаи воқеӣ ва сохторёфтаи ман дар ин соҳа.',
      'بدأت دراسة علوم الحاسوب — أول تجربة حقيقية ومنظمة لي في هذا المجال.'
    ),
  },
  {
    title: L(
      'Accepted into Computer Engineering, Italy',
      'Поступление на компьютерную инженерию, Италия',
      'Қабул ба муҳандисии компютерӣ, Итолиё',
      'القبول في هندسة الحاسوب، إيطاليا'
    ),
    description: L(
      'Accepted to study Computer Engineering at the University of Genoa — a major step forward.',
      'Поступил на специальность «Компьютерная инженерия» в Университет Генуи — важный шаг вперёд.',
      'Ба таҳсили муҳандисии компютерӣ дар Донишгоҳи Генуя қабул шудам — қадами муҳим ба пеш.',
      'تم قبولي لدراسة هندسة الحاسوب في جامعة جنوة — خطوة كبيرة إلى الأمام.'
    ),
  },
  {
    title: L('Building in public', 'Развиваюсь публично', 'Сохтан дар назди ҳама', 'البناء علنًا'),
    description: L(
      'Developing projects, gaining experience, and learning new technologies — one commit at a time.',
      'Разрабатываю проекты, получаю опыт и изучаю новые технологии — коммит за коммитом.',
      'Лоиҳаҳо месозам, таҷриба мегирам ва технологияҳои навро меомӯзам — коммит ба коммит.',
      'أطوّر المشاريع، وأكتسب الخبرة، وأتعلم تقنيات جديدة — التزامًا تلو الآخر.'
    ),
  },
]

// ── Education (aligned with data/education.ts) ─────────────────
export const educationText: { degree: LocalizedText; description: LocalizedText }[] = [
  {
    degree: L(
      'B.Sc. Computer Engineering',
      'Бакалавр компьютерной инженерии',
      'Бакалаври муҳандисии компютерӣ',
      'بكالوريوس هندسة الحاسوب'
    ),
    description: L(
      'Studying the foundations of computer engineering: algorithms, systems, and software design, with a growing focus on building real projects alongside coursework.',
      'Изучаю основы компьютерной инженерии: алгоритмы, системы и проектирование ПО, с растущим фокусом на реальные проекты параллельно с учёбой.',
      'Асосҳои муҳандисии компютериро меомӯзам: алгоритмҳо, системаҳо ва тарроҳии нармафзор, бо таваҷҷуҳи афзоянда ба сохтани лоиҳаҳои воқеӣ дар баробари таҳсил.',
      'أدرس أساسيات هندسة الحاسوب: الخوارزميات والأنظمة وتصميم البرمجيات، مع تركيز متزايد على بناء مشاريع حقيقية إلى جانب المقررات الدراسية.'
    ),
  },
  {
    degree: L(
      'High School Diploma (Secondary Education)',
      'Аттестат о среднем образовании',
      'Шаҳодатномаи мактаби миёна',
      'شهادة الثانوية العامة'
    ),
    description: L(
      'Completed secondary education in Abu Dhabi, where I began building practical programming skills and took part in technology competitions and hackathons alongside my coursework.',
      'Получил среднее образование в Абу-Даби, где начал развивать практические навыки программирования и участвовал в технологических конкурсах и хакатонах параллельно с учёбой.',
      'Маълумоти миёнаро дар Абу-Дабӣ гирифтам, ки дар он ҷо малакаҳои амалии барномасозиро инкишоф додам ва дар мусобиқаҳои технологӣ ва хакатонҳо дар баробари таҳсил иштирок кардам.',
      'أكملت تعليمي الثانوي في أبوظبي، حيث بدأت ببناء مهارات برمجية عملية وشاركت في مسابقات تقنية وهاكاثونات إلى جانب دراستي.'
    ),
  },
]

// ── Certificates (aligned with data/certificates.ts) ───────────
export const certificatesText: { title: LocalizedText; description: LocalizedText }[] = [
  {
    title: L(
      'Certificate of Participation — Engineering Hackathon',
      'Сертификат участника — инженерный хакатон',
      'Сертификати иштирокчӣ — хакатони муҳандисӣ',
      'شهادة مشاركة — هاكاثون هندسي'
    ),
    description: L(
      'Awarded for participating in the 2nd Annual College of Engineering Hackathon Competition at Abu Dhabi University.',
      'Вручён за участие во 2-м ежегодном хакатоне Инженерного колледжа Университета Абу-Даби.',
      'Барои иштирок дар 2-юмин мусобиқаи солонаи хакатони Коллеҷи Муҳандисии Донишгоҳи Абу-Дабӣ дода шудааст.',
      'مُنحت لقاء المشاركة في هاكاثون كلية الهندسة السنوي الثاني بجامعة أبوظبي.'
    ),
  },
  {
    title: L(
      'VEX‑VRC Robotics Competition',
      'Соревнование по робототехнике VEX‑VRC',
      'Мусобиқаи робототехникаи VEX‑VRC',
      'مسابقة الروبوتات VEX‑VRC'
    ),
    description: L(
      'Certificate of appreciation for participating in the VEX‑VRC robotics competition during the 2022–2023 school year.',
      'Благодарственный сертификат за участие в соревновании по робототехнике VEX‑VRC в 2022–2023 учебном году.',
      'Сертификати миннатдорӣ барои иштирок дар мусобиқаи робототехникаи VEX‑VRC дар соли таҳсили 2022–2023.',
      'شهادة تقدير لقاء المشاركة في مسابقة الروبوتات VEX‑VRC خلال العام الدراسي 2022–2023.'
    ),
  },
  {
    title: L('Scouts Program', 'Программа скаутов', 'Барномаи Пешоҳангон', 'برنامج الكشافة'),
    description: L(
      'Certificate of appreciation for participation in the school Scouts program, 2022–2023.',
      'Благодарственный сертификат за участие в школьной скаутской программе, 2022–2023.',
      'Сертификати миннатдорӣ барои иштирок дар барномаи пешоҳангии мактаб, 2022–2023.',
      'شهادة تقدير لقاء المشاركة في برنامج الكشافة المدرسي، 2022–2023.'
    ),
  },
  {
    title: L(
      'Academic Excellence Certificate',
      'Сертификат академической успеваемости',
      'Сертификати комёбии таҳсилӣ',
      'شهادة التفوق الأكاديمي'
    ),
    description: L(
      'Recognition for strong academic performance during the 2022–2023 school year.',
      'Признание высоких учебных результатов в 2022–2023 учебном году.',
      'Эътирофи натиҷаҳои баланди таҳсилӣ дар соли таҳсили 2022–2023.',
      'تقدير للأداء الأكاديمي المتميز خلال العام الدراسي 2022–2023.'
    ),
  },
  {
    title: L(
      'Academic Excellence Certificate',
      'Сертификат академической успеваемости',
      'Сертификати комёбии таҳсилӣ',
      'شهادة التفوق الأكاديمي'
    ),
    description: L(
      'Recognition for strong academic performance during the 2022–2023 school year.',
      'Признание высоких учебных результатов в 2022–2023 учебном году.',
      'Эътирофи натиҷаҳои баланди таҳсилӣ дар соли таҳсили 2022–2023.',
      'تقدير للأداء الأكاديمي المتميز خلال العام الدراسي 2022–2023.'
    ),
  },
]

// ── Projects (aligned with data/projects.ts) ────────────────────
export const projectsText: { description: LocalizedText }[] = [
  {
    description: L(
      'A basic calculator app built to practice core programming logic and backend fundamentals — handling user input, performing arithmetic operations, and serving the interface through a Flask web app.',
      'Простое приложение-калькулятор, созданное для отработки базовой программной логики и основ бэкенда — обработка ввода пользователя, выполнение арифметических операций и подача интерфейса через веб-приложение на Flask.',
      'Барномаи оддии ҳисобкунак, ки барои машқи мантиқи асосии барномасозӣ ва асосҳои бэкенд сохта шудааст — коркарди вуруди корбар, иҷрои амалиёти арифметикӣ ва пешниҳоди интерфейс тавассути барномаи веб дар Flask.',
      'تطبيق آلة حاسبة بسيط بُني لممارسة منطق البرمجة الأساسي وأساسيات الواجهة الخلفية — معالجة إدخال المستخدم، وإجراء العمليات الحسابية، وتقديم الواجهة عبر تطبيق ويب بـ Flask.'
    ),
  },
  {
    description: L(
      'This site — a personal portfolio built to showcase my education, projects, certificates, and journey into software engineering. Built with a component-based architecture and content kept separate from the UI so it stays easy to update.',
      'Этот сайт — личное портфолио, созданное для демонстрации моего образования, проектов, сертификатов и пути в программную инженерию. Построен на компонентной архитектуре с отделением контента от интерфейса для лёгкого обновления.',
      'Ин сайт — портфолиои шахсӣ, ки барои намоиши таҳсилот, лоиҳаҳо, сертификатҳо ва роҳи ман ба муҳандисии барномасозӣ сохта шудааст. Бо меъмории ба ҷузъҳо асосёфта сохта шуда, мундариҷа аз интерфейс ҷудо нигоҳ дошта мешавад, то навсозӣ осон бошад.',
      'هذا الموقع — ملف شخصي بُني لعرض تعليمي ومشاريعي وشهاداتي ورحلتي في هندسة البرمجيات. مبني على معمارية قائمة على المكوّنات مع فصل المحتوى عن الواجهة ليبقى التحديث سهلاً.'
    ),
  },
]

// ── Skills categories (aligned with data/skills.ts) ─────────────
export const skillsText: { category: LocalizedText }[] = [
  { category: L('Programming', 'Программирование', 'Барномасозӣ', 'البرمجة') },
  { category: L('Frameworks', 'Фреймворки', 'Фреймворкҳо', 'أطر العمل') },
  { category: L('Tools', 'Инструменты', 'Абзорҳо', 'الأدوات') },
  { category: L('Data / AI', 'Данные / ИИ', 'Маълумот / ҲИ', 'البيانات / الذكاء الاصطناعي') },
]

// ── Experience (aligned with data/experience.ts) ─────────────────
export const experienceText: { position: LocalizedText }[] = [
  {
    position: L(
      'Technology / Innovation Internship',
      'Стажировка в сфере технологий и инноваций',
      'Стажировка дар соҳаи технология ва инноватсия',
      'تدريب في التقنية والابتكار'
    ),
  },
]

// ── Goals (aligned with data/goals.ts) ────────────────────────────
export const goalsText: LocalizedText[] = [
  L(
    'Becoming a stronger software engineer',
    'Стать более сильным инженером-программистом',
    'Муҳандиси барномасози қавитар шудан',
    'أن أصبح مهندس برمجيات أقوى'
  ),
  L(
    'Improving my programming skills, every project',
    'Совершенствовать навыки программирования с каждым проектом',
    'Беҳтар кардани малакаҳои барномасозӣ бо ҳар лоиҳа',
    'تحسين مهاراتي البرمجية مع كل مشروع'
  ),
  L(
    'Building projects that solve real problems',
    'Создавать проекты, решающие реальные проблемы',
    'Сохтани лоиҳаҳое, ки мушкилоти воқеиро ҳал мекунанд',
    'بناء مشاريع تحل مشكلات حقيقية'
  ),
  L(
    'Learning AI and machine learning in depth',
    'Глубоко изучить ИИ и машинное обучение',
    'Амиқ омӯхтани ҲИ ва омӯзиши мошинӣ',
    'تعلم الذكاء الاصطناعي والتعلم الآلي بعمق'
  ),
  L(
    'Studying Computer Engineering to a high standard',
    'Учиться компьютерной инженерии на высоком уровне',
    'Бо стандарти баланд омӯхтани муҳандисии компютерӣ',
    'دراسة هندسة الحاسوب بمعايير عالية'
  ),
  L(
    'Getting international experience',
    'Получить международный опыт',
    'Ба даст овардани таҷрибаи байналмилалӣ',
    'اكتساب خبرة دولية'
  ),
  L(
    'Contributing to interesting technology projects',
    'Вносить вклад в интересные технологические проекты',
    'Саҳм гузоштан ба лоиҳаҳои ҷолиби технологӣ',
    'المساهمة في مشاريع تقنية مثيرة للاهتمام'
  ),
]

// ── Gallery captions (aligned with data/gallery.ts) ───────────────
export const galleryText: LocalizedText[] = [
  L('AI Hack CCC — IT Park Dushanbe', 'AI Hack CCC — IT Park Душанбе', 'AI Hack CCC — IT Park Душанбе', 'AI Hack CCC — آي تي بارك دوشنبه'),
  L('AI Hack CCC — team workspace', 'AI Hack CCC — рабочее место команды', 'AI Hack CCC — ҷои кории даста', 'AI Hack CCC — مساحة عمل الفريق'),
  L('"AI Hackathon: Code. Create. Conquer"', '«AI Hackathon: Code. Create. Conquer»', '«AI Hackathon: Code. Create. Conquer»', '«AI Hackathon: Code. Create. Conquer»'),
  L('With a friend', 'С другом', 'Бо дӯст', 'مع صديق'),
]
