import { TopBar } from "@/components/twitter/TopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export default function TwitterSearchPage() {
  return (
    <Sheet>
      <div className="flex flex-col min-h-screen">
        <div className="md:hidden">
          <TopBar title="Search" />
        </div>
        <main className="flex-grow overflow-y-auto p-4 pb-16 text-twitter-text-primary">
          <div className="relative mb-4 md:hidden">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-twitter-text-secondary" />
            <Input
              type="search"
              placeholder="Search Twitter"
              className="pl-10 bg-slate-100 border-slate-200 focus:bg-white"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Trends for you (Legacy)</h2>
          <p className="mt-2">Main search page at /search.</p>
          <div className="space-y-3 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <p className="text-twitter-text-secondary text-xs">
                  Trending in YourCountry
                </p>
                <p className="font-bold text-twitter-text-primary">
                  #PlaceholderTrend{i}
                </p>
                <p className="text-twitter-text-secondary text-xs">
                  10.{i}K Tweets
                </p>
              </div>
            ))}
          </div>
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
