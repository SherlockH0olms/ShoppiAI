import React from "react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Brain, Zap, Shield, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const platformFeatures = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Advanced AI Engine",
    description:
      "Our proprietary AI understands your style, preferences, and shopping behavior to deliver personalized recommendations that get better over time.",
    features: [
      "Machine learning algorithms",
      "Behavioral analysis",
      "Preference learning",
      "Predictive recommendations",
    ],
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "Universal Product Search",
    description:
      "Search across thousands of retailers simultaneously to find exactly what you're looking for at the best price.",
    features: [
      "Cross-retailer search",
      "Visual search",
      "Voice search",
      "Smart filters",
    ],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Real-time Price Tracking",
    description:
      "Never miss a deal with intelligent price monitoring and instant alerts when your favorite items go on sale.",
    features: [
      "Price history tracking",
      "Deal alerts",
      "Price drop notifications",
      "Competitive analysis",
    ],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Style Intelligence",
    description:
      "Advanced style analysis that learns your fashion preferences and suggests items that match your unique aesthetic.",
    features: [
      "Style profiling",
      "Trend analysis",
      "Outfit coordination",
      "Personal styling",
    ],
  },
];

const integrations = [
  {
    name: "Amazon",
    logo: "🏪",
    description: "Full integration with Amazon's marketplace",
  },
  {
    name: "Shopify",
    logo: "🛍️",
    description: "Connect with thousands of Shopify stores",
  },
  {
    name: "WooCommerce",
    logo: "🛒",
    description: "WordPress e-commerce integration",
  },
  {
    name: "Magento",
    logo: "📦",
    description: "Enterprise e-commerce platform support",
  },
  {
    name: "Target",
    logo: "🎯",
    description: "Direct integration with Target's catalog",
  },
  {
    name: "Walmart",
    logo: "🏬",
    description: "Access to Walmart's extensive inventory",
  },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-base font-medium border-b border-purple-300 pb-1 w-fit mb-6">
                  <ShoppingCart className="w-5 h-5 text-purple-600" />
                  <span>The Shoppi Platform</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-medium text-gray-900 mb-6 leading-tight">
                  AI-powered shopping infrastructure
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Built for the modern shopper, our platform combines advanced
                  AI, real-time data, and intuitive design to create the
                  ultimate shopping experience.
                </p>
                <div className="flex gap-4">
                  <Link to="/chat">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                      Try the Platform
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-gray-300 px-6 py-3"
                  >
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          AI Analysis
                        </div>
                        <div className="text-sm text-gray-600">
                          Processing preferences...
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-purple-200 rounded-full">
                        <div className="h-2 bg-purple-600 rounded-full w-3/4"></div>
                      </div>
                      <div className="h-2 bg-purple-200 rounded-full">
                        <div className="h-2 bg-purple-600 rounded-full w-1/2"></div>
                      </div>
                      <div className="h-2 bg-purple-200 rounded-full">
                        <div className="h-2 bg-purple-600 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-4">
                Everything you need for intelligent shopping
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides all the tools and intelligence you need to
                make smarter shopping decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 text-purple-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-base font-medium border-b border-gray-300 pb-1 w-fit mb-6">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span>Security & Privacy</span>
                </div>
                <h2 className="text-4xl font-medium text-gray-900 mb-6">
                  Your data is safe with us
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We implement enterprise-grade security measures to protect
                  your personal information and shopping data while providing
                  personalized experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">GDPR & CCPA compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      SOC 2 Type II certified
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <Shield className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-medium text-gray-900 mb-2">
                    Data Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced encryption and secure data handling
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-8">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 text-lg">🔒</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Privacy First
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You control your data and privacy settings
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 text-lg">⚡</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Fast & Secure
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lightning-fast performance without compromising security
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-8">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 text-lg">🛡️</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Meeting all industry security standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-4">
                Seamless integrations
              </h2>
              <p className="text-xl text-gray-600">
                Connect with your favorite retailers and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                    <span className="text-2xl">{integration.logo}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-10 text-center text-white">
            <h3 className="text-3xl font-medium mb-4">
              Ready to experience the future of shopping?
            </h3>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of users already using our AI platform to shop
              smarter.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/chat">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};

export default Platform;
