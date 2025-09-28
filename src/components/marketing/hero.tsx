import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FloatingText } from "@/components/ui/floating-text";
import "./hero-animations.css";

export const MarketingHero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Advanced Futuristic Background */}
      <div className="absolute inset-0">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />

        {/* Secondary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-purple-900/30" />

        {/* AI Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
                linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              backgroundPosition: "0 0, 0 0, 0 0, 0 0",
              animation: "circuit-flow 20s linear infinite",
            }}
          />
        </div>

        {/* Neural Network Connections */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3b82f6", stopOpacity: 0.4 }}
                />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated Connection Lines */}
            <g filter="url(#glow)">
              <path
                d="M100,200 Q300,100 500,300 T900,200"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;500,500;1000,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M200,400 Q600,200 800,500 T1200,300"
                stroke="url(#connectionGradient)"
                strokeWidth="1.5"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="1000,0;500,500;0,1000"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M50,600 Q400,400 700,700 T1100,500"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,800;400,400;800,0"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Neural Nodes */}
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx={150 + i * 120}
                cy={200 + Math.sin(i) * 150}
                r="4"
                fill="#06b6d4"
                opacity="0.7"
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  values="4;8;4"
                  dur={`${3 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur={`${2 + Math.random() * 3}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
              </circle>
            ))}
          </svg>
        </div>

        {/* AI Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
              style={{
                left: "-100%",
                top: `${20 + i * 10}%`,
                width: "200%",
                animation: `data-stream ${4 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-lg animate-float-reverse" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-md animate-float" />

          {/* Hexagonal Tech Elements */}
          <div className="absolute top-20 right-20 w-16 h-16 border border-cyan-400/30 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-32 left-32 w-12 h-12 border border-purple-400/40 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rotate-45 animate-float opacity-60" />
        </div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `binary-rain ${8 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <div className="text-center pt-16 pb-20">
          {/* AI Innovation Banner */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              AI
            </span>
            <span>
              Introducing Smart Shopping: Neural networks that understand you
            </span>
            <span className="text-cyan-400 animate-bounce">→</span>
          </div>

          {/* Main Headline with Enhanced Effects */}
          <div className="space-y-6 mb-10">
            <h1 className="text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
              The AI your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  shopping
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-lg animate-pulse" />
              </span>{" "}
              needs
            </h1>
            <p className="text-xl text-blue-100 max-w-md mx-auto leading-relaxed">
              Elevate your shopping experience with AI that understands your
              style, preferences, and budget.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/chat">
              <Button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 font-medium text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Try Shoppi AI</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="group relative border-white/30 text-black bg-white/90 hover:bg-white backdrop-blur-sm px-8 py-4 font-medium text-lg rounded-xl transition-all duration-300 hover:border-cyan-400/50 overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Watch Demo
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-black group-hover:opacity-0 transition-opacity duration-300">
                Watch Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-sm text-blue-200">
            <p>No credit card required • Start instantly • Cancel anytime</p>
          </div>
        </div>

        {/* Enhanced Hero Visualization */}
        <div className="relative h-96 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />

          <FloatingText
            title="Smart Shopping Assistant"
            subtitle="AI-powered product recommendations"
          />

          {/* Enhanced Floating UI elements */}
          <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-cyan-400/30 animate-float">
            <span className="text-2xl">💫</span>
          </div>
          <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-purple-400/30 animate-float-reverse">
            <span className="text-2xl">🎯</span>
          </div>
          <div className="absolute bottom-8 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-blue-400/30 animate-float-slow">
            <span className="text-2xl">✨</span>
          </div>
          <div className="absolute bottom-12 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-green-400/30 animate-float">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};
