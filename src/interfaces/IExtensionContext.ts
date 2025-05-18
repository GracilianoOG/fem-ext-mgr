import type { CardItemProps } from "./CardItemProps";

export interface IExtensionContext {
  extensions: CardItemProps[];
  setExtensions: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
}
