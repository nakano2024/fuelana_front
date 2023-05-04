import { createContext, useContext } from "react";

export const IsMobile = createContext(false);

export const OnClose = createContext(() => {});