
"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileTopBarProps {
  title: string;
}

export function ProfileTopBar({ title }: ProfileTopBarProps) {
  const router = useRouter();

  return (
    <div className="h-14 backdrop-blur-md text-twitter-text-primary px-2 flex items-center sticky top-0 z-40 border-b border-twitter-divider bg-transparent">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => router.back()}
        className="p-0 h-10 w-10"
      >
        <ChevronLeft size={28} className="text-twitter-primary" />
      </Button>

      <h1 className="text-lg font-bold text-twitter-text-primary ml-2 truncate">
        {title}
      </h1>

      
      <div className="w-10 ml-auto"></div>
    </div>
  );
}
