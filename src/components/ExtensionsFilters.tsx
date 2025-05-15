import { useState } from "react";
import { ButtonStyled } from "./styles/Button.styled";
import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";
import { FilterTypes } from "../enums/FilterTypes";

const ExtensionsFilters = () => {
  const [selected, setSelected] = useState<string>(FilterTypes.ALL);

  return (
    <ExtensionsFiltersStyled>
      <TitleStyled>Extensions List</TitleStyled>
      <FiltersContainerStyled>
        <ButtonStyled
          $selected={selected === FilterTypes.ALL}
          onClick={() => setSelected(FilterTypes.ALL)}
        >
          All
        </ButtonStyled>
        <ButtonStyled
          $selected={selected === FilterTypes.ACTIVE}
          onClick={() => setSelected(FilterTypes.ACTIVE)}
        >
          Active
        </ButtonStyled>
        <ButtonStyled
          $selected={selected === FilterTypes.INACTIVE}
          onClick={() => setSelected(FilterTypes.INACTIVE)}
        >
          Inactive
        </ButtonStyled>
      </FiltersContainerStyled>
    </ExtensionsFiltersStyled>
  );
};

export default ExtensionsFilters;
