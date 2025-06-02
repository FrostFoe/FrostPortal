
import Link from "next/link";
import Image from "next/image";

import { TopBar } from "@/components/twitter/TopBar";
// BottomNav is now global
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function SpacesPage() {
  return (
    <Sheet>
      {" "}
      {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen">
        <TopBar title="Spaces" />
        <main className="flex-grow overflow-y-auto p-4 pb-16 text-twitter-text-primary flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Spaces</h1>
          <p className="text-twitter-text-secondary mb-6">
            Audio conversations happen here.
          </p>
          <div className="rounded-lg mb-6 overflow-hidden">
            <Image
              src="https://placehold.co/300x200.png"
              alt="Spaces Illustration"
              width={300}
              height={200}
              data-ai-hint="audio wave"
            />
          </div>
          <Button className="text-white font-bold rounded-full px-6 hover:opacity-90">
            Explore Spaces
          </Button>
        </main>
        {/* FAB hidden on medium screens and up */}
        <Link href="/compose/tweet" passHref className="md:hidden">
          <Button
            asChild
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:opacity-90 z-50"
            size="icon"
            aria-label="Start a Space"
          >
            <Plus size={28} />
          </Button>
        </Link>
        {/* BottomNav is now global */}
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
