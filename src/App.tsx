/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageProvider';
import { ToastProvider, Layout } from './components';

// Route-level code splitting with React.lazy
const Home = lazy(() => import('./pages/public/Home'));
const About = lazy(() => import('./pages/public/About'));
const Foundation = lazy(() => import('./pages/public/Foundation'));
const ComingSoon = lazy(() => import('./pages/public/ComingSoon'));
const NotFound = lazy(() => import('./pages/public/NotFound'));

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Phase 2: Home Page */}
              <Route index element={<Home />} />

              {/* Phase 2: About Page */}
              <Route path="about" element={<About />} />

              {/* Phase 1 Foundation Test Page */}
              <Route path="foundation" element={<Foundation />} />

              {/* Deferred pages routed to ComingSoon */}
              <Route path="courses" element={<ComingSoon />} />
              <Route path="teachers" element={<ComingSoon />} />
              <Route path="results" element={<ComingSoon />} />
              <Route path="gallery" element={<ComingSoon />} />
              <Route path="admission" element={<ComingSoon />} />
              <Route path="contact" element={<ComingSoon />} />
              <Route path="portal/login" element={<ComingSoon />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </LanguageProvider>
  );
}
