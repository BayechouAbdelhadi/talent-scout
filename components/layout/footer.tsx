import Link from "next/link";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-800 bg-clip-text text-transparent">
                TalentSpot
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting amateur football talent with scouts and opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">For Players</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/create-profile" className="text-sm text-muted-foreground hover:text-foreground">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/upload-videos" className="text-sm text-muted-foreground hover:text-foreground">
                  Upload Videos
                </Link>
              </li>
              <li>
                <Link href="/get-endorsed" className="text-sm text-muted-foreground hover:text-foreground">
                  Get Endorsed
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-sm text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">For Scouts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/scout-registration" className="text-sm text-muted-foreground hover:text-foreground">
                  Register as Scout
                </Link>
              </li>
              <li>
                <Link href="/browse-talent" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link href="/scout-plans" className="text-sm text-muted-foreground hover:text-foreground">
                  Scout Plans
                </Link>
              </li>
              <li>
                <Link href="/arrange-trials" className="text-sm text-muted-foreground hover:text-foreground">
                  Arrange Trials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} TalentSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}