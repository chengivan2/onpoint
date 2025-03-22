"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FiLogIn, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function AuthButton() {
  const [user, setUser] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return user ? (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-opacity-20 backdrop-blur-md border border-white/20 text-white transition hover:bg-opacity-30"
      style={{ background: "rgba(255, 255, 255, 0.1)" }} // Glassmorphism effect
    >
      <FiUser size={20} />
      Dashboard
    </Link>
  ) : (
    <Link
      href="/signin"
      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-opacity-20 backdrop-blur-md border border-white/20 text-white transition hover:bg-opacity-30"
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
    >
      <FiLogIn size={20} />
      Sign In
    </Link>
  );
}
