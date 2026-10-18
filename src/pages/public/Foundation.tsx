import React, { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/LanguageProvider';
import { getClasses } from '../../services';
import { ClassItem, BadgeStatus } from '../../types';
import {
  Button,
  Card,
  Badge,
  FormField,
  Modal,
  Skeleton,
  useToast,
} from '../../components';

export const Foundation: React.FC = () => {
  const { lang, t } = useI18n();
  const { toast } = useToast();

  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loadingClasses, setLoadingClasses] = useState(true);

  // Component showcase test states
  const [isLoadingBtnActive, setIsLoadingBtnActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sampleName, setSampleName] = useState('Muhammad Ahmad');
  const [sampleRoll, setSampleRoll] = useState('INVALID-ROLL');

  useEffect(() => {
    let isMounted = true;
    setLoadingClasses(true);
    getClasses()
      .then((data) => {
        if (isMounted) {
          setClasses(data);
          setLoadingClasses(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoadingClasses(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleToggleLoadingButton = () => {
    setIsLoadingBtnActive(true);
    setTimeout(() => {
      setIsLoadingBtnActive(false);
    }, 2000);
  };

  const handleShowSuccessToast = () => {
    toast({
      type: 'success',
      title: t('home.toast_success_title'),
      message: t('home.toast_success_msg'),
    });
  };

  const handleShowErrorToast = () => {
    toast({
      type: 'error',
      title: t('home.toast_error_title'),
      message: t('home.toast_error_msg'),
    });
  };

  const handleDeleteConfirm = () => {
    setIsModalOpen(false);
    toast({
      type: 'success',
      title: t('actions.delete'),
      message: t('home.modal_demo_title') + ' - ' + t('actions.confirm'),
    });
  };

  const badgeStatuses: BadgeStatus[] = [
    'paid',
    'unpaid',
    'partial',
    'pending',
    'approved',
    'rejected',
  ];

  return (
    <div className="py-8 sm:py-12 space-y-16">
      {/* 1. Hero & Admission Open Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="bg-gradient-to-br from-indigo-900/5 via-purple-500/5 to-amber-500/5 rounded-2xl p-6 sm:p-10 lg:p-14 border border-indigo-100 shadow-xs flex flex-col items-start gap-6">
          {/* Gold Admission Open Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-100 text-amber-950 border border-amber-300 shadow-xs">
            <span
              className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"
              aria-hidden="true"
            />
            <span>{t('home.admission_open')}</span>
          </div>

          {/* Heading 1: 28px mobile / 44px desktop */}
          <h1 className="text-[28px] lg:text-[44px] font-bold text-primary font-heading tracking-tight leading-tight max-w-3xl">
            {t('home.hero_title')}
          </h1>

          {/* Body Intro text */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
            {t('home.hero_subtitle')}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button to="/admission" variant="accent" className="font-bold">
              {t('actions.apply_now')}
            </Button>
            <Button to="/courses" variant="secondary">
              {t('actions.explore_courses')}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Classes Grid Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-6">
        <div>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
            {t('home.classes_heading')}
          </h2>
          <p className="text-sm sm:text-base text-muted mt-1 leading-relaxed max-w-2xl">
            {t('home.classes_subheading')}
          </p>
        </div>

        {loadingClasses ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <Card key={idx} className="flex flex-col gap-4 p-6">
                <Skeleton variant="rectangular" className="h-6 w-3/4" />
                <Skeleton variant="text" className="h-4 w-1/2" />
                <div className="space-y-2 pt-2">
                  <Skeleton variant="text" className="h-3 w-full" />
                  <Skeleton variant="text" className="h-3 w-5/6" />
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                  <Skeleton variant="rectangular" className="h-5 w-24" />
                  <Skeleton variant="rectangular" className="h-8 w-20" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls) => {
              const classNameText = lang === 'ur' ? cls.name_ur : cls.name_en;
              const subjects = lang === 'ur' ? cls.subjects_ur : cls.subjects_en;

              return (
                <Card
                  key={cls.id}
                  className="flex flex-col justify-between hover:border-indigo-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary bg-purple-50 px-2.5 py-0.5 rounded">
                        {cls.level}
                      </span>
                      <span className="text-xs text-muted font-medium" dir="ltr">
                        {cls.timing}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 font-heading">
                        {classNameText}
                      </h3>
                      {cls.group_name && (
                        <p className="text-xs text-secondary font-medium mt-0.5 capitalize">
                          {cls.group_name.replace('_', ' ')}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        {t('home.subjects')}:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {subjects.map((subj, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-block text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                          >
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-muted block">
                        {t('home.monthly_fee')}
                      </span>
                      <span className="text-base font-bold text-primary font-mono tabular-nums">
                        {cls.monthly_fee.toLocaleString()} {t('home.pkr')}
                      </span>
                    </div>
                    <Button to="/admission" variant="secondary" className="text-xs py-1.5 px-3 min-h-[38px]">
                      {t('actions.apply_now')}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. Comprehensive Components Showcase Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
        <div className="border-t border-slate-200 pt-10">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-100/60 text-primary text-xs font-semibold mb-2">
            Phase 1 Foundation Verification
          </div>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
            {t('home.components_heading')}
          </h2>
          <p className="text-sm sm:text-base text-muted mt-1 leading-relaxed max-w-2xl">
            {t('home.components_subheading')}
          </p>
        </div>

        {/* Component Test Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card A: Buttons Showcase */}
          <Card className="flex flex-col gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 font-heading">
                {t('home.buttons_title')}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Primary, secondary outline, gold accent, danger, and async loading state.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary">{t('home.btn_primary')}</Button>
              <Button variant="secondary">{t('home.btn_secondary')}</Button>
              <Button variant="accent">{t('home.btn_accent')}</Button>
              <Button variant="danger">{t('home.btn_danger')}</Button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-4">
              <Button
                variant="primary"
                loading={isLoadingBtnActive}
                onClick={handleToggleLoadingButton}
              >
                {isLoadingBtnActive ? t('actions.loading') : t('home.btn_loading')}
              </Button>
              <span className="text-xs text-muted">
                (Click to simulate 2-second async request state)
              </span>
            </div>
          </Card>

          {/* Card B: Badges Showcase */}
          <Card className="flex flex-col gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 font-heading">
                {t('home.badges_title')}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Every badge combines an inline SVG icon, semantic color, and translated label.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {badgeStatuses.map((status) => (
                <Badge key={status} status={status} />
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed">
                Notice: Accessibility standards require non-color indicators (icons) and high text contrast (&gt; 4.5:1) for color-blind learners and parents.
              </p>
            </div>
          </Card>

          {/* Card C: Form Fields Showcase */}
          <Card className="flex flex-col gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 font-heading">
                {t('home.forms_title')}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Strict 44px min-height, label linking, hint, and error messaging.
              </p>
            </div>

            <div className="space-y-4">
              {/* Normal field with hint and required star */}
              <FormField
                label={t('home.field_name_label')}
                required
                hint={t('home.field_name_hint')}
                value={sampleName}
                onChange={(e) => setSampleName(e.target.value)}
                placeholder={t('home.field_name_placeholder')}
              />

              {/* Field with active error state */}
              <FormField
                label={t('home.field_roll_label')}
                required
                error={t('home.field_roll_error')}
                value={sampleRoll}
                onChange={(e) => setSampleRoll(e.target.value)}
                placeholder={t('home.field_roll_placeholder')}
              />
            </div>
          </Card>

          {/* Card D: Interactive Feedback (Modal & Toast) */}
          <Card className="flex flex-col gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 font-heading">
                {t('home.feedback_title')}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Accessible dialogs with Escape dismissal, backdrop click, and polite notification toasts.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={handleShowSuccessToast}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {t('home.trigger_success_toast')}
                </Button>
                <Button
                  variant="danger"
                  onClick={handleShowErrorToast}
                >
                  {t('home.trigger_error_toast')}
                </Button>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  {t('home.open_confirm_modal')}
                </Button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                Toasts auto-dismiss after 4 seconds and include aria-live announcements for screen readers.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Confirmation Modal Component Instance */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('home.modal_demo_title')}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              {t('home.modal_demo_cancel')}
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteConfirm}
            >
              {t('home.modal_demo_confirm')}
            </Button>
          </>
        }
      >
        <p>{t('home.modal_demo_body')}</p>
      </Modal>
    </div>
  );
};

export default Foundation;
