'use client';

import { useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';

export default function AuthCallback() {
  useEffect(() => {
    const notifyOriginalTab = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        // Send login success to opener tab
        if (window.opener) {
          window.opener.postMessage({ type: 'AUTH_SUCCESS' }, '*');
        }

        // Auto-close after delay
        setTimeout(() => window.close(), 8000);
      }
    };

    notifyOriginalTab();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600">🎉 You’re now logged in!</h2>
        <p className="text-gray-700 mt-2">This tab will close shortly.</p>
      </div>
    </div>
  );
}
