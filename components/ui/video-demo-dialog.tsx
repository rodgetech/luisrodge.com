"use client";

import { ModalDialog } from "@/components/ui/modal-dialog";

type VideoDemoDialogProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
};

export function VideoDemoDialog({
  open,
  onClose,
  src,
  title,
}: VideoDemoDialogProps) {
  return (
    <ModalDialog open={open} onClose={onClose} title={`${title} demo`}>
      {open ? (
        <div className="surface-elevated overflow-hidden">
          <video
            src={src}
            controls
            loop
            playsInline
            className="max-h-[90vh] w-auto"
          />
        </div>
      ) : null}
    </ModalDialog>
  );
}
