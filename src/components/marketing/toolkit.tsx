import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, MessageSquare, Image, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const toolkitFeatures = [
  {
    id: "shopping-assistant",
    name: "Shopping Assistant",
    description:
      "The only AI shopping assistant trained exclusively in your preferences and style.",
    icon: <MessageSquare className="w-6 h-6" />,
    active: true,
  },
  {
    id: "style-analyzer",
    name: "Style Analyzer",
    description:
      "AI-powered style analysis that learns your unique fashion preferences.",
    icon: <Heart className="w-6 h-6" />,
    active: false,
  },
  {
    id: "price-tracker",
    name: "Price Tracker",
    description:
      "Smart price monitoring with instant alerts and deal notifications.",
    icon: <Zap className="w-6 h-6" />,
    active: false,
  },
  {
    id: "visual-search",
    name: "Visual Search",
    description:
      "Upload any image to find similar products across thousands of retailers.",
    icon: <Image className="w-6 h-6" />,
    active: false,
  },
  {
    id: "smart-lists",
    name: "Smart Lists",
    description:
      "Intelligent shopping lists that adapt to your needs and preferences.",
    icon: <ShoppingBag className="w-6 h-6" />,
    active: false,
  },
];

export const ToolkitSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2 text-base font-medium border-b border-gray-300 pb-1 w-fit">
              <Zap className="w-5 h-5 text-purple-600" />
              <span>The Shopping AI Toolkit</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  AI-first tools for AI-first shoppers
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl text-gray-600 leading-relaxed">
                  With a product experience designed specifically for shoppers,
                  Shoppi's tools help every user discover, compare, and purchase
                  products that perfectly match their style and needs.
                </p>
                <Link to="/chat">
                  <Button className="w-fit bg-purple-600 hover:bg-purple-700 text-white">
                    Try Shoppi AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="bg-gradient-to-r from-white via-purple-50 to-white rounded-2xl min-h-[480px] overflow-hidden">
          <div className="flex h-full">
            {/* Feature Tabs */}
            <div className="w-2/5 p-8 space-y-2">
              {toolkitFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    index === activeFeature
                      ? "bg-white shadow-sm border border-gray-200"
                      : "hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`${
                        index === activeFeature
                          ? "text-purple-600"
                          : "text-gray-500"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h3
                      className={`font-medium ${
                        index === activeFeature
                          ? "text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Feature Preview */}
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600">
                      {toolkitFeatures[activeFeature].icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    {toolkitFeatures[activeFeature].name}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Experience the power of AI-driven shopping assistance.
                  </p>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full">
                      <div className="h-4 bg-purple-200 rounded-full w-3/4" />
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full">
                      <div className="h-4 bg-purple-200 rounded-full w-1/2" />
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full">
                      <div className="h-4 bg-purple-200 rounded-full w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
