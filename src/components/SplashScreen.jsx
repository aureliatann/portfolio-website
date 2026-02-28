import React from "react";

// -------------------- SPLASH SCREEN --------------------
export default function SplashScreen({ fadeOut }) {
  // SplashScreen component takes a single prop: fadeOut
  // fadeOut: boolean indicating whether the splash screen should fade out (From App.jsx as FadeSplash)
  return (
    // SPLASH WRAPPER
    <div
      className={`
        fixed inset-0 h-screen flex flex-col items-center justify-center
        bg-[#4e1f2f] z-50 transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
        /* NOTE: 
           - fixed: positions splash screen relative to viewport (so splash stays in same place no matter how page was scrolled underneath)
           - inset-0: top/right/bottom/left = 0 → full screen
           - h-screen -> full height of screen / viewport / 100vh
           - ${fadeOut ? "opacity-0" : "opacity-100"}: toggle opacity based on fadeOut prop */
      `}
    >
      {/* SPLASH CONTENT WRAPPER */}
      <div
        className="
          flex flex-col items-center
          opacity-0 scale-75
          animate-[fadeScaleTogether_1s_ease-out_forwards] 
          /* Applies custom animation, shorthand for animation: fadeScaleTogether 1s ease-out forwards; */
        "
      >
        {/* SPLASH CONTENT TEXT */ }
        <h1 className="font-heading text-9xl md:text-11xl text-[#e4d9d1] scale-y-135">
          AT
        </h1>
        <h2 className="font-heading text-xl md:text-2xl text-[#e4d9d1] mt-4 tracking-wider">
          FULL-STACK DEVELOPER
        </h2>
      </div>

      {/* Custom CSS keyframes defined inside JSX */}
      <style>
        {`
          @keyframes fadeScaleTogether {
            0%   { opacity: 0; transform: scale(0.75); } /* Start of animation -> Completely invisible, text is shrunk */
            100% { opacity: 1; transform: scale(1);    } /* End of animation -> Completely visible, text is now normal size */
          }
        `}
      </style>
    </div>
  );
}