import { ClassItem, Announcement, SiteSettings } from '../types';

/**
 * ============================================================================
 * PLACEHOLDERS: These are mock data entries for Phase 1 Foundation ONLY.
 * Later phases will connect directly to database tables via the services layer.
 * ============================================================================
 */

export const MOCK_CLASSES: ClassItem[] = [
  {
    id: 'class-prep',
    level: 'primary',
    name_en: 'Prep & Kindergarten',
    name_ur: 'پریپ اور کنڈرگارٹن',
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
    name_en: 'Class 6 (Middle Foundation)',
    name_ur: 'چھٹی جماعت (مڈل فاؤنڈیشن)',
    group_name: null,
    subjects_en: ['Mathematics', 'Science', 'English', 'Computer'],
    subjects_ur: ['ریاضی', 'سائنس', 'انگریزی', 'کمپیوٹر'],
    timing: '03:30 PM - 05:30 PM',
    monthly_fee: 4000,
    sort_order: 2,
    is_active: true,
  },
  {
    id: 'class-9',
    level: 'matric',
    name_en: 'Class 9 (Matric Science)',
    name_ur: 'نویں جماعت (میٹرک سائنس)',
    group_name: null,
    subjects_en: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English'],
    subjects_ur: ['فزکس', 'کیمسٹری', 'بائیولوجی', 'ریاضی', 'انگریزی'],
    timing: '04:00 PM - 07:00 PM',
    monthly_fee: 5500,
    sort_order: 3,
    is_active: true,
  },
  {
    id: 'class-fsc-pre-med',
    level: 'fsc',
    name_en: 'FSc Pre-Medical (Part 1 & 2)',
    name_ur: 'ایف ایس سی پری میڈیکل (پارٹ ۱ و ۲)',
    group_name: 'pre_medical',
    subjects_en: ['Biology', 'Physics', 'Chemistry', 'English'],
    subjects_ur: ['حیاتیات (بائیولوجی)', 'طبیعیات (فزکس)', 'کیمیا (کیمسٹری)', 'انگریزی'],
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

// PLACEHOLDERS: Default academy contact settings
export const MOCK_SITE_SETTINGS: SiteSettings = {
  admission_open_banner: true,
  phone: '0300-0000000',
  whatsapp: '923000000000',
  address_en: 'Sadiqabad, Punjab, Pakistan',
  address_ur: 'صادق آباد، پنجاب، پاکستان',
};
