'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmail } from '@/utils/auth';
import { supabase } from '@/lib/supabaseClient';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/dashboard');
      }
    };
    checkUser();
  }, [router]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmail(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign In</h1>
      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
} 