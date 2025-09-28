import React, { useState } from "react";
import { Paperclip, Mic, Send, Square } from "lucide-react";
import { Button } from "./button";
import { PhotoUpload } from "./photo-upload";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage?: (message: string, files?: File[]) => void;
  onVoiceMessage?: (audioBlob: Blob) => void;
  placeholder?: string;
  className?: string;
}

export const ChatInput = ({
  onSendMessage,
  onVoiceMessage,
  placeholder = "Ask Shoppi",
  className,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((message.trim() || uploadedFiles.length > 0) && onSendMessage) {
      onSendMessage(message.trim(), uploadedFiles);
      setMessage("");
      setUploadedFiles([]);
      setShowPhotoUpload(false);
    }
  };

  const handlePhotoUpload = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleAttachClick = () => {
    setShowPhotoUpload(!showPhotoUpload);
  };

  const handleVoiceClick = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      console.log("Stopped recording");
      // In a real implementation, you would stop the audio recording
      // and call onVoiceMessage with the audio blob
    } else {
      // Start recording
      setIsRecording(true);
      console.log("Started recording");
      // In a real implementation, you would start audio recording here
      // For demo purposes, we'll simulate a recording that stops after 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        console.log("Auto-stopped recording after 3 seconds");
      }, 3000);
    }
  };

  const hasContent = message.trim() || uploadedFiles.length > 0;

  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4", className)}>
      <form onSubmit={handleSubmit} className="relative">
        {/* Photo Upload Section */}
        <PhotoUpload
          isVisible={showPhotoUpload}
          onUpload={handlePhotoUpload}
          onClose={() => setShowPhotoUpload(false)}
        />

        {/* Recording Indicator */}
        {isRecording && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-700 font-google-sans-regular text-shoppi-base">
                Recording voice message... Click to stop
              </span>
            </div>
          </div>
        )}

        {/* Uploaded Files Preview */}
        {uploadedFiles.length > 0 && (
          <div className="mb-4 p-4 bg-shoppi-secondary-bg rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Paperclip size={16} className="text-shoppi-secondary-text" />
              <span className="text-shoppi-secondary-text text-shoppi-sm">
                {uploadedFiles.length} image
                {uploadedFiles.length > 1 ? "s" : ""} attached
              </span>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-shoppi-primary-bg rounded-lg overflow-hidden border border-shoppi-border">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() =>
                      setUploadedFiles((prev) =>
                        prev.filter((_, i) => i !== index),
                      )
                    }
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full hover:bg-red-600 text-xs"
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="flex items-center bg-shoppi-primary-bg border border-shoppi-border rounded-2xl px-4 py-3 gap-3 focus-within:ring-2 focus-within:ring-shoppi-accent-blue focus-within:border-shoppi-accent-blue transition-all">
          <Button
            type="button"
            onClick={handleAttachClick}
            variant="ghost"
            size="icon"
            className={cn(
              "text-shoppi-secondary-text hover:bg-shoppi-secondary-bg flex-shrink-0 transition-colors",
              showPhotoUpload &&
                "text-shoppi-accent-blue bg-shoppi-secondary-bg",
            )}
          >
            <Paperclip size={20} />
          </Button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-shoppi-primary-text font-google-sans-regular text-shoppi-base placeholder:text-shoppi-secondary-text"
            disabled={isRecording}
          />

          {hasContent ? (
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="text-shoppi-accent-blue hover:bg-shoppi-secondary-bg flex-shrink-0"
            >
              <Send size={20} />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleVoiceClick}
              variant="ghost"
              size="icon"
              className={cn(
                "flex-shrink-0 transition-colors",
                isRecording
                  ? "text-red-500 hover:bg-red-50"
                  : "text-shoppi-secondary-text hover:bg-shoppi-secondary-bg",
              )}
              title={isRecording ? "Stop recording" : "Record voice message"}
            >
              {isRecording ? <Square size={20} /> : <Mic size={20} />}
            </Button>
          )}
        </div>
      </form>

      {/* Footer disclaimer */}
      <div className="text-center mt-4 text-shoppi-sm text-shoppi-secondary-text">
        By using Shoppi, you agree to the{" "}
        <a href="#" className="underline hover:no-underline">
          Google Terms
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:no-underline">
          Google Privacy Policy
        </a>
      </div>
    </div>
  );
};
