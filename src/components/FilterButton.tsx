import { ButtonStyled } from "./styles/Button.styled";

const FilterButton = ({
  selected,
  btnFilter,
  setSelected,
}: {
  selected: string;
  btnFilter: string;
  setSelected: (filter: string) => void;
}) => {
  const handleClick = () => setSelected(btnFilter);

  return (
    <ButtonStyled $selected={selected === btnFilter} onClick={handleClick}>
      {btnFilter}
    </ButtonStyled>
  );
};

export default FilterButton;
