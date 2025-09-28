import React from "react";
import { cn } from "@/lib/utils";

interface SuggestionCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SuggestionCard = ({
  children,
  className,
  onClick,
}: SuggestionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-shoppi-primary-bg border border-shoppi-border rounded-lg px-4 py-3 text-shoppi-primary-text font-google-sans-regular text-shoppi-base hover:bg-shoppi-secondary-bg transition-colors cursor-pointer min-w-0 flex-1",
        className,
      )}
    >
      {children}
    </button>
  );
};
