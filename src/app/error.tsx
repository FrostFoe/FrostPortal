
"use client"; 

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-transparent">
      <h2 className="text-2xl font-bold text-destructive mb-4">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-6">
        We encountered an unexpected issue. Please try again.
      </p>
      <Button
        onClick={
          
          () => reset()
        }
        className="bg-primary text-primary-foreground hover:opacity-90"
      >
        Try again
      </Button>
      <p className="mt-8 text-xs text-muted-foreground">
        Error details (for development): {error.message}
        {error.digest && <span className="block">Digest: {error.digest}</span>}
      </p>
    </div>
  );
}
