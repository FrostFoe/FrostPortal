
"use client";
import Link from "next/link";

import { TopBar } from "@/components/twitter/TopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Settings, Plus } from "lucide-react";
// No specific page title metadata for client components in App Router by default,
// title will be inherited from layout or set via TopBar if needed.

export default function SearchPage() {
  return (
    <Sheet>
      {" "}
      {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen bg-transparent">
        {/* Hide TopBar on desktop if RightSidebar provides search */}
        <div className="md:hidden">
          <TopBar
            title="Trends for you"
            rightActionIcon={Settings}
            onRightActionClick={() => { /* Placeholder for settings action */ }}
          />
        </div>

        {/* Search input within page content on mobile, hidden on desktop if global search exists */}
        <div className="p-3 border-b border-twitter-divider md:hidden">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 h-5 w-5 text-twitter-icon-gray" />
            <Input
              type="search"
              placeholder="Search Twitter"
              className="pl-10 pr-10 h-10 rounded-full border-transparent focus:border-twitter-primary focus:ring-twitter-primary placeholder-twitter-icon-gray bg-muted/50 dark:bg-muted/20"
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
            className="text-white font-bold text-base rounded-full px-6 py-2 h-auto hover:opacity-90 bg-twitter-primary"
            onClick={() => { /* Placeholder for change location action */ }}
          >
            Change location
          </Button>
        </main>

        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:opacity-90 z-50 bg-twitter-primary"
            size="icon"
            aria-label="Compose Action"
          >
            <Plus size={28} />
          </Button>
        </Link>
      </div>
      <SheetContent
        side="left"
        className="p-0 w-[280px] border-r-0 shadow-xl md:hidden bg-twitter-background"
      >
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
