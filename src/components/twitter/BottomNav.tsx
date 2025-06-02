"use client";
import Link from "next/link";
import { Home, Search, Bell, Mail, Podcast } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function BottomNav() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    {
      href: "/notifications",
      icon: Bell,
      label: "Notifications",
      badgeCount: 3,
    },
    { href: "/messages", icon: Mail, label: "Messages" },
    { href: "/spaces", icon: Podcast, label: "Spaces" },
  ];

  // md:hidden will hide this component on medium screens and larger
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 bg-twitter-background border-t border-twitter-divider flex items-center justify-around font-system max-w-md mx-auto z-50 md:hidden">
      {navItems.map((item) => {
        const isActive = isClient && item.href === pathname;
        const IconComponent = item.icon;
        return (
          <Link
            href={item.href}
            key={item.label}
            className="flex-1 flex flex-col justify-center items-center h-full relative group"
          >
            <div className="relative">
              <IconComponent
                size={24}
                className={
                  isActive
                    ? "text-twitter-primary"
                    : "text-twitter-text-secondary group-hover:text-twitter-primary/80"
                }
                fill={
                  isActive && (item.icon === Home || item.icon === Bell)
                    ? "currentColor"
                    : "none"
                }
              />
              {item.badgeCount && item.label === "Notifications" && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-2.5 p-0 h-4 w-4 flex items-center justify-center text-xs bg-twitter-primary text-white"
                >
                  {item.badgeCount > 0 && "•••"}
                </Badge>
              )}
            </div>
            {isActive && (
              <div className="absolute bottom-[6px] h-[3px] w-6 bg-twitter-primary rounded-full"></div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
