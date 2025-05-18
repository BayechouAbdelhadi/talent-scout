"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Medal, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { getUrlWithLang } from "@/lib/utils/navigation";

export default function Home() {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="py-12 md:py-24 lg:py-32 relative">
        <div
          className="absolute inset-0 bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="space-y-6 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t('welcomeMessage')} <span className="bg-gradient-to-r from-green-600 to-blue-800 bg-clip-text text-transparent">TalentSpot</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-prose">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={getUrlWithLang("/signup", lang)}>
                <Button size="lg" className="w-full sm:w-auto">
                  {t('getStarted')}
                </Button>
              </Link>
              <Link href={getUrlWithLang("/how-it-works", lang)}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3041176/pexels-photo-3041176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Football player showcasing skills"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 p-3 rounded-lg shadow-lg">
              <div className="text-sm font-medium">{t('endorsedBy')}</div>
              <div className="flex items-center space-x-1 mt-1">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-xs">328 peers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('howItWorks')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('howItWorksSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t('createProfile')}</h3>
                <p className="text-muted-foreground">
                  {t('createProfileDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t('uploadSkills')}</h3>
                <p className="text-muted-foreground">
                  {t('uploadSkillsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t('getDiscovered')}</h3>
                <p className="text-muted-foreground">
                  {t('getDiscoveredDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('whyChooseUs')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('globalReach')}</h3>
              <p className="text-muted-foreground">
                {t('globalReachDesc')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('peerEndorsements')}</h3>
              <p className="text-muted-foreground">
                {t('peerEndorsementsDesc')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                <Medal className="h-6 w-6 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('skillCompetitions')}</h3>
              <p className="text-muted-foreground">
                {t('skillCompetitionsDesc')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('growthTracking')}</h3>
              <p className="text-muted-foreground">
                {t('growthTrackingDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('successStories')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('successStoriesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Player"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">{t('testimonialRole1')}</p>
                  </div>
                </div>
                <p className="italic">
                  {t('testimonialText1')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Scout"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Thompson</h4>
                    <p className="text-sm text-muted-foreground">{t('testimonialRole2')}</p>
                  </div>
                </div>
                <p className="italic">
                  {t('testimonialText2')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('getStarted')}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getUrlWithLang("/signup", lang)}>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                {t('signupAsPlayer')}
              </Button>
            </Link>
            <Link href={getUrlWithLang("/scout-registration", lang)}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:text-white hover:bg-white/20">
                {t('signupAsScout')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}