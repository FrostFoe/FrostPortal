
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

export interface Tweet {
  id: string;
  avatarUrl: string;
  name: string;
  handle: string;
  timestamp: string;
  content: string;
  imageAttachmentUrl?: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  data_ai_hint?: string; // For the main image
  avatar_data_ai_hint?: string; // For the avatar
}

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCardComponent: React.FC<TweetCardProps> = ({ tweet }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [likes, setLikes] = useState(tweet.likeCount);
  const [retweets, setRetweets] = useState(tweet.retweetCount);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation when liking
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleRetweet = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation when retweeting
    e.stopPropagation();
    setIsRetweeted(!isRetweeted);
    setRetweets(isRetweeted ? retweets - 1 : retweets + 1);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add specific action logic if needed, for now just stops propagation
  };

  return (
    <Link
      href={`/tweet/${tweet.id}`}
      passHref
      className="block hover:bg-slate-50/5 dark:hover:bg-slate-800/20 transition-colors duration-150"
    >
      <article className="flex space-x-3 p-4 border-b border-twitter-divider font-system cursor-pointer">
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage
            src={tweet.avatarUrl}
            alt={tweet.name}
            data-ai-hint={tweet.avatar_data_ai_hint || "user avatar"}
          />
          <AvatarFallback>{tweet.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-twitter-text-primary text-16px">
              {tweet.name}
            </span>
            <span className="text-twitter-text-secondary text-14px">
              @{tweet.handle}
            </span>
            <span className="text-twitter-text-secondary text-14px">
              &middot;
            </span>
            <span className="text-twitter-text-secondary text-14px">
              {tweet.timestamp}
            </span>
          </div>
          <p className="text-twitter-text-primary text-15px mt-1 whitespace-pre-wrap">
            {tweet.content}
          </p>
          {tweet.imageAttachmentUrl && (
            <div className="mt-2 rounded-xl overflow-hidden border border-twitter-divider">
              <Image
                src={tweet.imageAttachmentUrl}
                alt="Tweet image"
                width={500}
                height={300}
                className="object-cover w-full"
                data-ai-hint={tweet.data_ai_hint || "tweet image"}
              />
            </div>
          )}
          <div className="flex justify-between items-center mt-3 text-twitter-text-secondary">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1 p-1 hover:text-twitter-primary group"
              onClick={handleActionClick}
              aria-label="Reply"
            >
              <MessageCircle size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
              <span className="text-13px">
                {tweet.replyCount > 0 ? tweet.replyCount : ""}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-1 p-1 group ${isRetweeted ? "text-twitter-retweet" : "hover:text-twitter-retweet"}`}
              onClick={handleRetweet}
              aria-label="Retweet"
            >
              <Repeat2 size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
              <span className="text-13px">{retweets > 0 ? retweets : ""}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-1 p-1 group ${isLiked ? "text-twitter-like" : "hover:text-twitter-like"}`}
              onClick={handleLike}
              aria-label="Like"
            >
              <Heart size={18} className={`${isLiked ? "fill-twitter-like" : ""} transform group-hover:scale-110 transition-transform duration-150 ease-in-out`} />
              <span className="text-13px">{likes > 0 ? likes : ""}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1 p-1 hover:text-twitter-primary group"
              onClick={handleActionClick}
              aria-label="Share"
            >
              <Share size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export const TweetCard = React.memo(TweetCardComponent);
