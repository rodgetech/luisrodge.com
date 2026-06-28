"use client";

import { useEffect, useState } from "react";

type TimeDisplayProps = {
  timeZone: string;
};

function getInitialTime(timeZone: string) {
  try {
    const now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);
  } catch {
    return "00:00";
  }
}

export function TimeDisplay({ timeZone }: TimeDisplayProps) {
  const [time, setTime] = useState<string>(() => getInitialTime(timeZone));
  const [timeDiff, setTimeDiff] = useState<string>("local time");

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
        }).format(now)
      );

      const localHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      let diffHours = tzHour - localHour;

      if (diffHours > 12) diffHours -= 24;
      if (diffHours < -12) diffHours += 24;

      if (diffHours === 0) {
        setTimeDiff("same time");
      } else if (diffHours > 0) {
        setTimeDiff(`${diffHours}h ahead`);
      } else {
        setTimeDiff(`${Math.abs(diffHours)}h behind`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
      <span className="tabular-nums text-foreground">{time}</span>
      <span className="text-border">·</span>
      <span>{timeDiff}</span>
    </span>
  );
}
