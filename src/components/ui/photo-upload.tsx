import React, { useState, useRef } from "react";
import { Upload, X, Image, Camera } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface PhotoUploadProps {
  onUpload?: (files: File[]) => void;
  onClose?: () => void;
  isVisible: boolean;
  className?: string;
}

export const PhotoUpload = ({
  onUpload,
  onClose,
  isVisible,
  className,
}: PhotoUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );

    if (files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...files]);
      onUpload?.(files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter((file) =>
      file.type.startsWith("image/"),
    );

    if (files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...files]);
      onUpload?.(files);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "absolute bottom-full left-0 right-0 mb-4 bg-shoppi-primary-bg border border-shoppi-border rounded-2xl shadow-lg z-10",
        className,
      )}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-shoppi-primary-text font-google-sans font-medium text-base">
            Upload Photos
          </h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-shoppi-secondary-text hover:bg-shoppi-secondary-bg"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Upload Area */}
        <div
          className={cn(
            "border-2 border-dashed rounded-xl p-8 text-center transition-colors",
            dragActive
              ? "border-shoppi-accent-blue bg-blue-50"
              : "border-shoppi-border",
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-shoppi-secondary-bg flex items-center justify-center">
              <Upload size={24} className="text-shoppi-secondary-text" />
            </div>

            <div>
              <p className="text-shoppi-primary-text font-google-sans-regular mb-1">
                Drag and drop images here, or{" "}
                <button
                  onClick={openFileSelector}
                  className="text-shoppi-accent-blue hover:underline"
                >
                  browse
                </button>
              </p>
              <p className="text-shoppi-secondary-text text-shoppi-sm">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex gap-3 mt-4">
          <Button
            onClick={openFileSelector}
            variant="outline"
            className="flex-1 bg-shoppi-primary-bg text-shoppi-primary-text border-shoppi-border hover:bg-shoppi-secondary-bg"
          >
            <Image size={16} className="mr-2" />
            From Gallery
          </Button>
          <Button
            onClick={() => {
              // In a real app, this would open camera
              openFileSelector();
            }}
            variant="outline"
            className="flex-1 bg-shoppi-primary-bg text-shoppi-primary-text border-shoppi-border hover:bg-shoppi-secondary-bg"
          >
            <Camera size={16} className="mr-2" />
            Take Photo
          </Button>
        </div>

        {/* Uploaded Files Preview */}
        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h4 className="text-shoppi-secondary-text text-shoppi-sm mb-3">
              Uploaded Images ({uploadedFiles.length})
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-shoppi-secondary-bg rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    onClick={() => removeFile(index)}
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <X size={12} />
                  </Button>
                  <p className="mt-1 text-shoppi-secondary-text text-xs truncate">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};
