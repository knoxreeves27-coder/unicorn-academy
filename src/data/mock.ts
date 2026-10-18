import { ClassItem, Announcement, SiteSettings, Topper, Testimonial, Stats } from '../types';

/**
 * ============================================================================
 * PLACEHOLDERS: These are mock data entries for Phase 1 & Phase 2 Foundation.
 * In later stages, these will be replaced with real academy figures,
 * actual student photographs, verified board marksheets, and official credentials.
 * ============================================================================
 */

export const MOCK_CLASSES: ClassItem[] = [
  {
    id: 'class-prep',
    level: 'primary',
    name_en: 'Prep & Primary Foundation (Prep to Class 5)',
    name_ur: 'پریپ اور پرائمری فاؤنڈیشن (پریپ تا پنجم)',
    group_name: null,
    subjects_en: ['English', 'Urdu', 'Mathematics', 'General Science'],
    subjects_ur: ['انگریزی', 'اردو', 'ریاضی', 'جنرل سائنس'],
    timing: '03:00 PM - 05:00 PM',
    monthly_fee: 3000,
    sort_order: 1,
    is_active: true,
  },
  {
    id: 'class-6',
    level: 'middle',
    name_en: 'Middle Section (Class 6 - 8)',
    name_ur: 'مڈل سیکشن (چھٹی تا آٹھویں جماعت)',
    group_name: null,
    subjects_en: ['Mathematics', 'General Science', 'English', 'Computer'],
    subjects_ur: ['ریاضی', 'جنرل سائنس', 'انگریزی', 'کمپیوٹر'],
    timing: '03:30 PM - 05:30 PM',
    monthly_fee: 4000,
    sort_order: 2,
    is_active: true,
  },
  {
    id: 'class-9',
    level: 'matric',
    name_en: 'Matriculation (Class 9 & 10 Science)',
    name_ur: 'میٹرک سیکشن (نویں و دسویں سائنس)',
    group_name: null,
    subjects_en: ['Physics', 'Chemistry', 'Biology / Comp', 'Mathematics', 'English'],
    subjects_ur: ['فزکس', 'کیمسٹری', 'بائیولوجی / کمپیوٹر', 'ریاضی', 'انگریزی'],
    timing: '04:00 PM - 07:00 PM',
    monthly_fee: 5500,
    sort_order: 3,
    is_active: true,
  },
  {
    id: 'class-fsc-pre-med',
    level: 'fsc',
    name_en: 'FSc / Intermediate (Pre-Med, Engg, ICS, FA)',
    name_ur: 'ایف ایس سی و انٹرمیڈیٹ (میڈیکل، انجینئرنگ، آئی سی ایس)',
    group_name: 'pre_medical',
    subjects_en: ['Biology / Maths', 'Physics', 'Chemistry / Comp', 'English'],
    subjects_ur: ['حیاتیات / ریاضی', 'طبیعیات (فزکس)', 'کیمیا / کمپیوٹر', 'انگریزی'],
    timing: '04:30 PM - 07:30 PM',
    monthly_fee: 7500,
    sort_order: 4,
    is_active: true,
  },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'announcement-1',
    title_en: 'Admissions Open for Academic Session 2026-2027',
    title_ur: 'تعلیمی سیشن 2026-2027 کے داخلے جاری ہیں',
    body_en: 'Limited seats available for Matric and FSc evening preparatory batches. Secure your seat today.',
    body_ur: 'میٹرک اور ایف ایس سی شام کے تیا ری بیچز کے لیے محدود نشستیں دستیاب ہیں۔ آج ہی اپنی سیٹ محفوظ کریں۔',
    audience: 'public',
    is_published: true,
    published_at: '2026-10-15T00:00:00Z',
  },
];

// PLACEHOLDER: Board examination toppers & achievers
export const MOCK_TOPPERS: Topper[] = [
  {
    id: 'topper-1',
    name_en: 'Areeba Fatima',
    name_ur: 'اریبہ فاطمہ',
    class_label_en: 'Matric Science (BISE Bwp)',
    class_label_ur: 'میٹرک سائنس (بہاولپور بورڈ)',
    marks: '1068 / 1100',
    year: 2025,
    photo_url: '',
    sort_order: 1,
  },
  {
    id: 'topper-2',
    name_en: 'Muhammad Hamza',
    name_ur: 'محمد حمزہ',
    class_label_en: 'FSc Pre-Medical (Part 2)',
    class_label_ur: 'ایف ایس سی پری میڈیکل (پارٹ ۲)',
    marks: '1052 / 1100',
    year: 2025,
    photo_url: '',
    sort_order: 2,
  },
  {
    id: 'topper-3',
    name_en: 'Zainab Noor',
    name_ur: 'زینب نور',
    class_label_en: 'Class 9 Science (BISE Bwp)',
    class_label_ur: 'نویں جماعت سائنس (بہاولپور بورڈ)',
    marks: '528 / 550',
    year: 2025,
    photo_url: '',
    sort_order: 3,
  },
  {
    id: 'topper-4',
    name_en: 'Abdullah Tariq',
    name_ur: 'عبداللہ طارق',
    class_label_en: 'FSc Pre-Engineering',
    class_label_ur: 'ایف ایس سی پری انجینئرنگ',
    marks: '1044 / 1100',
    year: 2024,
    photo_url: '',
    sort_order: 4,
  },
];

