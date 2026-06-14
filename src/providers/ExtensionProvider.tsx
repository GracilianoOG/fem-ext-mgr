import { useEffect, useState, type PropsWithChildren } from "react";
import { ExtensionContext } from "../contexts/ExtensionContext";
import data from "../data/data.json";
import type { CardItemProps } from "../interfaces/CardItemProps";
import type { Extension } from "../interfaces/Extension";

const ExtensionProvider = ({ children }: PropsWithChildren) => {
  const [extensions, setExtensions] = useState<CardItemProps[]>(() => {
    const storedExtensions = localStorage.getItem("extensions");

    if (storedExtensions) {
      return JSON.parse(storedExtensions);
    }

    return data.map((ext: Extension) => ({
      ...ext,
      id: self.crypto.randomUUID(),
    }));
  });

  useEffect(() => {
    localStorage.setItem("extensions", JSON.stringify(extensions));
  }, [extensions]);

  return (
    <ExtensionContext value={{ extensions, setExtensions }}>
      {children}
    </ExtensionContext>
  );
};

export default ExtensionProvider;
