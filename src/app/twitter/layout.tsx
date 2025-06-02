import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "A mobile Twitter UI clone.",
};

export default function TwitterAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 flex justify-center items-start min-h-screen twitter-font">
      <div className="w-full max-w-md bg-twitter-background min-h-screen shadow-2xl flex flex-col relative">
        {children}
      </div>
    </div>
  );
}
