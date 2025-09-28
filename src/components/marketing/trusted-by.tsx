import React from "react";

const trustedByLogos = [
  { name: "Amazon", logo: "🏪" },
  { name: "Target", logo: "🎯" },
  { name: "Walmart", logo: "🏬" },
  { name: "Best Buy", logo: "🔵" },
  { name: "Nike", logo: "👟" },
  { name: "Apple", logo: "🍎" },
  { name: "Samsung", logo: "📱" },
  { name: "Microsoft", logo: "🪟" },
];

export const TrustedBySection = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            World-class retailers trust Shoppi
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {trustedByLogos.map((company, index) => (
            <div
              key={company.name}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="text-4xl">{company.logo}</div>
              <span className="text-sm font-medium text-gray-600">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Animated Logos Carousel Effect */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll">
            {[...trustedByLogos, ...trustedByLogos].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 flex flex-col items-center gap-2 opacity-40"
              >
                <div className="text-3xl">{company.logo}</div>
                <span className="text-xs text-gray-500">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};
