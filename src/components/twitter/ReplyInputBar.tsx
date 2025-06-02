
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function ReplyInputBar() {
  return (
    <div className="fixed bottom-14 left-0 right-0 bg-twitter-background p-3 border-t border-twitter-divider flex items-center space-x-3 max-w-md mx-auto z-40 md:hidden">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://placehold.co/48x48.png?text=U" alt="User Avatar" data-ai-hint="profile avatar"/>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <Input 
        type="text" 
        placeholder="Tweet your reply" 
        className="flex-1 rounded-full bg-twitter-input-bg border-transparent focus:bg-white focus:border-twitter-primary focus:ring-twitter-primary placeholder-twitter-text-secondary text-sm h-10 px-4"
      />
    </div>
  );
}

