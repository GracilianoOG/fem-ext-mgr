import { createContext } from "react";
import type { IExtensionContext } from "../interfaces/IExtensionContext";

const defaultContextValue: IExtensionContext = {
  extensions: [],
  setExtensions: () => {},
};

export const ExtensionContext =
  createContext<IExtensionContext>(defaultContextValue);