// PLACEHOLDER: Student and parent reviews
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Dr. Tariq Mahmood',
    role_en: 'Parent of FSc Student',
    role_ur: 'والد، ایف ایس سی طالب علم',
    text_en:
      'The disciplined academic routine, weekly test series, and dedicated attention given to individual weaknesses at Unicorn Academy helped my son secure admission into top medical college.',
    text_ur:
      'یونیکورن اکیڈمی کا منظم نظام الاوقات، ہفتہ وار امتحانی سلسلہ اور کمزور پہلوؤں پر خصوصی توجہ نے میرے بیٹے کو میڈیکل کالج میں داخلہ حاصل کرنے میں غیر معمولی مدد فراہم کی۔',
    is_published: true,
  },
  {
    id: 'testimonial-2',
    name: 'Ayesha Siddiqua',
    role_en: 'Matric Position Holder (Alumna)',
    role_ur: 'میٹرک پوزیشن ہولڈر (سابقہ طالبہ)',
    text_en:
      'Teachers here break down complex science formulas into lucid, memorable concepts. I scored 1060+ in my board exams solely because of their relentless mentoring.',
    text_ur:
      'یہاں کے اساتذہ مشکل ترین سائنسی نظریات کو انتہائی آسان اور دلچسپ انداز میں سمجھاتے ہیں۔ میں نے بورڈ میں 1060 سے زائد نمبرز اساتذہ کی مخلصانہ رہنمائی کی بدولت حاصل کیے۔',
    is_published: true,
  },
  {
    id: 'testimonial-3',
    name: 'M. Kashif Khan',
    role_en: 'Senior Secondary Parent',
    role_ur: 'والد، سیکنڈری طالب علم',
    text_en:
      'Unicorn Academy is by far the finest coaching institution in Sadiqabad. The regular attendance notifications and transparent result reporting give parents total peace of mind.',
    text_ur:
      'صادق آباد میں یونیکورن اکیڈمی بلاشبہ سب سے بااعتماد اور معیاری تدریسی ادارہ ہے۔ حاضری کے فوری پیغامات اور شفاف نتائج والدین کو مکمل اطمینان بخشتے ہیں۔',
    is_published: true,
  },
];

// PLACEHOLDER: Core institutional statistics
export const MOCK_STATS: Stats = {
  students: 650,
  teachers: 28,
  years: 9,
  results_percent: 98,
};

// PLACEHOLDER: Academy settings & official bilingual information
export const MOCK_SITE_SETTINGS: SiteSettings = {
  admission_open_banner: true,
  phone: '0300-0000000',
  whatsapp: '923000000000',
  address_en: 'Railway Road, near Model Town, Sadiqabad, Punjab, Pakistan',
  address_ur: 'ریلوے روڈ، نزد ماڈل ٹاؤن، صادق آباد، پنجاب، پاکستان',
  academy_slogan_en: 'Nurturing Intellectual Excellence & Character in Sadiqabad',
  academy_slogan_ur: 'صادق آباد میں فکری برتری اور باکردار تربیت کا امین',
  about_history_en:
    'Established in Sadiqabad with an unwavering commitment to high-standard academic tuition, Unicorn Academy began as a focused tutorial initiative. Over the last nine years, through rigorous pedagogical standards, dedicated subject specialists, and consistent student welfare, it has evolved into one of Sadiqabad’s most distinguished academic centers, producing numerous board position holders every academic year.',
  about_history_ur:
    'صادق آباد میں اعلیٰ معیار کی تدریس کے غیر متزلزل عزم کے ساتھ قائم کی جانے والی یونیکورن اکیڈمی نے ایک پرخلوص تعلیمی اقدام کے طور پر آغاز کیا۔ گزشتہ نو برسوں میں، اعلیٰ تعلیمی معیار، محنتی ماہرینِ مضامین اور طلبہ کی مخلصانہ رہنمائی کے نتیجے میں یہ صادق آباد کا معتبر ترین ادارہ بن چکا ہے جس کے طلبہ ہر سال بورڈ میں نمایاں پوزیشنز حاصل کرتے ہیں۔',
  about_mission_en:
    'To equip students from Prep to FSc with uncompromising conceptual clarity, rigorous scientific thinking, disciplined study habits, and the moral integrity required to lead in competitive higher education and society.',
  about_mission_ur:
    'پریپ سے لے کر ایف ایس سی تک کے طلبہ کو گہری تصوراتی تفہیم، سائنسی سوچ، منظم مطالعہ کی عادات اور باوقار کردار سے آراستہ کرنا تاکہ وہ اعلیٰ تعلیم اور معاشرے میں قائدانہ کردار ادا کر سکیں۔',
  about_vision_en:
    'To stand as the gold standard of secondary and higher secondary tuition coaching in South Punjab—celebrated for pedagogical innovation, transparent student development, and extraordinary academic achievement.',
  about_vision_ur:
    'جنوبی پنجاب میں سیکنڈری اور ہائر سیکنڈری تدریس کا سب سے مثالی معیار بننا—جہاں جدید تدریس، طلبہ کی ہمہ جہت تربیت اور شاندار بورڈ نتائج اس ادارے کی مستقل پہچان ہوں۔',
};
