import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppiLogo } from "./shoppi-logo";
import { Button } from "./button";
import { ChatHistory } from "./chat-history";
import { PlanSelector, PlanType } from "./plan-selector";

export const TopNavigationBar = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("free");

  const handleChatSelect = (chatId: string) => {
    console.log("Selected chat:", chatId);
    // Handle chat selection logic here
  };

  const handleNewChat = () => {
    console.log("Starting new chat");
    // Handle new chat logic here
  };

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
    console.log("Plan changed to:", plan);
    // Handle plan change logic here
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-shoppi-primary-bg border-b border-shoppi-border">
      <div className="flex items-center gap-4">
        <ChatHistory
          onChatSelect={handleChatSelect}
          onNewChat={handleNewChat}
        />

        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ShoppiLogo size={24} />
          <span className="text-shoppi-primary-text font-google-sans text-xl font-medium">
            Shoppi
          </span>
        </Link>
        <PlanSelector
          selectedPlan={selectedPlan}
          onPlanChange={handlePlanChange}
        />
      </div>

      <Button
        variant="ghost"
        className="text-shoppi-secondary-text hover:bg-shoppi-secondary-bg font-google-sans-regular text-shoppi-base"
        onClick={() => {
          console.log("About Shoppi clicked");
          // Handle about Shoppi logic here
        }}
      >
        About Shoppi
      </Button>
    </nav>
  );
};
