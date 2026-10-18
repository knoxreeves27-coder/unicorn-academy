import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tags
    const setMetaTag = (selector: string, attribute: 'content', value: string, createName?: { key: 'name' | 'property'; val: string }) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta && createName) {
        meta = document.createElement('meta');
        meta.setAttribute(createName.key, createName.val);
        document.head.appendChild(meta);
      }
      if (meta) {
        meta.setAttribute(attribute, value);
      }
    };

    // Standard description
    setMetaTag('meta[name="description"]', 'content', description, { key: 'name', val: 'description' });

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'content', title, { key: 'property', val: 'og:title' });
    setMetaTag('meta[property="og:description"]', 'content', description, { key: 'property', val: 'og:description' });

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'content', title, { key: 'name', val: 'twitter:title' });
    setMetaTag('meta[name="twitter:description"]', 'content', description, { key: 'name', val: 'twitter:description' });
  }, [title, description]);
}
