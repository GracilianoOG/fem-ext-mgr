import { useRef } from "react";
import { VisuallyHidden } from "../components/styles/VisuallyHidden.styled";
import { LiveRegionContext } from "../contexts/LiveRegionContext";

interface LiveRegionProviderProps {
  children: React.ReactNode;
}

const LiveRegionProvider = ({ children }: LiveRegionProviderProps) => {
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  const updateLiveRegion = (message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }
  };

  return (
    <LiveRegionContext value={{ updateLiveRegion }}>
      {children}
      <VisuallyHidden
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
      ></VisuallyHidden>
    </LiveRegionContext>
  );
};

export default LiveRegionProvider;
