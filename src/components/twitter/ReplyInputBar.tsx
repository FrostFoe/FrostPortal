
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { currentUser } from "@/contents/userData"; 

export function ReplyInputBar() {
  return (
    <div className="fixed bottom-14 left-0 right-0 p-3 border-t border-twitter-divider flex items-center space-x-3 max-w-md mx-auto z-40 md:hidden bg-transparent">
      <Avatar className="h-8 w-8">
        <AvatarImage
          src={currentUser.avatarUrl}
          alt={currentUser.name}
          data-ai-hint={currentUser.avatar_data_ai_hint || "profile avatar"}
        />
        <AvatarFallback>{currentUser.name.substring(0,1).toUpperCase()}</AvatarFallback>
      </Avatar>
      <Input
        type="text"
        placeholder="Tweet your reply"
        aria-label="Tweet your reply"
        className="flex-1 rounded-full border-transparent focus:border-twitter-primary focus:ring-twitter-primary placeholder-twitter-text-secondary text-sm h-10 px-4 bg-muted/50 dark:bg-muted/20"
      />
    </div>
  );
}
