import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";
import { FilterTypes } from "../enums/FilterTypes";
import FilterButton from "./FilterButton";
import { VisuallyHidden } from "./styles/VisuallyHidden.styled";
import { useFilter } from "../hooks/useFilter";

const ExtensionsFilters = () => {
  const { filter, setFilter } = useFilter();

  return (
    <ExtensionsFiltersStyled>
      <TitleStyled>
        Extensions List <VisuallyHidden as="span">Filters</VisuallyHidden>
      </TitleStyled>
      <FiltersContainerStyled>
        <li>
          <FilterButton
            selected={filter}
            setSelected={setFilter}
            btnFilter={FilterTypes.ALL}
          />
        </li>
        <li>
          <FilterButton
            selected={filter}
            setSelected={setFilter}
            btnFilter={FilterTypes.ACTIVE}
          />
        </li>
        <li>
          <FilterButton
            selected={filter}
            setSelected={setFilter}
            btnFilter={FilterTypes.INACTIVE}
          />
        </li>
      </FiltersContainerStyled>
    </ExtensionsFiltersStyled>
  );
};

export default ExtensionsFilters;
