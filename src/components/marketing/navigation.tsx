import React, { useState, useRef, useEffect } from "react";
import { ShoppiLogo } from "@/components/ui/shoppi-logo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  description?: string;
  href: string;
  icon?: string;
}

interface NavigationDropdown {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

const navigationItems: NavigationDropdown[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      {
        label: "Shopping Assistant",
        description: "AI-powered personal shopping companion",
        href: "/platform/shopping-assistant",
        icon: "🛍️",
      },
      {
        label: "Style Analyzer",
        description: "Discover your unique fashion preferences",
        href: "/platform/style-analyzer",
        icon: "👗",
      },
      {
        label: "Price Tracker",
        description: "Smart price monitoring and alerts",
        href: "/platform/price-tracker",
        icon: "💰",
      },
      {
        label: "Visual Search",
        description: "Find products from any image",
        href: "/platform/visual-search",
        icon: "📸",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      {
        label: "Fashion Enthusiasts",
        description: "Discover trending styles and outfit recommendations",
        href: "/solutions/fashion",
        icon: "✨",
      },
      {
        label: "Bargain Hunters",
        description: "Never miss a deal with smart price alerts",
        href: "/solutions/bargain-hunters",
        icon: "🎯",
      },
      {
        label: "Busy Professionals",
        description: "Save time with curated shopping experiences",
        href: "/solutions/professionals",
        icon: "💼",
      },
      {
        label: "Gift Givers",
        description: "Find perfect gifts with AI recommendations",
        href: "/solutions/gift-givers",
        icon: "🎁",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      {
        label: "Documentation",
        description: "Complete guides and API references",
        href: "/resources/docs",
        icon: "📚",
      },
      {
        label: "Case Studies",
        description: "Success stories from our users",
        href: "/resources/case-studies",
        icon: "📊",
      },
      {
        label: "Blog",
        description: "Latest insights and shopping trends",
        href: "/resources/blog",
        icon: "✍️",
      },
      {
        label: "Help Center",
        description: "Get support and answers to your questions",
        href: "/resources/help",
        icon: "❓",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      {
        label: "About Us",
        description: "Our mission to revolutionize shopping",
        href: "/company/about",
        icon: "🏢",
      },
      {
        label: "Careers",
        description: "Join our team of innovators",
        href: "/company/careers",
        icon: "💡",
      },
      {
        label: "Contact",
        description: "Get in touch with our team",
        href: "/company/contact",
        icon: "📞",
      },
      {
        label: "Privacy",
        description: "How we protect your data",
        href: "/company/privacy",
        icon: "🔒",
      },
    ],
  },
];

export const MarketingNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-10">
        <nav
          ref={navRef}
          className="flex items-center justify-between min-h-[70px]"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <ShoppiLogo size={32} />
              <span className="text-2xl font-medium text-gray-900">Shoppi</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href || "#"}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-6"
                >
                  {item.label}
                  {item.items && <ChevronDown size={16} />}
                </Link>

                {/* Navigation Dropdown */}
                {item.items && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {item.label}
                      </h3>
                    </div>
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg mt-0.5">{subItem.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {subItem.label}
                            </div>
                            <div className="text-gray-600 text-xs mt-0.5">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-6"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-gray-700 font-medium relative overflow-hidden group hover:text-white transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 transition-colors duration-300">
                  Log In
                </span>
              </Button>
            </Link>
            <Link to="/chat">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-md transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Try Shoppi AI
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
