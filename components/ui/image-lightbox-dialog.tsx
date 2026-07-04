"use client";

import Image from "next/image";
import { ModalDialog } from "@/components/ui/modal-dialog";

type ImageLightboxDialogProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

export function ImageLightboxDialog({
  open,
  onClose,
  src,
  alt,
  title,
  width,
  height,
}: ImageLightboxDialogProps) {
  return (
    <ModalDialog open={open} onClose={onClose} title={title}>
      <div className="surface-elevated overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto max-h-[85vh] w-auto max-w-[min(90vw,280px)]"
        />
      </div>
    </ModalDialog>
  );
}
