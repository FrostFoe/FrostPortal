"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { TopBar } from "@/components/twitter/TopBar";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { TweetCard, type Tweet } from "@/components/twitter/TweetCard";
import { Feather } from "lucide-react";

const initialTweets: Tweet[] = [
  {
    id: "1",
    avatarUrl: "https://placehold.co/48x48.png?text=PN",
    avatar_data_ai_hint: "person name",
    name: "Placeholder Name",
    handle: "placeholderdev",
    timestamp: "2h",
    content:
      "Just setting up my twttr clone with @nextjs and #tailwindcss! Excited to see how this turns out. This is a longer tweet to test text wrapping and overall layout to ensure it looks good on mobile screens.",
    replyCount: 28,
    retweetCount: 25,
    likeCount: 21,
    imageAttachmentUrl: "https://placehold.co/600x400.png",
    data_ai_hint: "code computer",
  },
  {
    id: "2",
    avatarUrl: "https://placehold.co/48x48.png?text=AI",
    avatar_data_ai_hint: "robot head",
    name: "AI Enthusiast",
    handle: "futureisai",
    timestamp: "3h",
    content:
      "Exploring the possibilities of generative AI. The future is fascinating! #AI #MachineLearning",
    replyCount: 15,
    retweetCount: 42,
    likeCount: 102,
    data_ai_hint: "abstract brain",
  },
  {
    id: "3",
    avatarUrl: "https://placehold.co/48x48.png?text=JS",
    avatar_data_ai_hint: "logo javascript",
    name: "JavaScript Fan",
    handle: "jslover",
    timestamp: "5h",
    content:
      "What are your favorite new ES2023 features? Mine is Array.prototype.toSorted()!",
    replyCount: 5,
    retweetCount: 10,
    likeCount: 30,
    data_ai_hint: "code screen",
  },
];

export default function TwitterHomePage() {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);

  return (
    <Sheet>
      <div className="flex flex-col min-h-screen">
        <TopBar title="Home" />

        <main className="flex-grow overflow-y-auto pb-16">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </main>

        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            asChild
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-twitter-primary text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:bg-twitter-primary/90 z-50"
            size="icon"
            aria-label="Compose Tweet"
          >
            <Feather size={28} />
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
