"use client";

import Script from "next/script";
import { useEffect } from "react";

const META_PIXEL_ID = "1128704139822062";

type MetaEventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (
      command: "track" | "trackCustom",
      eventName: string,
      parameters?: MetaEventParameters,
    ) => void;
  }
}

export function trackMetaEvent(
  eventName: string,
  parameters?: MetaEventParameters,
) {
  window.fbq?.("track", eventName, parameters);
}

export function MetaPixel() {
  useEffect(() => {
    function trackContactClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;

      const href = link.href;
      if (href.includes("wa.me")) {
        trackMetaEvent("Contact", { contact_method: "whatsapp" });
      } else if (href.includes("cal.com")) {
        trackMetaEvent("Contact", { contact_method: "calendar" });
      }
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
