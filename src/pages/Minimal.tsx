import { useEffect, useState } from "react";

const Minimal = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Standard cursor blink rate

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <span className="text-white text-4xl font-mono">
        {showCursor ? '|' : ' '}
      </span>
    </div>
  );
};

export default Minimal;