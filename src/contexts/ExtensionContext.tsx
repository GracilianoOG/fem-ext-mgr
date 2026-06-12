import { createContext } from "react";
import type { CardItemProps } from "../interfaces/CardItemProps";

interface ExtensionContextValues {
  extensions: CardItemProps[];
  setExtensions: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
}

export const ExtensionContext = createContext<ExtensionContextValues | null>(
  null,
);
