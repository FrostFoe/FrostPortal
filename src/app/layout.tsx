
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { RightSidebar } from "@/components/twitter/RightSidebar";
import { BottomNav } from "@/components/twitter/BottomNav";
import AnimatedSpaceBackground from "@/components/special/AnimatedSpaceBackground";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Frostter",
    default: "Frostter - A new social experience",
  },
  description: "Frostter: A modern, responsive social media interface built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className={`${inter.className} antialiased bg-transparent`}>
        <ThemeProvider>
          <div className="min-h-screen relative">
            <AnimatedSpaceBackground />
            <div className="container mx-auto flex relative z-0">
              {/* Left Sidebar - Desktop */}
              <aside className="hidden md:flex w-[275px] flex-shrink-0 border-r border-twitter-divider bg-transparent">
                <div className="fixed h-full w-[275px] overflow-y-auto p-3">
                  <LeftMenu />
                </div>
              </aside>

              {/* Center Column (Main Content) */}
              <main className="w-full md:max-w-[600px] min-h-screen border-r border-l border-twitter-divider bg-transparent">
                {children}
              </main>

              {/* Right Sidebar - Desktop */}
              <aside className="hidden lg:flex w-[350px] flex-shrink-0 bg-transparent">
                <div className="fixed h-full w-[350px] overflow-y-auto p-3 border-l border-twitter-divider">
                  <RightSidebar />
                </div>
              </aside>
            </div>
            <Toaster />
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
