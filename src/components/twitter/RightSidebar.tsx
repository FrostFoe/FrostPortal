
"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { trendsData, whoToFollowData } from '@/contents/sidebarData'; // Import data

export function RightSidebar() {
  return (
    <div className="space-y-4 p-1">
      {/* Search Bar */}
      <div className="sticky top-0 py-2 bg-twitter-background z-10">
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-3 h-5 w-5 text-twitter-icon-gray" />
          <Input 
            type="search" 
            placeholder="Search Twitter" 
            className="pl-10 pr-4 h-10 rounded-full bg-twitter-input-bg border-transparent focus:bg-white focus:border-twitter-primary focus:ring-twitter-primary placeholder-twitter-icon-gray text-sm w-full" 
          />
        </div>
      </div>

      {/* Trends for you */}
      <Card className="bg-twitter-content-bg-alt border-twitter-divider rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-twitter-text-primary flex justify-between items-center">
            Trends for you
            <Button variant="ghost" size="icon" className="h-8 w-8 text-twitter-primary">
              <Settings size={20} />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          {trendsData.map((trend, index) => (
            <Link href="#" key={index} className="block p-3 hover:bg-twitter-background/5 dark:hover:bg-slate-700/30 rounded-lg">
              <p className="text-xs text-twitter-text-secondary">{trend.category}</p>
              <p className="font-semibold text-twitter-text-primary">{trend.title}</p>
              <p className="text-xs text-twitter-text-secondary">{trend.tweets}</p>
            </Link>
          ))}
          <Button variant="link" className="text-twitter-primary p-3 text-sm w-full justify-start">Show more</Button>
        </CardContent>
      </Card>

      {/* Who to follow */}
      <Card className="bg-twitter-content-bg-alt border-twitter-divider rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-twitter-text-primary">Who to follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          {whoToFollowData.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-twitter-background/5 dark:hover:bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.data_ai_hint}/>
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-twitter-text-primary hover:underline">{user.name}</p>
                  <p className="text-sm text-twitter-text-secondary">@{user.handle}</p>
                </div>
              </div>
              <Button variant="outline" className="rounded-full text-sm font-bold border-twitter-text-primary text-twitter-text-primary hover:bg-twitter-text-primary/10 px-4 py-1 h-8">
                Follow
              </Button>
            </div>
          ))}
          <Button variant="link" className="text-twitter-primary p-3 text-sm w-full justify-start">Show more</Button>
        </CardContent>
      </Card>
      
      <div className="text-xs text-twitter-text-secondary space-x-2 p-3">
        <Link href="#" className="hover:underline">Terms of Service</Link>
        <Link href="#" className="hover:underline">Privacy Policy</Link>
        <Link href="#" className="hover:underline">Cookie Policy</Link>
        <Link href="#" className="hover:underline">Accessibility</Link>
        <Link href="#" className="hover:underline">Ads info</Link>
        <Link href="#" className="hover:underline">More ...</Link>
        <span>© {new Date().getFullYear()} X Corp.</span>
      </div>
    </div>
  );
}
