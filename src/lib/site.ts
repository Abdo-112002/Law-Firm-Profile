// Set NEXT_PUBLIC_SITE_URL to the production domain (e.g. https://example.com) for canonical URLs, OG tags and the sitemap.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'http://localhost:3000'
).replace(/\/$/, '');

export const siteName = 'مكتب الأستاذ حمدي البسطويسي للمحاماة';
export const siteTitle = 'مكتب الأستاذ حمدي البسطويسي | محامٍ ومستشار قانوني';
export const siteDescription = 'مكتب الأستاذ حمدي البسطويسي، المحامي بالإدارية العليا والدستورية العليا والمستشار القانوني. استشارات قانونية وتمثيل قضائي في القضايا المدنية والأحوال الشخصية والجنائية والإدارية وتأسيس الشركات.';

export const phone = '01032420257';
export const phoneIntl = '+201032420257';
export const wa = '201032420257';
export const waLink = (text?: string) => `https://wa.me/${wa}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
export const bookingMsg = 'السلام عليكم، أرغب في حجز استشارة قانونية مع الأستاذ حمدي البسطويسي.';

export const links = [
  ['#services', 'مجالات الممارسة'],
  ['#about', 'عن المكتب'],
  ['#process', 'آلية العمل'],
  ['#faq', 'الأسئلة الشائعة'],
] as const;

export const services = [
  { icon: 'scale', title: 'القضايا المدنية والعقود', text: 'مباشرة الدعاوى المدنية أمام مختلف درجات التقاضي، وصياغة العقود ومراجعتها، وتسوية المطالبات والمنازعات الناشئة عنها.' },
  { icon: 'users', title: 'الأحوال الشخصية', text: 'تمثيل الموكلين أمام محاكم الأسرة في دعاوى النفقة والحضانة والرؤية والطلاق والخلع، مع صون كامل لخصوصية الأسرة.' },
  { icon: 'gavel', title: 'القضايا الجنائية', text: 'الحضور مع الموكلين في مرحلتي التحقيق والمحاكمة، وإعداد مذكرات الدفاع، والطعن على الأحكام وفقًا للإجراءات المقررة قانونًا.' },
  { icon: 'landmark', title: 'القضاء الإداري والدستوري', text: 'رفع دعاوى الإلغاء والتعويض أمام مجلس الدولة، والطعن أمام المحكمة الإدارية العليا، وإبداء الدفوع الدستورية أمام المحكمة الدستورية العليا.' },
  { icon: 'building', title: 'تأسيس الشركات', text: 'اختيار الشكل القانوني الملائم للنشاط، وإعداد العقود التأسيسية والأنظمة الأساسية، واستيفاء إجراءات القيد والترخيص.' },
  { icon: 'briefcase', title: 'الاستشارات القانونية', text: 'تقديم الرأي القانوني، وتقييم المركز القانوني للموكل، وبيان البدائل المتاحة والمخاطر المحتملة قبل اتخاذ القرار.' },
] as const;

export const principles = [
  'دراسة المركز القانوني للموكل دراسةً وافية قبل اتخاذ أي إجراء.',
  'بيان البدائل القانونية والمخاطر المحتملة بوضوح وشفافية.',
  'متابعة دقيقة للملف وإحاطة الموكل بمستجداته أولًا بأول.',
  'الالتزام التام بسرية المعلومات وفقًا لأصول مهنة المحاماة.',
];

export const steps = [
  ['عرض الموضوع', 'التواصل مع المكتب هاتفيًا أو عبر واتساب لعرض موجز للوقائع وتحديد موعد الاستشارة.'],
  ['الدراسة والتقييم', 'فحص المستندات والوقائع وتكييفها قانونيًا، وبيان المركز القانوني والبدائل المتاحة.'],
  ['التوكيل ومباشرة الإجراءات', 'عند الاتفاق على التوكيل يُحدَّد نطاق العمل بوضوح، ثم تُباشَر الإجراءات القانونية اللازمة.'],
];

export const faqs = [
  ['هل يمكن الحصول على استشارة قانونية قبل توكيل المكتب؟', 'نعم، يمكنكم التواصل مع المكتب لعرض موضوعكم وتحديد موعد للاستشارة، ثم يُتَّخذ القرار بشأن الإجراء المناسب بعد دراسة الحالة.'],
  ['ما نوعية القضايا التي يتولاها المكتب؟', 'يتولى المكتب القضايا الداخلة في مجالات الممارسة الموضحة بالموقع، وتُدرَس كل حالة على حدة قبل الاتفاق على نطاق العمل.'],
  ['كيف يمكن التواصل مع المكتب؟', `عبر الاتصال الهاتفي المباشر على الرقم ${phone}، أو بإرسال رسالة عبر واتساب من خلال أزرار التواصل بالموقع.`],
  ['هل تحظى المعلومات التي أقدمها بالسرية؟', 'نعم، تُعامَل جميع المعلومات والمستندات بسرية تامة، التزامًا بواجب الحفاظ على سر المهنة المقرر بقانون المحاماة.'],
];

export const areas = ['القضاء الإداري', 'القضاء الدستوري', 'القضايا المدنية', 'الأحوال الشخصية', 'القضايا الجنائية', 'تأسيس الشركات', 'الاستشارات القانونية'];

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${siteUrl}/#office`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      telephone: phoneIntl,
      image: `${siteUrl}/icon.svg`,
      areaServed: { '@type': 'Country', name: 'مصر' },
      availableLanguage: 'ar',
      knowsAbout: services.map(s => s.title),
      founder: { '@id': `${siteUrl}/#attorney` },
      contactPoint: { '@type': 'ContactPoint', telephone: phoneIntl, contactType: 'customer service', availableLanguage: 'ar' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'مجالات الممارسة',
        itemListElement: services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#attorney`,
      name: 'حمدي البسطويسي',
      jobTitle: 'محامٍ بالإدارية العليا والدستورية العليا ومستشار قانوني',
      telephone: phoneIntl,
      worksFor: { '@id': `${siteUrl}/#office` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: 'ar',
      publisher: { '@id': `${siteUrl}/#office` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      inLanguage: 'ar',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};
