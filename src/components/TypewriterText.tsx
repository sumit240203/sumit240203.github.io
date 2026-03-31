"use client";

import { useState, useEffect } from "react";

const TEXT = "I build clean web interfaces and practical systems.";
const SPEED_MS = 45;

export function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(TEXT.slice(0, i));
      if (i >= TEXT.length) {
        clearInterval(id);
        setDone(true);
      }
    }, SPEED_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      <span className="hero-shine">{displayed}</span>
      <span
        className="typewriter-cursor"
        aria-hidden="true"
        data-done={done ? "true" : undefined}
      >
        |
      </span>
    </span>
  );
}
