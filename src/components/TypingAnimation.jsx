"use client";

import { useEffect, useState } from "react";

export function TypingAnimation({ text, duration = 200, className = "" }) {
  const [displayedText, setDisplayedText] = useState(""); // Stores the currently displayed text

  useEffect(() => {
    let i = 0; // Track the current character index
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i)); // Add the next character
        i += 1; // Increment the index
      } else {
        clearInterval(typingEffect); // Stop when the text is fully displayed
      }
    }, duration);

    return () => {
      clearInterval(typingEffect); // Cleanup on component unmount
    };
  }, [text, duration]);

  return (
    <h1
      className={`font-display text-center text-4xl font-bold leading-[5rem] 
        tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {displayedText}
    </h1>
  );
}
