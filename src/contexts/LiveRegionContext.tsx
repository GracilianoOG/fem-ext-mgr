import { createContext } from "react";

interface LiveRegionContextValues {
  updateLiveRegion: (message: string) => void;
}

const defaultContextValue: LiveRegionContextValues = {
  updateLiveRegion: () => {},
};

export const LiveRegionContext =
  createContext<LiveRegionContextValues>(defaultContextValue);
