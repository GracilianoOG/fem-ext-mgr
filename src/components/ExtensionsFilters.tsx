import { useState } from "react";
import { ButtonStyled } from "./styles/Button.styled";
import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";

const ExtensionsFilters = () => {
  const [selected, setSelected] = useState<string>("all");

  return (
    <ExtensionsFiltersStyled>
      <TitleStyled>Extensions List</TitleStyled>
      <FiltersContainerStyled>
        <ButtonStyled
          $selected={selected === "all"}
          onClick={() => setSelected("all")}
        >
          All
        </ButtonStyled>
        <ButtonStyled
          $selected={selected === "active"}
          onClick={() => setSelected("active")}
        >
          Active
        </ButtonStyled>
        <ButtonStyled
          $selected={selected === "inactive"}
          onClick={() => setSelected("inactive")}
        >
          Inactive
        </ButtonStyled>
      </FiltersContainerStyled>
    </ExtensionsFiltersStyled>
  );
};

export default ExtensionsFilters;
