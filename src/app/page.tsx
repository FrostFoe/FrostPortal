
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { TopBar } from "@/components/twitter/TopBar";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { TweetCard, type Tweet } from "@/components/twitter/TweetCard";
import { Plus } from "lucide-react"; // Changed from Feather to Plus
import { initialHomeTweets } from "@/contents/homeFeedData"; // Import data

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a copy to avoid mutating the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

export default function TwitterHomePage() {
  const [tweets, setTweets] = useState<Tweet[] | null>(null); // Initialize as null

  useEffect(() => {
    // Shuffle the tweets on the client-side after hydration
    setTweets(shuffleArray(initialHomeTweets));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Sheet>
      <div className="flex flex-col min-h-screen">
        <TopBar title="Home" />
        <main className="flex-grow overflow-y-auto pb-16">
          {tweets ? (
            tweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))
          ) : (
            <div className="p-4 text-center text-twitter-text-secondary">Loading tweets...</div>
          )}
        </main>
        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-twitter-primary text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:bg-twitter-primary/90 z-50"
            size="icon"
            aria-label="Compose Tweet"
          >
            <Plus size={28} />
          </Button>
        </Link>
      </div>
      <SheetContent
        side="left"
        className="p-0 w-[280px] bg-twitter-background border-r-0 shadow-xl md:hidden"
      >
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
