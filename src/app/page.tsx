"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { TopBar } from "@/components/twitter/TopBar";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { TweetCard, type Tweet } from "@/components/twitter/TweetCard";
import { Feather } from "lucide-react";
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
  // Initialize with the original order to match server render
  const [tweets, setTweets] = useState<Tweet[]>(initialHomeTweets);

  useEffect(() => {
    // Shuffle the tweets on the client-side after hydration
    setTweets(shuffleArray(initialHomeTweets));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Sheet>
      {" "}
      {/* Sheet for mobile LeftMenu, triggered by TopBar */}
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Use min-h-screen to allow content to grow */}
        <TopBar title="Home" />
        {/* pb-16 for BottomNav height on mobile */}
        <main className="flex-grow overflow-y-auto pb-16">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </main>
        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-twitter-primary text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:bg-twitter-primary/90 z-50"
            size="icon"
            aria-label="Compose Tweet"
          >
            <Feather size={28} />
          </Button>
        </Link>
      </div>
      {/* SheetContent for mobile LeftMenu, hidden on desktop */}
      <SheetContent
        side="left"
        className="p-0 w-[280px] bg-twitter-background border-r-0 shadow-xl md:hidden"
      >
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
