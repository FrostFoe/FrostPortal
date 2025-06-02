
"use client";
import { TopBar } from "@/components/twitter/TopBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { directMessagesData, type Message } from '@/contents/messagesData'; // Import data

export default function MessagesPage() {
  const messages: Message[] = directMessagesData;

  return (
    <Sheet> {/* Sheet for mobile LeftMenu */}
      <div className="flex flex-col min-h-screen">
        
        <TopBar title="Messages" />
        <div className="p-2 border-b border-twitter-divider">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-twitter-text-secondary" />
            <Input type="search" placeholder="Search Direct Messages" className="pl-9 text-sm bg-slate-100 border-slate-200 focus:bg-white" />
          </div>
        </div>
        <main className="flex-grow overflow-y-auto pb-16">
          {messages.map(msg => (
            <div key={msg.id} className={`flex items-start space-x-3 p-4 border-b border-twitter-divider ${msg.unread ? 'bg-twitter-primary/5':''}`}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={msg.avatar} alt={msg.name} data-ai-hint={msg.avatar_data_ai_hint || "user avatar"} />
                <AvatarFallback>{msg.name.substring(0,1)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-twitter-text-primary text-sm">{msg.name}</span>
                    <span className="text-twitter-text-secondary text-sm ml-1">@{msg.handle}</span>
                  </div>
                  <span className="text-twitter-text-secondary text-xs">{msg.time}</span>
                </div>
                <p className={`text-sm ${msg.unread ? 'text-twitter-text-primary font-medium' : 'text-twitter-text-secondary'}`}>{msg.lastMessage}</p>
              </div>
              {msg.unread && <div className="w-2 h-2 bg-twitter-primary rounded-full self-center ml-2"></div>}
            </div>
          ))}
           {messages.length === 0 && <p className="text-center text-twitter-text-secondary p-8">No messages yet.</p>}
        </main>
      </div>
      <SheetContent side="left" className="p-0 w-[280px] bg-twitter-background border-r-0 shadow-xl md:hidden">
        <LeftMenu inSheetContext={true} />
      </SheetContent>
    </Sheet>
  );
}
