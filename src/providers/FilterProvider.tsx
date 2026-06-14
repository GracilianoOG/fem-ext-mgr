import { useState, type PropsWithChildren } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { FilterTypes } from "../enums/FilterTypes";

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<string>(FilterTypes.ALL);

  return (
    <FilterContext value={{ filter, setFilter }}>{children}</FilterContext>
  );
};

export default FilterProvider;
