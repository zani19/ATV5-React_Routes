import { createContext, useEffect, useState } from "react";
import { HSLAContextProps } from "../types";

export const HSLAContext = createContext({} as HSLAContextProps);

export function HSLAProvider({ children }: any) {
  const [hue, setHue] = useState(() => Number(localStorage.getItem('hue')) || 0);
  const [saturation, setSaturation] = useState(() => Number(localStorage.getItem('saturation')) || 0);
  const [lightness, setLightness] = useState(() => Number(localStorage.getItem('lightness')) || 0);
  const [alpha, setAlpha] = useState(() => Number(localStorage.getItem('alpha')) || 0);
  const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

  useEffect(() => {
    localStorage.setItem('hue', String(hue));
    localStorage.setItem('saturation', String(saturation));
    localStorage.setItem('lightness', String(lightness));
    localStorage.setItem('alpha', String(alpha));
  }, [hue, saturation, lightness, alpha]);

  return (
    <HSLAContext.Provider
      value={{
        hue,
        saturation,
        lightness,
        alpha,
        setHue,
        setSaturation,
        setLightness,
        setAlpha,
        color,
      }}
    >
      {children}
    </HSLAContext.Provider>
  );
}
