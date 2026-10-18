import { MOCK_CLASSES, MOCK_ANNOUNCEMENTS, MOCK_SITE_SETTINGS } from '../data/mock';
import { ClassItem, Announcement, SiteSettings } from '../types';

/**
 * Service Layer for Unicorn Academy Sadiqabad.
 * UI components must consume data strictly via these service methods.
 * This guarantees easy migration to database providers (e.g. Supabase or Firestore)
 * in future phases without altering UI components.
 */

const SIMULATED_LATENCY_MS = 250;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getClasses(): Promise<ClassItem[]> {
  await delay(SIMULATED_LATENCY_MS);
  return [...MOCK_CLASSES].sort((a, b) => a.sort_order - b.sort_order);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  await delay(SIMULATED_LATENCY_MS);
  return { ...MOCK_SITE_SETTINGS };
}

export async function getAnnouncements(): Promise<Announcement[]> {
  await delay(SIMULATED_LATENCY_MS);
  return [...MOCK_ANNOUNCEMENTS].filter((item) => item.is_published);
}
