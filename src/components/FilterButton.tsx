import { ButtonStyled } from "./styles/Button.styled";

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
    <ButtonStyled $selected={selected === btnFilter} onClick={handleClick}>
      {btnFilter}
    </ButtonStyled>
  );
};

export default FilterButton;
