import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Medal, TrendingUp } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How TalentSpot Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our platform connects talented football players with scouts and opportunities worldwide. Here's how it all works.
        </p>
      </div>

      {/* Steps section */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <Card className="relative">
          <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
            1
          </div>
          <CardContent className="pt-12 pb-8">
            <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
            <p className="text-muted-foreground mb-4">
              Sign up and build your comprehensive player profile. Add your stats, position, skills, and playing history.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Personal information and stats</li>
              <li>• Playing history and achievements</li>
              <li>• Skills and preferred positions</li>
              <li>• Availability for trials</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="relative">
          <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
            2
          </div>
          <CardContent className="pt-12 pb-8">
            <h3 className="text-xl font-semibold mb-3">Showcase Your Skills</h3>
            <p className="text-muted-foreground mb-4">
              Upload videos of your best moments and get endorsed by teammates, coaches, and peers.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Upload highlight videos</li>
              <li>• Tag skills and achievements</li>
              <li>• Get peer endorsements</li>
              <li>• Participate in challenges</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="relative">
          <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
            3
          </div>
          <CardContent className="pt-12 pb-8">
            <h3 className="text-xl font-semibold mb-3">Get Discovered</h3>
            <p className="text-muted-foreground mb-4">
              Connect with scouts, receive trial invitations, and track your progress towards your goals.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Scout profile views</li>
              <li>• Direct messaging</li>
              <li>• Trial invitations</li>
              <li>• Progress tracking</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Features section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-muted-foreground">
              Connect with scouts and clubs from around the world
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Peer Endorsements</h3>
            <p className="text-muted-foreground">
              Build credibility through teammate recommendations
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Medal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Skill Challenges</h3>
            <p className="text-muted-foreground">
              Participate in competitions to showcase your abilities
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your development and scout interest
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of players already using TalentSpot to advance their football careers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" variant="secondary">
              Create Your Profile
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