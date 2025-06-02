"use client";
import Link from "next/link";

import { TopBar } from "@/components/twitter/TopBar";
// BottomNav is now global
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Settings, Plus } from "lucide-react";

export default function SearchPage() {
  return (
    <Sheet>
      {" "}
      {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen bg-twitter-background">
        {/* Hide TopBar on desktop if RightSidebar provides search */}
        <div className="md:hidden">
          <TopBar
            title="Trends for you"
            rightActionIcon={Settings}
            onRightActionClick={() => console.log("Top bar settings clicked")}
          />
        </div>

        {/* Search input within page content on mobile, hidden on desktop if global search exists */}
        <div className="p-3 border-b border-twitter-divider md:hidden">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 h-5 w-5 text-twitter-icon-gray" />
            <Input
              type="search"
              placeholder="Search Twitter"
              className="pl-10 pr-10 h-10 rounded-full bg-twitter-input-bg border-transparent focus:bg-white focus:border-twitter-primary focus:ring-twitter-primary placeholder-twitter-icon-gray text-sm"
            />
            <Settings className="absolute right-3 h-5 w-5 text-twitter-icon-gray" />
          </div>
        </div>

        <main className="flex-grow overflow-y-auto p-4 pb-16 flex flex-col justify-center items-center text-center">
          {/* Desktop might show trends here directly, or rely on RightSidebar */}
          <h2 className="text-xl font-bold text-twitter-text-primary mb-2">
            No new trends for you
          </h2>
          <p className="text-twitter-text-secondary text-sm mb-6 max-w-xs">
            It seems like there's not a lot to show you right now, but you can
            see trends for other areas.
          </p>
          <Button
            className="bg-twitter-primary hover:bg-twitter-primary/90 text-white font-bold text-base rounded-full px-6 py-2 h-auto"
            onClick={() => console.log("Change location clicked")}
          >
            Change location
          </Button>
        </main>

        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            asChild
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-twitter-primary text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:bg-twitter-primary/90 z-50"
            size="icon"
            aria-label="Compose Action"
          >
            <Plus size={28} />
          </Button>
        </Link>

        {/* BottomNav is now global */}
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
