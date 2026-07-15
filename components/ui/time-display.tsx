"use client";

import { useEffect, useState } from "react";

type TimeDisplayProps = {
  timeZone: string;
};

export function TimeDisplay({ timeZone }: TimeDisplayProps) {
  const [time, setTime] = useState<string | null>(null);
  const [relative, setRelative] = useState<string>("Belize time");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeInTz = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setTime(timeInTz);

      const tzHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          hour12: false,
        }).format(now),
        10
      );

      const localHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          hour12: false,
        }).format(now),
        10
      );

      let diffHours = tzHour - localHour;

      if (diffHours > 12) diffHours -= 24;
      if (diffHours < -12) diffHours += 24;

      if (diffHours === 0) {
        setRelative("same as you");
      } else if (diffHours > 0) {
        setRelative(`${diffHours}h ahead of you`);
      } else {
        setRelative(`${Math.abs(diffHours)}h behind you`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [timeZone]);

  if (time === null) {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <span className="tabular-nums text-muted-foreground">--:--</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap"
      title={`Current time in ${timeZone.replaceAll("_", " ")}`}
    >
      <span className="tabular-nums text-foreground">{time}</span>
      <span className="text-border">·</span>
      <span>{relative}</span>
    </span>
  );
}
