"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FiLogIn, FiUser } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthButton() {
  const [user, setUser] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return user ? (
    <Link href="/dashboard" className="cursor-pointer">
      <Button className="cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-lightmode-auth-bg-color dark:bg-darkmode-auth-bg-color hover:bg-[#1a1a1a]">
        <span className="text-lightmode-secondary-btn-text-color dark:text-darkmode-secondary-btn-text-color">
          <FiUser size={20} />
        </span>
        <span className="text-lightmode-secondary-btn-text-color dark:text-darkmode-secondary-btn-text-color">
          Dashboard
        </span>
      </Button>
    </Link>
  ) : (
    <Link href="/signin" className="cursor-pointer">
      <Button className="cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-lightmode-auth-bg-color dark:bg-darkmode-auth-bg-color hover:bg-[#1a1a1a]">
        <span className="text-lightmode-secondary-btn-text-color dark:text-darkmode-secondary-btn-text-color">
          <FiLogIn size={20} />
        </span>
        <span className="text-lightmode-secondary-btn-text-color dark:text-darkmode-secondary-btn-text-color">
          Sign In
        </span>
      </Button>
    </Link>
  );
}
