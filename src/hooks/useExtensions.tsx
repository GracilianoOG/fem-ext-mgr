import { useContext } from "react";
import { ExtensionContext } from "../contexts/ExtensionContext";

export const useExtensions = () => useContext(ExtensionContext);
