'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpWithEmail } from '@/utils/auth';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signUpWithEmail(email, password, firstName, lastName);
      router.push('/welcome');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign Up</h1>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
} 