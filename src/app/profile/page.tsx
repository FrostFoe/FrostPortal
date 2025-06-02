
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ProfileTopBar } from "@/components/twitter/ProfileTopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TweetCard, type Tweet } from "@/components/twitter/TweetCard";
import { Feather, Link2, CalendarDays } from "lucide-react";
import { userProfileData, profileTweetsData } from "@/contents/profileData"; 


type ProfileTab = "Tweets" | "Tweets & replies" | "Media" | "Likes";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("Tweets & replies");
  const [tweets, setTweets] = useState<Tweet[]>(profileTweetsData);
  const userProfile = userProfileData;

  const tabs: ProfileTab[] = ["Tweets", "Tweets & replies", "Media", "Likes"];

  return (
    <Sheet>
      {" "}
      
      <div className="flex flex-col min-h-screen">
        <ProfileTopBar title={userProfile.name} />

        <main className="flex-grow overflow-y-auto pb-16">
          {userProfile.headerImageUrl && (
            <div className="h-40 sm:h-48">
              <Image
                src={userProfile.headerImageUrl}
                alt="Profile header"
                width={600}
                height={200}
                className="w-full h-full object-cover"
                data-ai-hint={userProfile.header_data_ai_hint}
                priority
              />
            </div>
          )}

          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <Avatar
                className={`h-20 w-20 border-4 border-transparent ${userProfile.headerImageUrl ? "-mt-12" : "mt-2"}`}
              >
                <AvatarImage
                  src={userProfile.avatarUrl}
                  alt={userProfile.name}
                  data-ai-hint={userProfile.avatar_data_ai_hint}
                />
                <AvatarFallback>
                  {userProfile.name.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                className="rounded-full px-4 py-1.5 text-sm font-bold border-twitter-primary text-twitter-primary hover:opacity-90"
              >
                Edit profile
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-bold text-twitter-text-primary">
                {userProfile.name}
              </h2>
              <p className="text-sm text-twitter-text-secondary">
                @{userProfile.handle}
              </p>
            </div>

            <p className="text-twitter-text-primary my-3 text-sm">
              {userProfile.bio}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-twitter-text-secondary mb-3">
              {userProfile.website && (
                <div className="flex items-center space-x-1">
                  <Link2 size={14} />
                  <a
                    href={`https://${userProfile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-twitter-primary hover:underline"
                  >
                    {userProfile.website}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <CalendarDays size={14} />
                <span>{userProfile.joinedDate}</span>
              </div>
            </div>

            <div className="flex space-x-4 text-sm mb-4">
              <p>
                <span className="font-bold text-twitter-text-primary">
                  {userProfile.followingCount}
                </span>{" "}
                <span className="text-twitter-text-secondary">Following</span>
              </p>
              <p>
                <span className="font-bold text-twitter-text-primary">
                  {userProfile.followersCount}
                </span>{" "}
                <span className="text-twitter-text-secondary">Followers</span>
              </p>
            </div>
          </div>

          <div className="border-b border-twitter-divider flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center text-sm relative focus:outline-none
                  ${activeTab === tab ? "text-twitter-primary font-semibold" : "text-twitter-text-secondary hover:opacity-80"}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-twitter-primary mx-auto w-1/2"></div>
                )}
              </button>
            ))}
          </div>

          <div>
            {tweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))}
            {tweets.length === 0 && (
              <p className="text-center text-twitter-text-secondary p-8 mt-4">
                No tweets to show in this tab.
              </p>
            )}
          </div>
        </main>

        
        <Link href="/compose/tweet" passHref>
          <Button
            className="fixed bottom-20 right-4 h-14 w-14 rounded-full text-white shadow-[0px_2px_6px_rgba(0,0,0,0.2)] hover:opacity-90 z-50 md:hidden bg-twitter-primary"
            size="icon"
            aria-label="Compose Tweet"
          >
            <Feather size={28} />
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
