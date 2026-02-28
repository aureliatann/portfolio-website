import React from "react";

export default function SplashScreen({ fadeOut }) {
  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center
        bg-[#4e1f2f] z-50 transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className="
          flex flex-col items-center
          opacity-0 scale-75
          animate-[fadeScaleTogether_1s_ease-out_forwards]
        "
      >
        <h1 className="font-heading text-9xl md:text-11xl text-[#e4d9d1] scale-y-135">
          AT
        </h1>

        <h2 className="font-heading text-xl md:text-2xl text-[#e4d9d1] mt-4 tracking-wider">
          FULL-STACK DEVELOPER
        </h2>
      </div>

      <style>
        {`
          @keyframes fadeScaleTogether {
            0% {
              opacity: 0;
              transform: scale(0.75);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}