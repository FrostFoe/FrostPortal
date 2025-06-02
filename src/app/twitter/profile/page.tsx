

import { TopBar } from "@/components/twitter/TopBar"; // Assuming ProfileTopBar might be used or TopBar adapted
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
// Minimal content for this duplicate page, real profile is at /app/profile
export default function TwitterProfilePage() {
  return (
    <Sheet>
      <div className="flex flex-col min-h-screen">
        
        <TopBar title="Profile" /> {/* Using generic TopBar */}
        <main className="flex-grow overflow-y-auto p-4 pb-16 text-twitter-text-primary">
          <h1 className="text-2xl font-bold">Profile Page (Legacy)</h1>
          <p className="mt-2">This is a placeholder profile page. Main profile at /profile.</p>
        </main>
      </div>
      <SheetContent side="left" className="p-0 w-[280px] bg-twitter-background border-r-0 shadow-xl md:hidden">
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
