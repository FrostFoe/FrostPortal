
import { TopBar } from "@/components/twitter/TopBar";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings and privacy",
};

export default function SettingsPage() {
  return (
    <Sheet>
      {" "}
      
      <div className="flex flex-col min-h-screen">
        <TopBar title="Settings and privacy" />
        <main className="flex-grow overflow-y-auto p-4 pb-16 text-twitter-text-primary">
          <h1 className="text-2xl font-bold">Settings and privacy</h1>
          <p className="mt-2">
            Various application settings would be configured here.
          </p>
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
