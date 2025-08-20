import React, { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  const clockSize = 160; // same as your width/height
  const radius = clockSize / 2 - 20; // radius for numbers

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        background: "#ffffffff",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${clockSize}px`,
          height: `${clockSize}px`,
          border: "6px solid #333",
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        {/* Hour numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30; // 360/12
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const y = -radius * Math.cos((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x - 8}px, ${y - 8}px)`,
                fontSize: "14px",
                fontWeight: "bold",
                color: "#111",
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* Hour hand */}
        <div
          style={{
            position: "absolute",
            width: "6px",
            height: "40px",
            background: "#111",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
            transformOrigin: "bottom center",
            borderRadius: "4px",
          }}
        ></div>

        {/* Minute hand */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "60px",
            background: "#1E3A8A", // blue
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
            transformOrigin: "bottom center",
            borderRadius: "4px",
          }}
        ></div>

        {/* Second hand */}
        <div
          style={{
            position: "absolute",
            width: "2px",
            height: "70px",
            background: "red",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
            transformOrigin: "bottom center",
            borderRadius: "2px",
          }}
        ></div>

        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            background: "#111",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </div>
  );
}
