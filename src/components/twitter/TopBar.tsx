
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Bird } from "lucide-react";
import { currentUser } from "@/contents/userData"; // Import current user data

interface TopBarProps {
  title: string;
  rightActionIcon?: React.ElementType;
  onRightActionClick?: () => void;
}

export function TopBar({
  title,
  rightActionIcon: RightActionIcon,
  onRightActionClick,
}: TopBarProps) {
  return (
    <div className="h-14 backdrop-blur-md text-twitter-text-primary px-4 flex items-center justify-between sticky top-0 z-40 border-b border-twitter-divider">
      {/* SheetTrigger for mobile LeftMenu, hidden on desktop */}
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="p-0 h-8 w-8" aria-label="Open menu">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={currentUser.avatarUrl}
              alt={currentUser.name}
              data-ai-hint={currentUser.avatar_data_ai_hint || "profile avatar"}
            />
            <AvatarFallback>{currentUser.name.substring(0,1).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      {/* Placeholder for spacing on desktop if SheetTrigger is hidden */}
      <div className="hidden md:block w-8"></div>

      {title === "Home" ? (
        <Bird size={28} className="text-twitter-primary" />
      ) : (
        <h1 className="text-lg font-bold font-system text-twitter-text-primary">
          {title}
        </h1>
      )}

      {RightActionIcon ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={onRightActionClick}
          className="p-0 h-8 w-8"
          aria-label={title === "Notifications" || title === "Trends for you" ? "Open settings" : "Action"}
        >
          <RightActionIcon size={24} className="text-twitter-icon-gray" />
        </Button>
      ) : (
        <div className="w-8"></div>
      )}
    </div>
  );
}
