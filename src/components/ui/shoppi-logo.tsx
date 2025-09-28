import React from "react";

interface ShoppiLogoProps {
  size?: number;
  className?: string;
}

export const ShoppiLogo = ({ size = 32, className = "" }: ShoppiLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient definitions */}
        <linearGradient
          id="shoppi-primary-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="30%" stopColor="#3b82f6" />
          <stop offset="70%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>

        <linearGradient
          id="shoppi-secondary-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle with subtle glow */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="url(#shoppi-primary-gradient)"
        opacity="0.1"
        filter="url(#glow)"
      />

      {/* Main shopping bag shape */}
      <path
        d="M12 16h24l-2 18H14l-2-18z"
        fill="url(#shoppi-primary-gradient)"
        opacity="0.8"
      />

      {/* Shopping bag handle */}
      <path
        d="M16 16v-2a8 8 0 0116 0v2"
        stroke="url(#shoppi-secondary-gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* AI neural network nodes */}
      <circle cx="20" cy="24" r="1.5" fill="#06b6d4">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="28" cy="24" r="1.5" fill="#3b82f6">
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="24" cy="28" r="1.5" fill="#8b5cf6">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* AI connection lines */}
      <path
        d="M20 24L28 24M20 24L24 28M28 24L24 28"
        stroke="url(#shoppi-secondary-gradient)"
        strokeWidth="1"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,20;10,10;20,0"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Smart indicator dots */}
      <circle cx="18" cy="20" r="0.8" fill="#06b6d4" opacity="0.7">
        <animate
          attributeName="r"
          values="0.8;1.2;0.8"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="30" cy="20" r="0.8" fill="#8b5cf6" opacity="0.7">
        <animate
          attributeName="r"
          values="1.2;0.8;1.2"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Tech accent - circuit pattern */}
      <path
        d="M15 30h4m4 0h4m4 0h4"
        stroke="#06b6d4"
        strokeWidth="0.8"
        opacity="0.4"
        strokeDasharray="2,2"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;4"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Sparkle effect */}
      <g opacity="0.8">
        <path d="M32 18l1-2 1 2-1 2-1-2z" fill="#06b6d4">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 33 18;360 33 18"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M38 28l0.5-1 0.5 1-0.5 1-0.5-1z" fill="#8b5cf6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="360 38.5 28;0 38.5 28"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};
