
"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";
import {
  User,
  List,
  Hash,
  Bookmark,
  Zap, // Moments
  Settings,
  HelpCircle,
  Sun,
  QrCode,
  Moon,
  Feather, // For Tweet button
  Home,    // Added
  Search,  // Added (for Explore)
  Bell,    // Added
  Mail,    // Added
  Podcast, // Added (for Spaces)
  Bird,    // Added (for Logo)
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { currentUser } from "@/contents/userData"; // Import data

const mainMenuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Explore", icon: Search },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { href: "/lists", label: "Lists", icon: List },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/topics", label: "Topics", icon: Hash },
  { href: "/moments", label: "Moments", icon: Zap },
  { href: "/spaces", label: "Spaces", icon: Podcast },
];

const bottomMenuItems = [
  { href: "/settings", label: "Settings and privacy", icon: Settings },
  { href: "/help", label: "Help Center", icon: HelpCircle },
];

interface LeftMenuProps {
  inSheetContext?: boolean;
}

export function LeftMenu({ inSheetContext = false }: LeftMenuProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-full bg-twitter-background text-twitter-text-primary font-system">
      {/* Logo for desktop */}
      <div className="p-3 hidden md:block">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-twitter-primary/10 rounded-full">
            <Bird size={30} className="text-twitter-primary" />
          </Button>
        </Link>
      </div>

      {/* User Info - only in Sheet context (mobile) for this condensed version */}
      {inSheetContext && (
         <div className="p-4 space-y-2 border-b border-twitter-divider">
            <Avatar className="h-12 w-12">
            <AvatarImage
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                data-ai-hint={currentUser.avatar_data_ai_hint}
            />
            <AvatarFallback>{currentUser.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
            <p className="font-bold text-18px">{currentUser.name}</p>
            <p className="text-twitter-text-secondary text-14px">
                @{currentUser.handle}
            </p>
            </div>
            <div className="flex space-x-4 text-twitter-text-secondary text-14px">
            <p>
                <span className="text-twitter-text-primary font-semibold">
                {currentUser.followingCount}
                </span>{" "}
                Following
            </p>
            <p>
                <span className="text-twitter-text-primary font-semibold">
                {currentUser.followersCount}
                </span>{" "}
                Followers
            </p>
            </div>
        </div>
      )}


      <nav className="flex-grow py-2">
        {mainMenuItems.map((item) => {
          const linkContent = (
            <Link href={item.href} passHref>
              <Button
                variant="ghost"
                className="w-full justify-start h-[55px] text-lg px-4 text-twitter-text-primary hover:bg-twitter-primary/10 rounded-full"
              >
                <item.icon size={26} className="mr-4" />
                <span className="font-medium">{item.label}</span>
              </Button>
            </Link>
          );

          if (inSheetContext) {
            return (
              <SheetClose asChild key={item.label}>
                {linkContent}
              </SheetClose>
            );
          }
          return <div key={item.label}>{linkContent}</div>;
        })}

        {!inSheetContext && (
          <div className="px-3 mt-4 hidden md:block">
            <Link href="/compose/tweet" passHref>
              <Button className="bg-twitter-primary text-white rounded-full h-12 w-full font-bold text-lg hover:bg-twitter-primary/90">
                <Feather size={20} className="mr-2 hidden" /> {/* Icon mostly for mobile consistency, can hide on desktop text button */}
                <span>Tweet</span>
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* User account popover for desktop - placed at the bottom */}
      {!inSheetContext && (
        <div className="mt-auto p-3 border-t border-twitter-divider">
           <Button variant="ghost" className="w-full justify-start h-16 text-left p-2 hover:bg-twitter-primary/10 rounded-full">
            <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    data-ai-hint={currentUser.avatar_data_ai_hint}
                />
                <AvatarFallback>{currentUser.name.substring(0,1)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
                <p className="font-bold text-sm text-twitter-text-primary">{currentUser.name}</p>
                <p className="text-xs text-twitter-text-secondary">@{currentUser.handle}</p>
            </div>
            {/* Add DotsHorizontalIcon or similar for popover trigger if needed */}
           </Button>
        </div>
      )}


      {/* Mobile Sheet Specific Footer */}
      {inSheetContext && (
        <>
          <Separator className="my-2 bg-twitter-divider" />
          {bottomMenuItems.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-[55px] text-16px px-4 text-twitter-text-primary hover:bg-twitter-primary/10"
                >
                  <item.icon size={24} className="mr-4" />
                  {item.label}
                </Button>
              </Link>
            </SheetClose>
          ))}
          <div className="p-4 flex justify-between items-center border-t border-twitter-divider">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={24} className="text-twitter-text-primary" />
              ) : (
                <Moon size={24} className="text-twitter-text-primary" />
              )}
            </Button>
            <Button variant="ghost" size="icon" aria-label="QR Code">
              <QrCode size={24} className="text-twitter-primary" />
            </Button>
          </div>
        </>
      )}

      {/* Desktop Fixed Sidebar Footer - Settings and Help are now part of main nav or could be in a "More" popover */}
      {/* This specific footer section can be removed if Settings/Help are integrated above or in a popover */}
      {/* For now, let's keep it if they are not in mainDesktopMenuItems */}
       {!inSheetContext && !mainMenuItems.find(item => item.href === "/settings") && (
        <div className={`mt-auto p-3 ${inSheetContext ? "" : "border-t border-twitter-divider"}`}>
          {bottomMenuItems.map(item => (
             <Link href={item.href} passHref key={item.label}>
                <Button
                variant="ghost"
                className="w-full justify-start h-[55px] text-16px px-4 text-twitter-text-primary hover:bg-twitter-primary/10"
                >
                <item.icon size={24} className="mr-4" /> {item.label}
                </Button>
            </Link>
          ))}
          {/* Desktop theme toggle could go here or in a user popover */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-full justify-start h-[55px] text-16px px-4 text-twitter-text-primary hover:bg-twitter-primary/10"
            >
              {theme === "dark" ? (
                <Sun size={24} className="mr-4" />
              ) : (
                <Moon size={24} className="mr-4" />
              )}
              Toggle Theme
            </Button>
        </div>
      )}
    </div>
  );
}

