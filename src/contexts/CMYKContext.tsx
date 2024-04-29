import { createContext, useState, useEffect } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
  const [cyan, setCyan] = useState(() => Number(localStorage.getItem('cyan')) || 0);
  const [magenta, setMagenta] = useState(() => Number(localStorage.getItem('magenta')) || 0);
  const [yellow, setYellow] = useState(() => Number(localStorage.getItem('yellow')) || 0);
  const [black, setBlack] = useState(() => Number(localStorage.getItem('black')) || 0);
  const r = 255 * (1 - cyan / 100) * (1 - black / 100);
  const g = 255 * (1 - magenta / 100) * (1 - black / 100);
  const b = 255 * (1 - yellow / 100) * (1 - black / 100);
  const color = `rgb(${r}, ${g}, ${b})`;

  useEffect(() => {
    localStorage.setItem('cyan', String(cyan));
    localStorage.setItem('magenta', String(magenta));
    localStorage.setItem('yellow', String(yellow));
    localStorage.setItem('black', String(black));
  }, [cyan, magenta, yellow, black]);

  return (
    <CMYKContext.Provider value={{cyan, magenta , yellow, black, setCyan, setMagenta, setYellow, setBlack, color }}>
      {children}
    </CMYKContext.Provider>
  );
}