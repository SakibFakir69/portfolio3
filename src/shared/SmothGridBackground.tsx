import React, { useState, useEffect } from "react";
import { GlowButton } from "./Button-Glow";

export const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        animation: "moveGrid 20s linear infinite",
        transform: `translate(${mousePosition.x / 30}px, ${
          mousePosition.y / 30
        }px)`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};

export default function GridBackgroundView() {
  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      <GridBackground />

      <div className="relative w-full flex justify-between invisible md:visible ">

        <div className="h-20 w-80 bg-gray-700 backdrop-blur-3xl blur-3xl rounded-t-4xl "></div>

        <div className="h-20 w-80 bg-gray-700   blur-3xl "></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 flex flex-col gap-y-2.5">
          <span className="text-white">Experience the Dynamic World</span>

          <h1 className="lg:text-6xl md:text-5xl text-3xl md:font-bold font-semibold text-white">
            Turning Concepts into Seamless{" "}
            <span className="text-[#CBACF9]">Software Solutions</span>
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold  text-white py-4">
            Hi! I'm Sakib Fakir , a Software Engineer, Web Developer.
          </h3>

          <div>
            <GlowButton variant="green">See My Work</GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
