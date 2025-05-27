import { createContext } from "react";
import type { CardItemProps } from "../interfaces/CardItemProps";

interface IExtensionContext {
  extensions: CardItemProps[];
  setExtensions: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
}

export const ExtensionContext = createContext<IExtensionContext | null>(null);
