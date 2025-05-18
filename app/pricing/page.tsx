"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { getUrlWithLang } from "@/lib/utils/navigation";

export default function PricingPage() {
  const { t, lang } = useTranslation();

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('pricing.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('pricing.subtitle')}
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {/* Free Plan - Players */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">{t('pricing.plans.playerBasic.title')}</div>
              <div className="text-3xl font-bold">{t('pricing.free')}</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerBasic.features.profile')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerBasic.features.video')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerBasic.features.stats')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerBasic.features.community')}</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={getUrlWithLang('/signup', lang)} className="w-full">
              <Button className="w-full" variant="outline">{t('pricing.getStarted')}</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan - Players */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">{t('pricing.plans.playerPro.title')}</div>
              <div className="text-3xl font-bold">£9.99<span className="text-lg text-muted-foreground">{t('pricing.perMonth')}</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.enhancedProfile')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.unlimitedVideos')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.advancedStats')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.searchPriority')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.messaging')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.playerPro.features.analytics')}</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={getUrlWithLang('/signup', lang)} className="w-full">
              <Button className="w-full">{t('pricing.startFreeTrial')}</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Scout Basic */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">{t('pricing.plans.scoutBasic.title')}</div>
              <div className="text-3xl font-bold">£49<span className="text-lg text-muted-foreground">{t('pricing.perMonth')}</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutBasic.features.playerViews')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutBasic.features.basicSearch')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutBasic.features.messaging')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutBasic.features.shortlist')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutBasic.features.analytics')}</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={getUrlWithLang('/scout-registration', lang)} className="w-full">
              <Button className="w-full" variant="outline">{t('pricing.startFreeTrial')}</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Scout Pro */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">{t('pricing.plans.scoutPro.title')}</div>
              <div className="text-3xl font-bold">£99<span className="text-lg text-muted-foreground">{t('pricing.perMonth')}</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.unlimitedViews')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.advancedSearch')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.trialManagement')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.multipleShortlists')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.advancedAnalytics')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{t('pricing.plans.scoutPro.features.prioritySupport')}</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={getUrlWithLang('/scout-registration', lang)} className="w-full">
              <Button className="w-full">{t('pricing.startFreeTrial')}</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Enterprise Section */}
      <div className="bg-muted rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">{t('pricing.enterprise.title')}</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t('pricing.enterprise.description')}
        </p>
        <Button size="lg" variant="outline">{t('pricing.enterprise.contactSales')}</Button>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">{t('pricing.faq.title')}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('pricing.faq.changePlan.question')}</h3>
            <p className="text-muted-foreground">
              {t('pricing.faq.changePlan.answer')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('pricing.faq.payment.question')}</h3>
            <p className="text-muted-foreground">
              {t('pricing.faq.payment.answer')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('pricing.faq.commitment.question')}</h3>
            <p className="text-muted-foreground">
              {t('pricing.faq.commitment.answer')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('pricing.faq.academyDiscount.question')}</h3>
            <p className="text-muted-foreground">
              {t('pricing.faq.academyDiscount.answer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}