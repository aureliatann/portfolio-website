import React, { useEffect, useState } from "react";

// -------------------- FADE IN STAGGER COMPONENT --------------------
export default function FadeInStagger({ children, delay = 150, duration = 500 }) {
  // State array to track which children are visible (Initially empty, all children are initially invisible)
  const [visible, setVisible] = useState([]);

  // useEffect runs when component mounts or when children/delay changes (since in dependency array)
  /* NOTE:
     - If dependency array empty -> useEffect runs ONCE on mount
     - If dependency array has valyes -> useEffect also runs again whenever those values changes */
  useEffect(() => {
    const timers = []; // Store all active timers

    // Loop over each child element
    /* NOTE: Children of an element can be anything (not guaranteed to be an array)
             So, cannot simply use children.map() -> Only for arrays
             So, use React.Children.forEach(children, callback) -> Always works, can safely iterate over all children without caring about type 
                 2 arguments here, _ (child itself, placeholder since child isn't used), and i (index of child in list) */
    React.Children.forEach(children, (_, i) => {
      // Store each time in timers array
      timers.push(
        // Set a timeout to make this child visible after a staggered delay
        setTimeout(() => {
          // Updates visible state (array of booleans tracking which children is visible)
          setVisible((prev) => {
            const next = [...prev]; // Copy previous visibility array (Ensure we don't mutate existing state directly since React requires immutable updates)
            next[i] = true;         // Set current child as visible
            return next;            // Return updated array, which becomes new state for visible, React also triggers a re-render so child can appear
          });
        }, i * delay) // Each child’s fade-in is delayed by i*delay ms
      );
    });

    // CLEANUP FUNCTION (Runs if App dismounts / components change) -> Clears all timers
    return () => timers.forEach(clearTimeout);
  }, [children, delay]);

  return (
    <>
      {/* Wraps each child in a div to apply fade-in */}
      {React.Children.map(children, (child, i) => (
        <div
          className={`
            transition-opacity duration-${duration} 
            ${visible[i] ? "opacity-100" : "opacity-0"}
          `}
        >
          {child} {/* Render each child inside a div that fades in */}
        </div>
      ))}
    </>
  );
}