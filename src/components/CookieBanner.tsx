'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const t = useTranslations('gdpr');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem('da_gdpr_consent') : 'all';
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('da_gdpr_consent', 'all');
    }
    setVisible(false);
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('da_gdpr_consent', 'essential');
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-md z-50 bg-slate-900 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-2xl text-white text-xs animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-sky-950 border border-sky-500/30 text-sky-400 shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-1">{t('cookieTitle')}</h4>
          <p className="text-slate-300 leading-relaxed">{t('cookieDesc')}</p>
          <div className="mt-2 text-[11px] text-slate-400">
            <Link href="/gdpr-policy" className="underline hover:text-sky-300">
              Read GDPR & Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
        >
          {t('decline')}
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-sm"
        >
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
