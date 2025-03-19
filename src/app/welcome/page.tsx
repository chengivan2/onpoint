'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/signin');
      }
    };
    checkUser();
  }, [router]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Welcome!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Thank you for signing up. You can now explore your dashboard.
      </p>
      <button
        onClick={() => router.push('/dashboard')}
        className="mt-4 w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );
} 