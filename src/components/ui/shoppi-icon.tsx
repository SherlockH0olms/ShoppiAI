import React from "react";

interface ShoppiIconProps {
  size?: number;
  className?: string;
}

export const ShoppiIcon = ({ size = 24, className = "" }: ShoppiIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        fill="url(#shoppi-gradient)"
      />
      <defs>
        <linearGradient
          id="shoppi-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="rgb(66, 133, 244)" />
          <stop offset="50%" stopColor="rgb(155, 114, 203)" />
          <stop offset="100%" stopColor="rgb(217, 101, 112)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
