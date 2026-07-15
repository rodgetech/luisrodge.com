"use client";

import { ModalDialog } from "@/components/ui/modal-dialog";

type VideoDemoDialogProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  title: string;
};

export function VideoDemoDialog({
  open,
  onClose,
  src,
  poster,
  title,
}: VideoDemoDialogProps) {
  return (
    <ModalDialog open={open} onClose={onClose} title={`${title} demo`}>
      {open ? (
        <div className="surface-elevated overflow-hidden">
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="block h-auto w-[min(92vw,320px)] max-h-[min(85dvh,calc(100dvh-5.5rem))] object-contain"
          />
        </div>
      ) : null}
    </ModalDialog>
  );
}
