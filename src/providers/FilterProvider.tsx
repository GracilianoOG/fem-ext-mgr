import { useState, type PropsWithChildren } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { FilterTypes } from "../enums/FilterTypes";
import type { FilterOptions } from "../utils/extensions";

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<FilterOptions>(FilterTypes.ALL);

  return (
    <FilterContext value={{ filter, setFilter }}>{children}</FilterContext>
  );
};

export default FilterProvider;
