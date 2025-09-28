import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Brain, Shield, Zap } from "lucide-react";

const platformFeatures = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Smart Shopping",
    description:
      "Transform your shopping experience with AI-powered recommendations integrated into your favorite retailers, so you can find exactly what you need.",
    link: "#shopping",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Intelligence",
    description:
      "Accelerate decision-making with our comprehensive AI toolkit - from price comparison to style matching and personalized suggestions.",
    link: "#intelligence",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Personal Assistant",
    description:
      "Our proprietary shopping intelligence learns your preferences and tailors every recommendation to your unique style and budget.",
    link: "#assistant",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Private",
    description:
      "Enterprise-grade security ensures your shopping data stays private while delivering personalized AI recommendations at scale.",
    link: "#security",
  },
];

export const PlatformSection = () => {
  return (
    <section id="platform" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2 text-base font-medium border-b border-gray-300 pb-1 w-fit">
              <ShoppingCart className="w-5 h-5 text-purple-600" />
              <span>The Shoppi Platform</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  Built for shopping success
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Shoppi is the purpose-built AI platform for smart shopping.
                  Built on a foundation of privacy and trust, Shoppi deeply
                  understands your preferences, delivering personalized
                  recommendations and an intuitive shopping experience.
                </p>
                <Button
                  variant="outline"
                  className="w-fit border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Explore the Platform
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="text-purple-600 text-sm font-medium group-hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
