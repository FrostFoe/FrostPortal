import { TopBar } from "@/components/twitter/TopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, UserPlus } from "lucide-react";

export default function TwitterNotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "AI Bot",
      userHandle: "aibot",
      avatar: "https://placehold.co/48x48.png?text=AB",
      content: "liked your tweet: Exploring the possibilities...",
    },
    {
      id: 2,
      type: "follow",
      user: "Dev Rel",
      userHandle: "devrelex",
      avatar: "https://placehold.co/48x48.png?text=DR",
      content: "followed you.",
    },
    {
      id: 3,
      type: "like",
      user: "React Fan",
      userHandle: "reactlover",
      avatar: "https://placehold.co/48x48.png?text=RF",
      content: "liked your tweet: Just setting up my twttr clone...",
    },
  ];

  return (
    <Sheet>
      <div className="flex flex-col min-h-screen">
        <TopBar title="Notifications" />
        <main className="flex-grow overflow-y-auto pb-16">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start space-x-3 p-4 border-b border-twitter-divider"
            >
              {notif.type === "like" && (
                <Heart size={24} className="text-twitter-like mt-1 shrink-0" />
              )}
              {notif.type === "follow" && (
                <UserPlus
                  size={24}
                  className="text-twitter-primary mt-1 shrink-0"
                />
              )}
              <div className="flex-1">
                <Avatar className="h-8 w-8 mb-1">
                  <AvatarImage
                    src={notif.avatar}
                    alt={notif.user}
                    data-ai-hint="user avatar"
                  />
                  <AvatarFallback>{notif.user.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <p className="text-twitter-text-primary text-sm">
                  <span className="font-bold">{notif.user}</span>
                  <span className="text-twitter-text-secondary">
                    {" "}
                    @{notif.userHandle}{" "}
                  </span>
                  {notif.content}
                </p>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <p className="text-center text-twitter-text-secondary p-8">
              No new notifications.
            </p>
          )}
        </main>
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
