import React, { useState, useRef, useEffect } from "react";
import { Menu, MessageSquare, Clock, Trash2 } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ChatHistoryItem {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
}

interface ChatHistoryProps {
  onChatSelect?: (chatId: string) => void;
  onNewChat?: () => void;
  className?: string;
}

// Mock chat history data
const mockChatHistory: ChatHistoryItem[] = [
  {
    id: "1",
    title: "Product recommendations",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    preview: "Can you recommend some products for...",
  },
  {
    id: "2",
    title: "Shopping list help",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    preview: "Help me create a shopping list for...",
  },
  {
    id: "3",
    title: "Price comparison",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    preview: "Compare prices for these items...",
  },
  {
    id: "4",
    title: "Gift ideas",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    preview: "I need gift ideas for my friend...",
  },
];

export const ChatHistory = ({
  onChatSelect,
  onNewChat,
  className,
}: ChatHistoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    onChatSelect?.(chatId);
    setIsOpen(false);
  };

  const handleNewChat = () => {
    setSelectedChatId(null);
    onNewChat?.();
    setIsOpen(false);
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return `${diffDays}d ago`;
    }
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-shoppi-primary-text hover:bg-shoppi-secondary-bg",
          isOpen && "bg-shoppi-secondary-bg",
        )}
        title="Chat History"
      >
        <Menu size={20} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-shoppi-primary-bg border border-shoppi-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-shoppi-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-shoppi-primary-text font-google-sans font-medium">
                Chat History
              </h3>
              <Button
                onClick={handleNewChat}
                variant="outline"
                size="sm"
                className="text-shoppi-accent-blue border-shoppi-accent-blue hover:bg-blue-50"
              >
                New Chat
              </Button>
            </div>
          </div>

          <div className="p-2">
            {mockChatHistory.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare
                  size={32}
                  className="text-shoppi-secondary-text mx-auto mb-2"
                />
                <p className="text-shoppi-secondary-text text-shoppi-sm">
                  No chat history yet
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                {mockChatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => handleChatSelect(chat.id)}
                    className={cn(
                      "w-full flex items-start gap-3 p-3 rounded-md hover:bg-shoppi-secondary-bg transition-colors text-left group",
                      selectedChatId === chat.id && "bg-shoppi-secondary-bg",
                    )}
                  >
                    <MessageSquare
                      size={16}
                      className="text-shoppi-secondary-text mt-1 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-shoppi-primary-text font-google-sans-regular font-medium text-sm truncate">
                          {chat.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Clock
                            size={12}
                            className="text-shoppi-secondary-text"
                          />
                          <span className="text-shoppi-secondary-text text-xs">
                            {formatTimestamp(chat.timestamp)}
                          </span>
                        </div>
                      </div>
                      <p className="text-shoppi-secondary-text text-shoppi-sm truncate">
                        {chat.preview}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 w-6 h-6 text-shoppi-secondary-text hover:text-red-500 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle delete chat
                        console.log("Delete chat:", chat.id);
                      }}
                    >
                      <Trash2 size={12} />
                    </Button>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
