import { createContext } from "react";
import type { FilterOptions } from "../utils/extensions";

interface FilterContextValues {
  filter: FilterOptions;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export const FilterContext = createContext<FilterContextValues | null>(null);
