
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  FileText,
  BarChart3,
  MapPin,
  Image as ImageIcon,
  Plus,
  Circle,
} from "lucide-react";
import {
  mediaPreviewItemsData,
  userComposeAvatar,
} from "@/contents/composeData"; // Import data

export default function ComposeTweetPage() {
  const [tweetText, setTweetText] = useState("");
  const isTweetButtonDisabled = tweetText.trim().length === 0;

  return (
    <div className="flex flex-col h-screen text-twitter-text-primary overflow-hidden bg-transparent">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-3 border-b border-twitter-divider">
        <Link href="/" passHref>
          <Button
            variant="ghost"
            className="text-twitter-primary text-16px p-0 h-auto hover:bg-transparent"
          >
            Cancel
          </Button>
        </Link>
        <Button
          className={`rounded-full px-4 py-1.5 text-sm font-bold h-8 text-white bg-twitter-primary ${isTweetButtonDisabled ? "opacity-50" : "hover:opacity-90"}`}
          disabled={isTweetButtonDisabled}
        >
          Tweet
        </Button>
      </div>

      {/* Tweet Input Area */}
      <div className="flex-grow flex p-3 space-x-3 overflow-y-auto">
        <Avatar className="h-10 w-10 flex-shrink-0">
          <AvatarImage
            src={userComposeAvatar.src}
            alt={userComposeAvatar.alt}
            data-ai-hint={userComposeAvatar.hint}
          />
          <AvatarFallback>
            {userComposeAvatar.alt.substring(0, 1)}
          </AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="What's happening?"
          className="flex-grow text-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 resize-none min-h-[200px] placeholder-twitter-text-secondary bg-transparent"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
      </div>

      {/* Media Preview (optional, appears above keyboard/toolbar) */}
      <div className="px-3 pb-2 border-b border-twitter-divider">
        <div className="flex space-x-2 overflow-x-auto">
          <button className="flex-shrink-0 h-20 w-20 rounded-lg flex items-center justify-center text-twitter-primary bg-transparent border border-twitter-divider hover:bg-twitter-primary/10" aria-label="Add media from camera">
            <Camera size={32} />
          </button>
          {mediaPreviewItemsData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={80}
                height={80}
                className="object-cover h-full w-full"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="flex items-center justify-between p-3 border-t border-twitter-divider">
        <div className="flex items-center space-x-5">
          <button className="text-twitter-primary hover:text-twitter-primary/80" aria-label="Add image or video">
            <ImageIcon size={24} />
          </button>
          <button className="text-twitter-primary hover:text-twitter-primary/80" aria-label="Add GIF">
            <FileText size={24} />
          </button>
          <button className="text-twitter-primary hover:text-twitter-primary/80" aria-label="Add poll">
            <BarChart3 size={24} />
          </button>
          <button className="text-twitter-primary hover:text-twitter-primary/80" aria-label="Add location">
            <MapPin size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative h-6 w-6">
            <Circle size={24} className="text-twitter-primary/30" />
            {/* This is a simplified progress circle. A real one would be more complex. */}
          </div>
          <div className="h-6 w-px bg-twitter-divider"></div>
          <button className="text-twitter-primary hover:text-twitter-primary/80" aria-label="Add tweet">
            <Plus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
