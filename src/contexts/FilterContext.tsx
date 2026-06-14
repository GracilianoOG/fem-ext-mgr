import { createContext } from "react";

interface FilterContextValues {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextValues | null>(null);
