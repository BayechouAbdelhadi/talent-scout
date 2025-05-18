"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";
import LanguageSelector from "@/components/language-selector";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { getUrlWithLang } from "@/lib/utils/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { t, lang } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={getUrlWithLang("/", lang)} className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-800 bg-clip-text text-transparent">
              TalentSpot
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href={getUrlWithLang("/discover", lang)} className="text-sm font-medium hover:text-primary">
              {t('discover')}
            </Link>
            <Link href={getUrlWithLang("/how-it-works", lang)} className="text-sm font-medium hover:text-primary">
              {t('howItWorks')}
            </Link>
            <Link href={getUrlWithLang("/for-scouts", lang)} className="text-sm font-medium hover:text-primary">
              {t('forScouts')}
            </Link>
            <Link href={getUrlWithLang("/pricing", lang)} className="text-sm font-medium hover:text-primary">
              {t('pricing')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />

          {session ? (
            <div className="hidden md:flex items-center gap-4">
              <Link href={getUrlWithLang("/dashboard", lang)}>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6" />
                </Button>
              </Link>
              <Button variant="ghost" onClick={() => signOut({ callbackUrl: getUrlWithLang("/", lang) })}>
                {t('login')}
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex gap-4">
              <Link href={getUrlWithLang("/login", lang)}>
                <Button variant="ghost">{t('login')}</Button>
              </Link>
              <Link href={getUrlWithLang("/signup", lang)}>
                <Button>{t('signup')}</Button>
              </Link>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href={getUrlWithLang("/discover", lang)}
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('discover')}
            </Link>
            <Link
              href={getUrlWithLang("/how-it-works", lang)}
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('howItWorks')}
            </Link>
            <Link
              href={getUrlWithLang("/for-scouts", lang)}
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('forScouts')}
            </Link>
            <Link
              href={getUrlWithLang("/pricing", lang)}
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('pricing')}
            </Link>
            {!session && (
              <>
                <Link
                  href={getUrlWithLang("/login", lang)}
                  className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link
                  href={getUrlWithLang("/signup", lang)}
                  className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('signup')}
                </Link>
              </>
            )}
            {session && (
              <>
                <Link
                  href={getUrlWithLang("/dashboard", lang)}
                  className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  className="text-sm font-medium p-2 hover:bg-muted rounded-md text-left"
                  onClick={() => {
                    signOut({ callbackUrl: getUrlWithLang("/", lang) });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t('login')}
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}