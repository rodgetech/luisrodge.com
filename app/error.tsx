"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="text-sm text-muted-foreground">
        The page failed to load. Try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-9 items-center justify-center rounded-[8px] bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 outline-none focus-visible:ring-3 focus-visible:ring-ring"
      >
        Try again
      </button>
    </div>
  );
}
