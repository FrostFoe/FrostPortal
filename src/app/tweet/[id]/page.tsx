
"use client";

import { TweetDetailTopBar } from "@/components/twitter/TweetDetailTopBar";
import { DetailedTweetView } from "@/components/twitter/DetailedTweetView";
import { ReplyCard } from "@/components/twitter/ReplyCard";
import { ReplyInputBar } from "@/components/twitter/ReplyInputBar";
import { Button } from "@/components/ui/button";
import {
  mainTweetDetailData,
  repliesForTweetData,
} from "@/contents/tweetDetailsData"; 

export default function TweetDetailPage({
  params,
}: {
  params: { id: string };
}) {
  
  const currentTweet = mainTweetDetailData;
  const currentReplies = repliesForTweetData;

  return (
    <div className="flex flex-col min-h-screen">
      <TweetDetailTopBar />

      <main className="flex-grow overflow-y-auto pb-32">
        <DetailedTweetView tweet={currentTweet} />
        {currentReplies.map((reply, index) => (
          <ReplyCard
            key={reply.id}
            reply={reply}
            showConnector={
              index < currentReplies.length || currentReplies.length > 0
            }
          />
        ))}
        {currentReplies.length > 0 && (
          <div className="px-4 pb-4 border-b border-twitter-divider">
            <Button
              variant="link"
              className="text-twitter-primary text-sm p-0 h-auto hover:underline"
            >
              1 more reply
            </Button>
          </div>
        )}
      </main>

      <ReplyInputBar />
    </div>
  );
}
