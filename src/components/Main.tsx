import { ButtonStyled } from "./styles/Button.styled";
import { ExtensionsFiltersStyled } from "./styles/ExtensionsFilters.styled";
import { FiltersContainerStyled } from "./styles/FiltersContainer.styled";
import { TitleStyled } from "./styles/Title.styled";

const Main = () => {
  return (
    <main>
      <ExtensionsFiltersStyled>
        <TitleStyled>Extensions List</TitleStyled>
        <FiltersContainerStyled>
          <ButtonStyled>All</ButtonStyled>
          <ButtonStyled>Active</ButtonStyled>
          <ButtonStyled>Inactive</ButtonStyled>
        </FiltersContainerStyled>
      </ExtensionsFiltersStyled>
    </main>
  );
};

export default Main;
