import ExtensionsFilters from "../ExtensionsFilters";
import CardList from "../CardList";
import ExtensionProvider from "@/providers/ExtensionProvider";
import { MainStyled } from "./Main.styled";
import LiveRegionProvider from "@/providers/LiveRegionProvider";
import { VisuallyHidden } from "../styles/VisuallyHidden.styled";
import FilterProvider from "@/providers/FilterProvider";

const Main = () => {
  return (
    <MainStyled>
      <FilterProvider>
        <ExtensionsFilters />
        <ExtensionProvider>
          <LiveRegionProvider>
            <section>
              <VisuallyHidden as="h2">Available extensions</VisuallyHidden>
              <CardList />
            </section>
          </LiveRegionProvider>
        </ExtensionProvider>
      </FilterProvider>
    </MainStyled>
  );
};

export default Main;
