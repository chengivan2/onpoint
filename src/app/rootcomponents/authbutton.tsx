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
      <Button className="group shadow-none cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-transparent hover:bg-lightmode-secondary-btn-bg-hover-color dark:hover:bg-darkmode-secondary-btn-bg-hover-color">
        <span className="flex flex-row gap-[0.5rem] justify-center items-center text-lightmode-secondary-btn-text-color group-hover:text-lightmode-secondary-btn-text-hover-color dark:text-darkmode-secondary-btn-text-color dark:group-hover:text-darkmode-secondary-btn-text-hover-color">
          <FiUser size={20} />
          Dashboard
        </span>
      </Button>
    </Link>
  ) : (
    <Link href="/signin" className="cursor-pointer">
      <Button className="group shadow-none cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-transparent hover:bg-lightmode-secondary-btn-bg-hover-color dark:hover:bg-darkmode-secondary-btn-bg-hover-color">
        <span className="flex flex-row gap-[0.5rem] justify-center items-center text-lightmode-secondary-btn-text-color group-hover:text-lightmode-secondary-btn-text-hover-color dark:text-darkmode-secondary-btn-text-color dark:group-hover:text-darkmode-secondary-btn-text-hover-color">
          <FiLogIn size={20} />
          Sign In
        </span>
      </Button>
    </Link>
  );
}
