import { createContext } from "react";

interface ILiveRegionContext {
  updateLiveRegion: (message: string) => void;
}

const defaultContextValue: ILiveRegionContext = {
  updateLiveRegion: () => {},
};

export const LiveRegionContext =
  createContext<ILiveRegionContext>(defaultContextValue);
