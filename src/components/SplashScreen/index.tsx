"use client";
import { useState, useEffect } from "react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [removed, setRemove] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    setTimeout(() => setRemove(true), 3000);
  }, []);

  return (
    <video
      className={`grid place-items-center fixed h-screen w-screen object-cover z-[99999999] ${
        !loading && "opacity-0"
      } ${removed && "hidden"} transition-all duration-1000 ease-in-out`}
      src="/videos/splash.mp4"
      autoPlay
      muted
    ></video>
  );
}
