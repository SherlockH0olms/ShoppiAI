import React from "react";
import { Plus, Settings } from "lucide-react";
import { Button } from "./button";

export const Sidebar = () => {
  return (
    <aside className="w-18 bg-shoppi-secondary-bg flex flex-col items-center py-4 gap-4">
      <Button
        variant="ghost"
        size="icon"
        disabled
        className="text-shoppi-disabled-text hover:bg-shoppi-primary-bg disabled:opacity-100"
        title="New chat"
      >
        <Plus size={20} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="text-shoppi-secondary-text hover:bg-shoppi-primary-bg"
        title="Settings"
      >
        <Settings size={20} />
      </Button>
    </aside>
  );
};
