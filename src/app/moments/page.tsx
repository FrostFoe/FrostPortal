

import { TopBar } from "@/components/twitter/TopBar";
// BottomNav is now global
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";

export default function MomentsPage() {
  return (
    <Sheet> {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen">
        
        <TopBar title="Moments" />
        <main className="flex-grow overflow-y-auto p-4 pb-16 text-twitter-text-primary">
          <h1 className="text-2xl font-bold">Moments Page</h1>
          <p className="mt-2">User-created or followed Moments would appear here.</p>
        </main>
        {/* BottomNav is now global */}
      </div>
      <SheetContent side="left" className="p-0 w-[280px] bg-twitter-background border-r-0 shadow-xl md:hidden">
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
