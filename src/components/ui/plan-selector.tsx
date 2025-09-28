import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export type PlanType = "free" | "premium" | "enterprise";

interface Plan {
  id: PlanType;
  name: string;
  description: string;
}

interface PlanSelectorProps {
  selectedPlan?: PlanType;
  onPlanChange?: (plan: PlanType) => void;
  className?: string;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Shoppi Free",
    description: "Basic AI assistance",
  },
  {
    id: "premium",
    name: "Shoppi Premium",
    description: "Advanced features and priority support",
  },
  {
    id: "enterprise",
    name: "Shoppi Enterprise",
    description: "Full enterprise solution with custom integrations",
  },
];

export const PlanSelector = ({
  selectedPlan = "free",
  onPlanChange,
  className,
}: PlanSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePlanSelect = (planId: PlanType) => {
    onPlanChange?.(planId);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="text-shoppi-secondary-text hover:bg-shoppi-secondary-bg font-google-sans-regular text-shoppi-base flex items-center gap-1"
      >
        {selectedPlanData?.name}
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-shoppi-primary-bg border border-shoppi-border rounded-lg shadow-lg z-50">
          <div className="p-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-shoppi-secondary-bg transition-colors text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-shoppi-primary-text font-google-sans-regular font-medium">
                      {plan.name}
                    </span>
                    {plan.id === selectedPlan && (
                      <Check
                        size={16}
                        className="text-shoppi-accent-blue flex-shrink-0"
                      />
                    )}
                  </div>
                  <p className="text-shoppi-secondary-text text-shoppi-sm mt-1">
                    {plan.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
