import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const solutions = [
  {
    id: "fashionistas",
    name: "Fashion Enthusiasts",
    description:
      "Discover trending styles, get outfit recommendations, and find the perfect pieces to express your unique fashion sense.",
    image: "👗",
    active: true,
  },
  {
    id: "bargain-hunters",
    name: "Bargain Hunters",
    description:
      "Never miss a deal again. Get real-time price alerts, comparison shopping, and exclusive discount notifications.",
    image: "💰",
    active: false,
  },
  {
    id: "busy-professionals",
    name: "Busy Professionals",
    description:
      "Save time with curated selections, one-click reordering, and AI-powered shopping lists that adapt to your schedule.",
    image: "💼",
    active: false,
  },
  {
    id: "gift-givers",
    name: "Gift Givers",
    description:
      "Find the perfect gift every time with AI that learns recipient preferences and suggests thoughtful, personalized options.",
    image: "🎁",
    active: false,
  },
  {
    id: "families",
    name: "Families",
    description:
      "Manage household shopping with shared lists, budget tracking, and recommendations for every family member.",
    image: "👨‍👩‍👧‍👦",
    active: false,
  },
  {
    id: "collectors",
    name: "Collectors",
    description:
      "Track rare finds, get notified of new releases, and build your collections with expert AI guidance.",
    image: "🎯",
    active: false,
  },
];

export const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const nextSolution = () => {
    setActiveSolution((prev) => (prev + 1) % solutions.length);
  };

  const prevSolution = () => {
    setActiveSolution(
      (prev) => (prev - 1 + solutions.length) % solutions.length,
    );
  };

  return (
    <section id="solutions" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-2 text-base font-medium border-b border-gray-300 pb-1 w-fit mx-auto mb-4">
            <Users className="w-5 h-5 text-purple-600" />
            <span>Solutions by Shopping Style</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 mb-8">
            Solutions for
          </h2>

          {/* Solution Tabs */}
          <div className="flex items-center justify-center gap-8 mb-12 overflow-x-auto pb-4">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(index)}
                className={`whitespace-nowrap text-lg font-medium transition-colors ${
                  index === activeSolution
                    ? "text-purple-600 border-b-2 border-purple-600 pb-2"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {solution.name}
              </button>
            ))}
          </div>
        </div>

        {/* Solution Cards */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-12 left-0 right-0 flex justify-between items-center z-10 px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSolution}
              className="bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSolution}
              className="bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Active Solution Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 text-center max-w-2xl mx-auto">
            <div className="text-8xl mb-6">
              {solutions[activeSolution].image}
            </div>
            <h3 className="text-3xl font-medium text-gray-900 mb-4">
              {solutions[activeSolution].name}
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {solutions[activeSolution].description}
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20" />
          <div className="absolute top-1/2 left-0 w-16 h-16 bg-blue-200 rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
};
