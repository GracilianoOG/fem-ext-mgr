import { useFilter } from "../hooks/useFilter";
import { FilterButtonStyled } from "./styles/Button.styled";

interface FilterButtonProps {
  btnFilter: string;
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
