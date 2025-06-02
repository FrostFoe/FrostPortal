
"use client";

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TweetDetailTopBar() {
  const router = useRouter();

  return (
    <div className="h-14 bg-twitter-background text-twitter-text-primary px-2 flex items-center justify-between sticky top-0 z-40 border-b border-twitter-divider">
      <Button variant="ghost" size="icon" onClick={() => router.back()} className="p-0 h-10 w-10 hover:bg-twitter-primary/10">
        <ChevronLeft size={28} className="text-twitter-primary" />
      </Button>
      
      <h1 className="text-lg font-bold text-twitter-text-primary">Tweet</h1>

      <div className="w-10"></div> {/* Placeholder for balance */}
    </div>
  );
}

