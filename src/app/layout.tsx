import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { LeftMenu } from "@/components/twitter/LeftMenu";
import { RightSidebar } from "@/components/twitter/RightSidebar";
import { BottomNav } from "@/components/twitter/BottomNav";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Frostter",
  description: "A mobile Twitter UI clone, now responsive for desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>{/* Font optimization is now handled by next/font */}</head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-twitter-background dark:bg-neutral-900">
            <div className="container mx-auto flex">
              {/* Left Sidebar - Desktop */}
              <aside className="hidden md:flex w-[275px] flex-shrink-0 border-r border-twitter-divider">
                <div className="fixed h-full w-[275px] overflow-y-auto p-3">
                  <LeftMenu />
                </div>
              </aside>

              {/* Center Column (Main Content) */}
              {/* Max width for feed consistency, border-x for desktop */}
              <main className="w-full md:max-w-[600px] min-h-screen border-r border-l border-twitter-divider">
                {children}
              </main>

              {/* Right Sidebar - Desktop */}
              <aside className="hidden lg:flex w-[350px] flex-shrink-0">
                <div className="fixed h-full w-[350px] overflow-y-auto p-3 border-l border-twitter-divider">
                  <RightSidebar />
                </div>
              </aside>
            </div>
            <Toaster />
            {/* BottomNav is handled within its component for md:hidden */}
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
