
"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

export interface ReplyType {
  id: string;
  user: {
    name: string;
    handle: string;
    avatarUrl: string;
    avatar_data_ai_hint?: string;
  };
  replyingTo: string; // e.g., "@karennne"
  content: string;
  timestamp: string; // e.g., "2d"
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  imageAttachmentUrl?: string;
  image_data_ai_hint?: string;
  isLastReply?: boolean; // To conditionally render the "1 more reply" or adjust connector line
}

interface ReplyCardProps {
  reply: ReplyType;
  showConnector: boolean;
}

const FormattedContent: React.FC<{ text: string }> = ({ text }) => {
  const parts = text
    .split(/(\B#\w+\b|\B@\w+\b|https?:\/\/\S+)/g)
    .filter((part) => part);
  return (
    <>
      {parts.map((part, index) => {
        if (
          part.startsWith("#") ||
          part.startsWith("@") ||
          part.startsWith("http")
        ) {
          return (
            <span key={index} className="text-twitter-primary hover:underline">
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

const ReplyCardComponent: React.FC<ReplyCardProps> = ({
  reply,
  showConnector,
}) => {
  // For interaction states, if needed
  // const [isLiked, setIsLiked] = useState(false);
  // const [likes, setLikes] = useState(reply.likeCount);

  return (
    <div className="flex space-x-3 px-4 pt-3 relative">
      {showConnector && (
        <div className="absolute left-[34px] top-0 bottom-0 w-0.5 bg-twitter-divider -translate-x-1/2"></div>
      )}
      <div className="relative z-10 flex-shrink-0">
        {showConnector && (
          <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 h-full bg-twitter-divider"></div>
        )}
        <Avatar className="h-10 w-10">
          {" "}
          {/* Smaller avatar for replies as per some designs, check image */}
          <AvatarImage
            src={reply.user.avatarUrl}
            alt={reply.user.name}
            data-ai-hint={reply.user.avatar_data_ai_hint || "user avatar"}
          />
          <AvatarFallback>{reply.user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 pb-3 border-b border-twitter-divider">
        <div className="flex items-center space-x-1">
          <span className="font-bold text-twitter-text-primary text-15px">
            {reply.user.name}
          </span>
          <span className="text-twitter-text-secondary text-14px">
            @{reply.user.handle}
          </span>
          <span className="text-twitter-text-secondary text-14px">
            &middot;
          </span>
          <span className="text-twitter-text-secondary text-14px">
            {reply.timestamp}
          </span>
        </div>
        <p className="text-twitter-text-secondary text-15px mt-0.5">
          Replying to{" "}
          <span className="text-twitter-primary">{reply.replyingTo}</span>
        </p>
        <p className="text-twitter-text-primary text-15px mt-1 whitespace-pre-wrap">
          <FormattedContent text={reply.content} />
        </p>
        {reply.imageAttachmentUrl && (
          <div className="mt-2 rounded-xl overflow-hidden border border-twitter-divider">
            <Image
              src={reply.imageAttachmentUrl}
              alt="Reply image"
              width={450}
              height={250}
              className="object-cover w-full"
              data-ai-hint={reply.image_data_ai_hint || "reply image"}
            />
          </div>
        )}
        <div className="flex justify-between items-center mt-3 text-twitter-text-secondary max-w-xs">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 p-1 hover:text-twitter-primary rounded-full group"
          >
            <MessageCircle size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
            <span className="text-13px">
              {reply.replyCount > 0 ? reply.replyCount : ""}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 p-1 hover:text-twitter-retweet rounded-full group"
          >
            <Repeat2 size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
            <span className="text-13px">
              {reply.retweetCount > 0 ? reply.retweetCount : ""}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 p-1 hover:text-twitter-like rounded-full group"
          >
            <Heart size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" /> {/* Add fill logic if needed */}
            <span className="text-13px">
              {reply.likeCount > 0 ? reply.likeCount : ""}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 p-1 hover:text-twitter-primary rounded-full group"
          >
            <Share size={18} className="transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ReplyCard = React.memo(ReplyCardComponent);
