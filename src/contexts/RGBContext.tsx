import { createContext, useEffect, useState } from "react";
import { RGBContextProps } from "../types";

export const RGBContext = createContext({} as RGBContextProps);

export function RGBProvider({ children }: any) {
  const [r, setR] = useState(() => Number(localStorage.getItem('r')) || 0);
  const [g, setG] = useState(() => Number(localStorage.getItem('g')) || 0);
  const [b, setB] = useState(() => Number(localStorage.getItem('b')) || 0);
  const color = `rgb(${r}, ${g}, ${b})`;

  useEffect(() => {
    localStorage.setItem('r', String(r));
    localStorage.setItem('g', String(g));
    localStorage.setItem('b', String(b));
  }, [r, g, b]);

  return (
    <RGBContext.Provider value={{ r, g, b, setR, setG, setB, color }}>
      {children}
    </RGBContext.Provider>
  );
}
