import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";

const apps = [
  {
    title: "Product Finder",
    icon: "🔍",
    description:
      "Find products based on detailed descriptions and specifications",
    popular: true,
  },
  {
    title: "Style Matcher",
    icon: "👗",
    description: "Match your style preferences with trending fashion items",
    popular: true,
  },
  {
    title: "Price Comparison",
    icon: "💰",
    description:
      "Compare prices across multiple retailers to find the best deals",
    popular: false,
  },
  {
    title: "Gift Finder",
    icon: "🎁",
    description:
      "Discover perfect gifts based on recipient preferences and occasions",
    popular: false,
  },
  {
    title: "Review Analyzer",
    icon: "⭐",
    description: "AI-powered analysis of product reviews to help you decide",
    popular: false,
  },
];

export const AppLibrarySection = () => {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2 text-base font-medium border-b border-gray-300 pb-1 w-fit">
              <Grid3X3 className="w-5 h-5 text-purple-600" />
              <span>AI App Library</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  AI Apps for every shopper, across every category
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Shoppi delivers the biggest library of AI Shopping Apps, with
                  50+ specialized tools spanning every shopping category. Our
                  purpose-built apps guide every shopper to success, right out
                  of the gate.
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    View All Apps
                  </Button>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {apps.map((app, index) => (
            <div
              key={app.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group cursor-pointer relative"
            >
              {app.popular && (
                <div className="absolute -top-2 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div className="text-4xl mb-4">{app.icon}</div>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {app.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {app.description}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 group-hover:border-purple-600 group-hover:text-purple-600"
              >
                Try App
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-medium mb-4">
              Ready to transform your shopping experience?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of smart shoppers who use Shoppi AI to discover,
              compare, and purchase products with confidence.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                className="bg-white text-purple-600 border-white hover:bg-purple-50"
              >
                Start Free Trial
              </Button>
              <Button className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
