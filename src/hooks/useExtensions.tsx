import { useContext } from "react";
import { ExtensionContext } from "../contexts/ExtensionContext";

export const useExtensions = () => {
  const context = useContext(ExtensionContext);

  if (!context) {
    throw new Error("useExtensions must be used within an ExtensionProvider!");
  }

  return context;
};
