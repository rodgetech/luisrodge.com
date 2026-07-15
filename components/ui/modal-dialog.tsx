"use client";

import { useEffect, useId, useRef } from "react";

type ModalDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function ModalDialog({
  open,
  onClose,
  title,
  children,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      return;
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 z-[var(--z-modal)] m-0 h-full w-full max-h-none max-w-none border-0 bg-transparent p-0"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="fixed inset-0 cursor-default bg-background/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <h2 id={titleId} className="sr-only">
        {title}
      </h2>

      <button
        type="button"
        onClick={onClose}
        className="fixed top-[max(1rem,env(safe-area-inset-top,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-20 inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Close
      </button>

      <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center p-4 pt-[max(1rem,env(safe-area-inset-top,0px))] pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
        <div
          className="pointer-events-auto max-h-full max-w-full"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </dialog>
  );
}
