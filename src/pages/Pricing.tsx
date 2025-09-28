import React from "react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Shoppi Free",
    price: "Free",
    period: "",
    description: "Perfect for casual shoppers getting started",
    features: [
      "Basic AI recommendations",
      "Price comparison across 3 retailers",
      "Style matching",
      "Community support",
      "Basic shopping lists",
    ],
    cta: "Get Started",
    href: "/chat",
    popular: false,
  },
  {
    name: "Shoppi Premium",
    price: "$49",
    period: "/month",
    description: "Advanced features for serious shoppers",
    features: [
      "Advanced AI recommendations",
      "Price tracking across unlimited retailers",
      "Personal style consultant",
      "Priority support",
      "Exclusive deals and early access",
      "Advanced analytics",
      "Custom alerts",
    ],
    cta: "Start Premium",
    href: "/chat",
    popular: true,
  },
  {
    name: "Shoppi Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for businesses and teams",
    features: [
      "Everything in Premium",
      "White-label solutions",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Advanced team analytics",
      "Custom training",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the free plan work?",
    answer:
      "Our free plan gives you access to basic AI recommendations and price comparison across 3 major retailers. Perfect for getting started with AI-powered shopping.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoice billing.",
  },
  {
    question: "Is there a commitment with Premium?",
    answer:
      "No, Premium is month-to-month with no long-term commitment. Cancel anytime from your account settings.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <h1 className="text-5xl lg:text-6xl font-medium text-gray-900 mb-6">
              Choose your shopping experience
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Start free and upgrade when you're ready for more advanced AI
              shopping features
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Check size={16} className="text-green-600" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Check size={16} className="text-green-600" />
                Cancel anytime
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    plan.popular
                      ? "border-purple-600 shadow-xl scale-105"
                      : "border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star size={14} />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            plan.popular ? "text-purple-600" : "text-green-600"
                          }`}
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.href} className="block">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link to="/company/contact">
                <Button variant="outline" className="border-gray-300">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-10 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-medium mb-4">
                Ready to revolutionize your shopping?
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of smart shoppers using AI to discover, compare,
                and purchase products.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/chat">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/company/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};

export default Pricing;
