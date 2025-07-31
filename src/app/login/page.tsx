'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/lib/supabaseClient';
import { FaGoogle, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ✅ Check if session already exists on load
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/createresume');
      }
    };
    checkSession();
  }, [router]);

  // ✅ Listen to auth events AND poll session every 2 seconds
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/createresume');
      }
    });

    const pollSession = setInterval(async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        clearInterval(pollSession);
        router.push('/createresume');
      }
    }, 2000); // Poll every 2 seconds

    return () => {
      authListener?.subscription.unsubscribe();
      clearInterval(pollSession);
    };
  }, [router]);

  const handleMagicLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // emailRedirectTo: `${window.location.origin}/auth/callback`,
        emailRedirectTo: `https://ahresumetrailer.vercel.app/createresume`,
      },
    });

    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage('✅ Magic link sent! Check your email.');
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github' | 'facebook' | 'linkedin') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div>

      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-200">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center">Login to AH Resume</h1>

          <input
            type="email"
            placeholder="Enter your email for magic link"
            className="input input-bordered w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleMagicLink} className="btn btn-primary w-full rounded">
            Send Magic Link
          </button>

          <div className="divider">OR</div>

          <button onClick={() => handleSocialLogin('google')} className="btn w-full flex items-center gap-2">
            <FaGoogle className="text-red-500" /> Continue with Google
          </button>
          <button onClick={() => handleSocialLogin('github')} className="btn w-full flex items-center gap-2">
            <FaGithub /> Continue with GitHub
          </button>
          <button onClick={() => handleSocialLogin('facebook')} className="btn w-full flex items-center gap-2">
            <FaFacebook className="text-blue-600" /> Continue with Facebook
          </button>
          <button onClick={() => handleSocialLogin('linkedin')} className="btn w-full flex items-center gap-2">
            <FaLinkedin className="text-blue-700" /> Continue with LinkedIn
          </button>

          {message && (
            <div className="text-center text-sm text-green-600 mt-2">{message}</div>
          )}
        </div>
      </div>

    </div>
  );
}
