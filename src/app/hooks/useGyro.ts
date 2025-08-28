import { useEffect, useState } from "react";

export default function useGyro() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      setTilt({ x: event.gamma || 0, y: event.beta || 0 });
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);
  return tilt;
}
