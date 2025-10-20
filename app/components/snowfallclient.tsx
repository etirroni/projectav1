"use client";
import Snowfall from "react-snowfall";

export default function SnowfallClient() {
  return (
    <Snowfall
      color="white"
      snowflakeCount={80}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none", // allows clicks through snowflakes
      }}
    />
  );
}