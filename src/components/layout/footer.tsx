export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/60 bg-background">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {currentYear} NitroStart. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Powered by Next.js &amp; Netlify. Designed with Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
