import { useState } from "react";
import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";
import { FilterTypes } from "../enums/FilterTypes";
import FilterButton from "./FilterButton";

const ExtensionsFilters = () => {
  const [selected, setSelected] = useState<string>(FilterTypes.ALL);

  return (
    <ExtensionsFiltersStyled>
      <TitleStyled>Extensions List</TitleStyled>
      <FiltersContainerStyled>
        <FilterButton
          selected={selected}
          setSelected={setSelected}
          btnFilter={FilterTypes.ALL}
        />
        <FilterButton
          selected={selected}
          setSelected={setSelected}
          btnFilter={FilterTypes.ACTIVE}
        />
        <FilterButton
          selected={selected}
          setSelected={setSelected}
          btnFilter={FilterTypes.INACTIVE}
        />
      </FiltersContainerStyled>
    </ExtensionsFiltersStyled>
  );
};

export default ExtensionsFilters;
