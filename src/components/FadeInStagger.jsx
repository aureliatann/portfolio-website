import React, { useEffect, useState } from "react";

// -------------------- FADE IN STAGGER --------------------
export default function FadeInStagger({ children, delay = 150, duration = 500 }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = [];

    React.Children.forEach(children, (_, i) => {
      timers.push(
        setTimeout(() => {
          setVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [children, delay]);

  return (
    <>
      {React.Children.map(children, (child, i) => (
        <div
          className={`transition-opacity duration-${duration} ${
            visible[i] ? "opacity-100" : "opacity-0"
          }`}
        >
          {child}
        </div>
      ))}
    </>
  );
}