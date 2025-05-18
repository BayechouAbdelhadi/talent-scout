export const en = {
  navigation: {
    discover: "Discover",
    howItWorks: "How It Works",
    forScouts: "For Scouts",
    login: "Login",
    signup: "Sign Up",
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle:
      "Choose the plan that best fits your needs. All plans include a 14-day free trial.",
    free: "Free",
    perMonth: "/month",
    getStarted: "Get Started",
    startFreeTrial: "Start Free Trial",
    plans: {
      playerBasic: {
        title: "Player Basic",
        features: {
          profile: "Basic player profile",
          video: "1 video upload",
          stats: "Basic statistics",
          community: "Community features",
        },
      },
      playerPro: {
        title: "Player Pro",
        features: {
          enhancedProfile: "Enhanced profile features",
          unlimitedVideos: "Unlimited video uploads",
          advancedStats: "Advanced statistics",
          searchPriority: "Priority in search results",
          messaging: "Direct messaging with scouts",
          analytics: "Performance analytics",
        },
      },
      scoutBasic: {
        title: "Scout Basic",
        features: {
          playerViews: "50 player views/month",
          basicSearch: "Basic search filters",
          messaging: "Message players",
          shortlist: "Single shortlist",
          analytics: "Basic analytics",
        },
      },
      scoutPro: {
        title: "Scout Pro",
        features: {
          unlimitedViews: "Unlimited player views",
          advancedSearch: "Advanced search filters",
          trialManagement: "Trial management system",
          multipleShortlists: "Multiple shortlists",
          advancedAnalytics: "Advanced analytics",
          prioritySupport: "Priority support",
        },
      },
    },
    enterprise: {
      title: "Enterprise Solutions",
      description:
        "Need a custom solution for your organization? We offer tailored packages for clubs and academies.",
      contactSales: "Contact Sales",
    },
    faq: {
      title: "Frequently Asked Questions",
      changePlan: {
        question: "Can I change plans later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
      },
      payment: {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
      },
      commitment: {
        question: "Is there a contract or commitment?",
        answer:
          "No, all plans are month-to-month with no long-term commitment. You can cancel at any time.",
      },
      academyDiscount: {
        question: "Do you offer discounts for academies?",
        answer:
          "Yes, we offer special pricing for football academies and youth development programs. Contact our sales team for details.",
      },
    },
  },
} as const;
