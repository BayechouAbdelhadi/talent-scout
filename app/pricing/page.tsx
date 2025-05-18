import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include a 14-day free trial.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {/* Free Plan - Players */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">Player Basic</div>
              <div className="text-3xl font-bold">Free</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic player profile</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>1 video upload</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic statistics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Community features</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button className="w-full" variant="outline">Get Started</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan - Players */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">Player Pro</div>
              <div className="text-3xl font-bold">£9.99<span className="text-lg text-muted-foreground">/month</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Enhanced profile features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited video uploads</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced statistics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority in search results</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Direct messaging with scouts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Performance analytics</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button className="w-full">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Scout Basic */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">Scout Basic</div>
              <div className="text-3xl font-bold">£49<span className="text-lg text-muted-foreground">/month</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>50 player views/month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic search filters</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Message players</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Single shortlist</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic analytics</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/scout-registration" className="w-full">
              <Button className="w-full" variant="outline">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Scout Pro */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-lg font-semibold mb-2">Scout Pro</div>
              <div className="text-3xl font-bold">£99<span className="text-lg text-muted-foreground">/month</span></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited player views</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced search filters</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Trial management system</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Multiple shortlists</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/scout-registration" className="w-full">
              <Button className="w-full">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Enterprise Section */}
      <div className="bg-muted rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Need a custom solution for your organization? We offer tailored packages for clubs and academies.
        </p>
        <Button size="lg" variant="outline">Contact Sales</Button>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Is there a contract or commitment?</h3>
            <p className="text-muted-foreground">
              No, all plans are month-to-month with no long-term commitment. You can cancel at any time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer discounts for academies?</h3>
            <p className="text-muted-foreground">
              Yes, we offer special pricing for football academies and youth development programs. Contact our sales team for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}