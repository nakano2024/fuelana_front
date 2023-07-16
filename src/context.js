import { createContext, useContext } from "react";

export const IsMobile = createContext(false);

export const OnClick = createContext(() => {});

export const Year = createContext(1);

export const Month = createContext(1);