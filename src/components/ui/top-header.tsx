import React from "react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const TopHeader = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleAboutClick = () => {
    // You can implement about functionality here
    console.log("About clicked");
  };

  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleAboutClick}
          className="bg-shoppi-primary-bg text-shoppi-primary-text border-shoppi-border hover:bg-shoppi-secondary-bg font-google-sans-regular text-shoppi-base"
        >
          About
        </Button>
        <Button
          variant="outline"
          onClick={handleLoginClick}
          className="bg-shoppi-primary-bg text-shoppi-accent-blue border-shoppi-border hover:bg-shoppi-secondary-bg font-google-sans-regular text-shoppi-base"
        >
          Login
        </Button>
      </div>
    </header>
  );
};
