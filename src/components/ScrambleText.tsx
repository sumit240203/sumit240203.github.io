"use client";

import React, { useState, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/\\";

export function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    iterRef.current = 0;

    const resolve = () => {
      iterRef.current += 0.55;
      const resolved = Math.floor(iterRef.current);

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (resolved < text.length) {
        frameRef.current = requestAnimationFrame(resolve);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(resolve);
  }, [text]);

  return (
    // @ts-expect-error dynamic tag
    <Tag className={`cursor-default font-mono ${className}`} onMouseEnter={scramble}>
      {display}
    </Tag>
  );
}
