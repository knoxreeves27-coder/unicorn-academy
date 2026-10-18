export type ClassLevel = 'primary' | 'middle' | 'matric' | 'fsc';

export type GroupName = 'pre_medical' | 'pre_engineering' | 'ics' | 'fa' | null;

export interface ClassItem {
  id: string;
  level: ClassLevel;
  name_en: string;
  name_ur: string;
  group_name: GroupName;
  subjects_en: string[];
  subjects_ur: string[];
  timing: string;
  monthly_fee: number;
  sort_order: number;
  is_active: boolean;
}

export type AnnouncementAudience = 'public' | 'students';

export interface Announcement {
  id: string;
  title_en: string;
  title_ur: string;
  body_en: string;
  body_ur: string;
  audience: AnnouncementAudience;
  is_published: boolean;
  published_at: string;
}

export interface SiteSettings {
  admission_open_banner: boolean;
  phone: string;
  whatsapp: string;
  address_en: string;
  address_ur: string;
  academy_slogan_en: string;
  academy_slogan_ur: string;
  about_history_en: string;
  about_history_ur: string;
  about_mission_en: string;
  about_mission_ur: string;
  about_vision_en: string;
  about_vision_ur: string;
}

export interface Topper {
  id: string;
  name_en: string;
  name_ur: string;
  class_label_en: string;
  class_label_ur: string;
  marks: string;
  year: number;
  photo_url: string;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role_en: string;
  role_ur: string;
  text_en: string;
  text_ur: string;
  is_published: boolean;
}

export interface Stats {
  students: number;
  teachers: number;
  years: number;
  results_percent: number;
}

export type BadgeStatus = 'paid' | 'unpaid' | 'partial' | 'pending' | 'approved' | 'rejected';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger';

export type Language = 'en' | 'ur';
export type Direction = 'ltr' | 'rtl';
