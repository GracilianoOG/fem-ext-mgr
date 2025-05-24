import { FilterButtonStyled } from "./styles/Button.styled";

interface FilterButtonProps {
  selected: string;
  btnFilter: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButton = ({
  selected,
  btnFilter,
  setSelected,
}: FilterButtonProps) => {
  const handleClick = () => setSelected(btnFilter);

  return (
    <FilterButtonStyled
      $selected={selected === btnFilter}
      onClick={handleClick}
      aria-pressed={selected === btnFilter}
    >
      {btnFilter}
    </FilterButtonStyled>
  );
};

export default FilterButton;
