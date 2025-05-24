import { useContext } from "react";
import { LiveRegionContext } from "../contexts/LiveRegionContext";

export const useLiveRegion = () => useContext(LiveRegionContext);
