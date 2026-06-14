import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";
import { FilterTypes } from "../enums/FilterTypes";
import FilterButton from "./FilterButton";
import { VisuallyHidden } from "./styles/VisuallyHidden.styled";

const ExtensionsFilters = () => {
  return (
    <ExtensionsFiltersStyled>
      <TitleStyled>
        Extensions List <VisuallyHidden as="span">Filters</VisuallyHidden>
      </TitleStyled>
      <FiltersContainerStyled>
        <li>
          <FilterButton btnFilter={FilterTypes.ALL} />
        </li>
        <li>
          <FilterButton btnFilter={FilterTypes.ACTIVE} />
        </li>
        <li>
          <FilterButton btnFilter={FilterTypes.INACTIVE} />
        </li>
      </FiltersContainerStyled>
    </ExtensionsFiltersStyled>
  );
};

export default ExtensionsFilters;
