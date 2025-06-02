"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TweetDetailTopBar } from "@/components/twitter/TweetDetailTopBar";
import { DetailedTweetView, type DetailedTweetType } from "@/components/twitter/DetailedTweetView";
import { ReplyCard, type ReplyType } from "@/components/twitter/ReplyCard";
import { ReplyInputBar } from "@/components/twitter/ReplyInputBar";

import { initialHomeTweets } from "@/contents/homeFeedData";
import { mainTweetDetailData, repliesForTweetData as specificRepliesForMainTweet } from "@/contents/tweetDetailsData";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function TweetDetailPage({
  params
}: PageProps) {
  const [currentTweet, setCurrentTweet] = useState<DetailedTweetType | null>(null);
  const [currentReplies, setCurrentReplies] = useState<ReplyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const awaitedParams = await params;
      const tweetId = awaitedParams.id;

      let foundTweet: DetailedTweetType | null = null;
      let foundReplies: ReplyType[] = [];

      if (tweetId === mainTweetDetailData.id) {
        foundTweet = mainTweetDetailData;
        foundReplies = specificRepliesForMainTweet;
      } else {
        const foundHomeTweet = initialHomeTweets.find(tweet => tweet.id === tweetId);
        if (foundHomeTweet) {
          foundTweet = {
            id: foundHomeTweet.id,
            user: {
              name: foundHomeTweet.name,
              handle: foundHomeTweet.handle,
              avatarUrl: foundHomeTweet.avatarUrl,
              avatar_data_ai_hint: foundHomeTweet.avatar_data_ai_hint,
            },
            content: foundHomeTweet.content,
            detailedTimestamp: `Posted: ${foundHomeTweet.timestamp}`,
            source: "Frostter Web App",
            retweetCount: foundHomeTweet.retweetCount,
            likeCount: foundHomeTweet.likeCount,
            imageAttachmentUrl: foundHomeTweet.imageAttachmentUrl,
            image_data_ai_hint: foundHomeTweet.data_ai_hint,
          };
        }
      }
      setCurrentTweet(foundTweet);
      setCurrentReplies(foundReplies);
      setLoading(false);
    };

    fetchData();
  }, [params]); // Rerun effect if params change

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <TweetDetailTopBar />
        <main className="flex-grow overflow-y-auto p-4 text-center flex flex-col items-center justify-center">
          <p className="text-twitter-text-secondary">Loading tweet...</p>
        </main>
      </div>
    );
  } else if (!currentTweet) {
    return (
      <div className="flex flex-col min-h-screen">
        <TweetDetailTopBar />
        <main className="flex-grow overflow-y-auto p-4 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-twitter-text-primary mb-2">
            Tweet not found
          </h2>
          <p className="text-twitter-text-secondary mb-6">
            This tweet may not exist or has been removed.
          </p>
          <Link href="/" passHref>
            <Button className="bg-twitter-primary text-white hover:bg-twitter-primary/90">
              Go to Home
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TweetDetailTopBar />

      <main className="flex-grow overflow-y-auto pb-32">
        <DetailedTweetView tweet={currentTweet} />
        {currentReplies.length > 0 ? (
          currentReplies.map((reply, index) => (
            <ReplyCard
              key={reply.id}
              reply={reply}
              showConnector={index < currentReplies.length -1}
            />
          ))
        ) : (
          <div className="p-4 text-center text-twitter-text-secondary border-t border-twitter-divider">
            No replies yet.
          </div>
        )}
      </main>

      <ReplyInputBar />
    </div>
  );
}