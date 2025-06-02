
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Heart } from "lucide-react"; 

export interface NotificationItem {
  id: string;
  avatarUrl: string;
  userName: string;
  isVerified?: boolean;
  timestamp: string;
  source?: string; 
  contentPreview?: string; 
  mainText: string; 
  iconType?: "like" | "follow" | "mention" | "reply"; 
  data_ai_hint?: string; 
}

interface NotificationItemCardProps {
  notification: NotificationItem;
}


const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text
    .split(/(\*\*.*?\*\*|##.*?##|@@.*?@@)/g)
    .filter((part) => part);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-bold">
              {part.substring(2, part.length - 2)}
            </strong>
          );
        }
        if (part.startsWith("##") && part.endsWith("##")) {
          
          return (
            <span key={index} className="text-twitter-primary">
              {part.substring(2, part.length - 2)}
            </span>
          );
        }
        if (part.startsWith("@@") && part.endsWith("@@")) {
          
          return (
            <span key={index} className="text-twitter-primary underline">
              {part.substring(2, part.length - 2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

const NotificationItemCardComponent: React.FC<NotificationItemCardProps> = ({
  notification,
}) => {
  return (
    <div className="flex space-x-3 p-4 border-b border-twitter-divider transition-colors duration-150 bg-transparent">
      <div className="w-8 flex justify-end pt-1">
        {notification.iconType === "like" && (
          <Heart size={20} className="text-twitter-like fill-current" />
        )}
        
      </div>
      <div className="flex-1">
        <Avatar className="h-8 w-8 mb-1">
          <AvatarImage
            src={notification.avatarUrl}
            alt={notification.userName}
            data-ai-hint={notification.data_ai_hint || "user avatar"}
          />
          <AvatarFallback>
            {notification.userName.substring(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex items-center space-x-1 mb-0.5">
          <span className="font-bold text-twitter-text-primary text-sm">
            {notification.userName}
          </span>
          {notification.isVerified && (
            <BadgeCheck
              size={16}
              className="text-twitter-primary fill-current"
            />
          )}
          {notification.source && (
            <span className="text-twitter-text-secondary text-sm">
              {notification.source}
            </span>
          )}
          <span className="text-twitter-icon-gray text-xs">
            &middot; {notification.timestamp}
          </span>
        </div>

        <p className="text-twitter-text-primary text-sm leading-relaxed">
          <FormattedText text={notification.mainText} />
        </p>

        {notification.contentPreview && (
          <p className="text-twitter-text-secondary text-sm mt-1 border-l-2 border-twitter-divider pl-2">
            {notification.contentPreview}
          </p>
        )}
      </div>
    </div>
  );
};

export const NotificationItemCard = React.memo(NotificationItemCardComponent);
