import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
}: {
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        <div className="flex gap-3 shrink-0">{children}</div>
        <div className="flex gap-3 shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
