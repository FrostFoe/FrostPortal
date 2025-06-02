
"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Repeat2, Heart, Share, Repeat } from "lucide-react"; // Added Repeat for retweeted by icon

export interface DetailedTweetType {
  id: string;
  retweetedBy?: string;
  user: {
    name: string;
    handle: string;
    avatarUrl: string;
    avatar_data_ai_hint?: string;
  };
  content: string;
  detailedTimestamp: string; // e.g., "09:28 · 2/21/20"
  source: string; // e.g., "Twitter Web App"
  retweetCount: number;
  likeCount: number;
  imageAttachmentUrl?: string;
  image_data_ai_hint?: string;
}

interface DetailedTweetViewProps {
  tweet: DetailedTweetType;
}

export function DetailedTweetView({ tweet }: DetailedTweetViewProps) {
  // For interaction states, if needed in future
  // const [isLiked, setIsLiked] = useState(false);
  // const [likes, setLikes] = useState(tweet.likeCount);

  return (
    <div className="p-4 border-b border-twitter-divider font-system bg-transparent">
      {tweet.retweetedBy && (
        <div className="flex items-center text-xs text-twitter-text-secondary mb-2 ml-6">
          <Repeat size={14} className="mr-2" />
          <span>{tweet.retweetedBy} Retweeted</span>
        </div>
      )}
      <div className="flex items-start space-x-3">
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage
            src={tweet.user.avatarUrl}
            alt={tweet.user.name}
            data-ai-hint={tweet.user.avatar_data_ai_hint || "user avatar"}
          />
          <AvatarFallback>{tweet.user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-bold text-twitter-text-primary text-16px">
              {tweet.user.name}
            </span>
            <span className="text-twitter-text-secondary text-14px">
              @{tweet.user.handle}
            </span>
          </div>
        </div>
        {/* Dropdown icon placeholder if needed */}
        {/* <ChevronDown size={20} className="text-twitter-text-secondary" /> */}
      </div>

      <p className="text-twitter-text-primary text-xl mt-3 whitespace-pre-wrap">
        {tweet.content}
      </p>

      {tweet.imageAttachmentUrl && (
        <div className="mt-3 rounded-xl overflow-hidden border border-twitter-divider">
          <Image
            src={tweet.imageAttachmentUrl}
            alt="Tweet image"
            width={500}
            height={300}
            className="object-cover w-full"
            data-ai-hint={tweet.image_data_ai_hint || "content image"}
          />
        </div>
      )}

      <div className="mt-3 text-sm text-twitter-text-secondary">
        <span>{tweet.detailedTimestamp}</span>
        <span className="mx-1">&middot;</span>
        <span className="text-twitter-primary hover:underline cursor-pointer">
          {tweet.source}
        </span>
      </div>

      {(tweet.retweetCount > 0 || tweet.likeCount > 0) && (
        <div className="mt-3 py-3 border-t border-b border-twitter-divider flex space-x-4">
          {tweet.retweetCount > 0 && (
            <p className="text-sm">
              <span className="font-bold text-twitter-text-primary">
                {tweet.retweetCount}
              </span>
              <span className="text-twitter-text-secondary ml-1">Retweets</span>
            </p>
          )}
          {tweet.likeCount > 0 && (
            <p className="text-sm">
              <span className="font-bold text-twitter-text-primary">
                {tweet.likeCount}
              </span>
              <span className="text-twitter-text-secondary ml-1">Likes</span>
            </p>
          )}
        </div>
      )}

      <div className="flex justify-around items-center mt-1 text-twitter-text-secondary py-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-twitter-text-secondary hover:text-twitter-primary rounded-full w-10 h-10"
          aria-label="Reply"
        >
          <MessageCircle size={22} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-twitter-text-secondary hover:text-twitter-retweet rounded-full w-10 h-10"
          aria-label="Retweet"
        >
          <Repeat2 size={22} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-twitter-text-secondary hover:text-twitter-like rounded-full w-10 h-10"
          aria-label="Like"
        >
          <Heart size={22} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-twitter-text-secondary hover:text-twitter-primary rounded-full w-10 h-10"
          aria-label="Share"
        >
          <Share size={22} />
        </Button>
      </div>
    </div>
  );
}
