// src/components/LoadingScreen.tsx
import React from "react";
import type { Theme } from "../utils/theme";

interface LoadingScreenProps {
  theme: Theme;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ theme }) => {
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const faceColor = isDark ? "#ffffff20" : "#00000020"; // translucent cube face
  const edgeColor = isDark ? "#ffffff" : "#000000";
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center ${bgColor} z-50 font-[Poppins]`}>
      <div className="w-24 h-24 perspective-800">
        <div className="cube w-full h-full relative">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="cube-face absolute w-full h-full border"
              style={{
                backgroundColor: faceColor,
                borderColor: edgeColor,
                transform: `rotateY(${i * 90}deg) translateZ(48px)`,
              }}
            />
          ))}
        </div>
      </div>

      <h1 className={`mt-8 text-3xl font-semibold tracking-wide select-none ${textColor}`}>Loading Portfolio...</h1>

      <style>{`
        .perspective-800 {
          perspective: 800px;
        }

        .cube {
          transform-style: preserve-3d;
          animation: cube-rotate 2s linear infinite;
        }

        .cube-face {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        }

        @keyframes cube-rotate {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
