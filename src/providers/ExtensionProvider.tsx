import { useState } from "react";
import { ExtensionContext } from "../contexts/ExtensionContext";
import data from "../data/data.json";
import type { CardItemProps } from "../interfaces/CardItemProps";

interface ExtensionProviderProps {
  children: React.ReactNode;
}

const ExtensionProvider = ({ children }: ExtensionProviderProps) => {
  const [extensions, setExtensions] = useState<CardItemProps[]>(
    data.map(ext => ({ ...ext, id: self.crypto.randomUUID() }))
  );

  return (
    <ExtensionContext value={{ extensions, setExtensions }}>
      {children}
    </ExtensionContext>
  );
};

export default ExtensionProvider;
