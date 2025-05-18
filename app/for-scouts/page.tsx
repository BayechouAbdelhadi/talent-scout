import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, MessageSquare, Calendar, Star, Shield } from "lucide-react";

export default function ForScoutsPage() {
  return (
    <div className="container py-12">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">For Football Scouts</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover emerging football talent efficiently with our advanced scouting platform.
        </p>
      </div>

      {/* Benefits section */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
            <p className="text-muted-foreground">
              Find players using detailed filters including:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Position and playing style</li>
              <li>• Physical attributes</li>
              <li>• Location and availability</li>
              <li>• Performance metrics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Filter className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
            <p className="text-muted-foreground">
              Access comprehensive player information:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Video highlights</li>
              <li>• Performance statistics</li>
              <li>• Peer endorsements</li>
              <li>• Playing history</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
            <p className="text-muted-foreground">
              Streamlined communication features:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• In-platform messaging</li>
              <li>• Trial invitations</li>
              <li>• Document sharing</li>
              <li>• Schedule management</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Features section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Shortlist Management</h3>
              <p className="text-muted-foreground">
                Create and manage multiple shortlists of potential players. Add notes, ratings, and track progress through your recruitment pipeline.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Trial Organization</h3>
              <p className="text-muted-foreground">
                Schedule and manage trial sessions directly through the platform. Send invitations and track responses efficiently.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <Filter className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Access detailed performance metrics and analytics to make data-driven recruitment decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Verified Information</h3>
              <p className="text-muted-foreground">
                All player profiles are verified, and endorsements are authenticated to ensure reliable information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Scouting Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="text-3xl font-bold mb-4">£49<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>• Up to 50 player views/month</li>
                <li>• Basic search filters</li>
                <li>• Message players directly</li>
                <li>• Single shortlist</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">£99<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>• Unlimited player views</li>
                <li>• Advanced search filters</li>
                <li>• Trial management system</li>
                <li>• Multiple shortlists</li>
                <li>• Analytics dashboard</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li>• Multiple scout accounts</li>
                <li>• Custom integrations</li>
                <li>• Priority support</li>
                <li>• Custom analytics</li>
                <li>• Dedicated account manager</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Start Discovering Talent Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join leading clubs and scouts already using TalentSpot to find their next star player.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/scout-registration">
            <Button size="lg" variant="secondary">
              Register as Scout
            </Button>
          </Link>
          <Link href="/discover">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
              Browse Players
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}