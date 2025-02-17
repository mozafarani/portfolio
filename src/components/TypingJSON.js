import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingJSON = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    `"creator": "Mohammed Alzafarani",`,
    `"role": "Full-Stack Web Developer",`,
    `"stack": ["Next.js", "TailwindCSS"]`,
  ];

  useEffect(() => {
    if (!isDeleting) {
      // Typing Effect: Add a new line every 1.5s
      if (currentLine < lines.length) {
        const timer = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 2500);
        return () => clearTimeout(timer);
      } else {
        // After all lines typed, wait before deleting
        const deleteTimer = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      // Deleting Effect: Remove one line at a time
      if (currentLine > 0) {
        const timer = setTimeout(() => {
          setCurrentLine((prev) => prev - 1);
        }, 1000); // Delete each line every 1s
        return () => clearTimeout(timer);
      } else {
        // Reset animation cycle
        const resetTimer = setTimeout(() => {
          setIsDeleting(false);
          setShowCursor(true);
        }, 1500);
        return () => clearTimeout(resetTimer);
      }
    }
  }, [currentLine, isDeleting]);

  return (
    <div className="bg-background p-6 rounded-lg shadow-md font-mono text-lg text-yellow-400">
      <p>portfolio: {"{"}</p>
      {lines.slice(0, currentLine).map((line, index) => (
        <p key={index} className="text-green-400 pl-4">
          <Typewriter words={[line]} typeSpeed={50} deleteSpeed={30} />
        </p>
      ))}
      {currentLine === lines.length && !isDeleting && <p>{"}"}</p>}
      {showCursor && <span className="text-white animate-blink">_</span>}{" "}
      {/* Blinking Cursor */}
    </div>
  );
};

export default TypingJSON;
