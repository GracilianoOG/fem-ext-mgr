import { ButtonStyled } from "./styles/Button.styled";

interface FilterButtonProps {
  selected: string;
  btnFilter: string;
  setSelected: (filter: string) => void;
}

const FilterButton = ({
  selected,
  btnFilter,
  setSelected,
}: FilterButtonProps) => {
  const handleClick = () => setSelected(btnFilter);

  return (
    <ButtonStyled $selected={selected === btnFilter} onClick={handleClick}>
      {btnFilter}
    </ButtonStyled>
  );
};

export default FilterButton;
