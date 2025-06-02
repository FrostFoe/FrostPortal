
"use client";
import { useState } from "react";
import Link from "next/link";

import { TopBar } from "@/components/twitter/TopBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import {
  NotificationItemCard,
  type NotificationItem,
} from "@/components/twitter/NotificationItemCard";
import { Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initialNotificationsData } from "@/contents/notificationsData"; // Import data

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "mentions">("all");
  // In a real app, notifications would likely be fetched or managed via a global state/context
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    initialNotificationsData,
  );

  // Filter logic for tabs would go here if needed
  const displayedNotifications = notifications;

  return (
    <Sheet>
      {" "}
      {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen">
        <TopBar
          title="Notifications"
          rightActionIcon={Settings}
          onRightActionClick={() => console.log("Top bar settings clicked")}
        />

        <div className="h-12 flex border-b border-twitter-divider">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 h-full flex items-center justify-center text-sm font-semibold relative transition-colors duration-150
                        ${activeTab === "all" ? "text-twitter-primary" : "text-twitter-text-secondary hover:opacity-80"}`}
          >
            All
            {activeTab === "all" && (
              <div className="absolute bottom-0 h-[2px] w-14 bg-twitter-primary rounded-full"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("mentions")}
            className={`flex-1 h-full flex items-center justify-center text-sm font-semibold relative transition-colors duration-150
                        ${activeTab === "mentions" ? "text-twitter-primary" : "text-twitter-text-secondary hover:opacity-80"}`}
          >
            Mentions
            {activeTab === "mentions" && (
              <div className="absolute bottom-0 h-[2px] w-20 bg-twitter-primary rounded-full"></div>
            )}
          </button>
        </div>

        <main className="flex-grow overflow-y-auto pb-16">
          {displayedNotifications.length > 0 ? (
            displayedNotifications.map((notif) => (
              <NotificationItemCard key={notif.id} notification={notif} />
            ))
          ) : (
            <p className="text-center text-twitter-text-secondary p-8 mt-4">
              No new notifications{" "}
              {activeTab === "mentions" ? "or mentions " : ""}yet.
            </p>
          )}
        </main>

        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:opacity-90 z-50"
            size="icon"
            aria-label="Compose Action"
          >
            <Plus size={28} />
          </Button>
        </Link>
      </div>
      <SheetContent
        side="left"
        className="p-0 w-[280px] border-r-0 shadow-xl md:hidden"
      >
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
