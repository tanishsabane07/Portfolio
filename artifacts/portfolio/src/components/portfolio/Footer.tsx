export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 text-center relative">
      <div className="container mx-auto px-6">
        <p className="text-sm font-mono text-muted-foreground">
          © {new Date().getFullYear()} Alex. Engineered with precision.
        </p>
        <p className="text-xs font-mono text-muted-foreground/50 mt-2">
          Press <kbd className="px-1 py-0.5 bg-muted rounded">Ctrl</kbd> + <kbd className="px-1 py-0.5 bg-muted rounded">`</kbd> to initialize console.
        </p>
      </div>
    </footer>
  );
}
