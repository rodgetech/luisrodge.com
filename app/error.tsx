"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <h1 className="font-serif text-lg font-semibold text-foreground">
        Something went wrong
      </h1>
      <p className="text-sm text-muted-foreground">
        The page failed to load. Try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Try again
      </button>
    </div>
  );
}
