import { useFilter } from "@/hooks/useFilter";
import type { FilterOptions } from "@/utils/extensions";
import { FilterButtonStyled } from "../styles/Button.styled";

interface FilterButtonProps {
  btnFilter: FilterOptions;
}

const FilterButton = ({ btnFilter }: FilterButtonProps) => {
  const { filter, setFilter } = useFilter();
  const handleClick = () => setFilter(btnFilter);

  return (
    <FilterButtonStyled
      $selected={filter === btnFilter}
      onClick={handleClick}
      aria-pressed={filter === btnFilter}
    >
      {btnFilter}
    </FilterButtonStyled>
  );
};

export default FilterButton;
