import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingTextProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const FloatingText = ({
  title,
  subtitle,
  className,
}: FloatingTextProps) => {
  const [float, setFloat] = useState({ x: 0, y: 0 });

  // Smooth floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFloat({
        x: Math.sin(Date.now() * 0.0008) * 15,
        y: Math.cos(Date.now() * 0.0006) * 12,
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className,
      )}
      style={{ minHeight: "200px" }}
    >
      {/* Floating Text Container */}
      <div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-300 hover:border-cyan-400/40"
        style={{
          transform: `translate(${float.x}px, ${float.y}px)`,
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white text-xl">🛍️</span>
          </div>
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            <p className="text-blue-200 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
