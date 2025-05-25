import ExtensionsFilters from "./ExtensionsFilters";
import CardList from "./CardList";
import { useState } from "react";
import { FilterTypes } from "../enums/FilterTypes";
import ExtensionProvider from "../providers/ExtensionProvider";
import { MainStyled } from "./styles/Main.styled";
import LiveRegionProvider from "../providers/LiveRegionProvider";
import { VisuallyHidden } from "./styles/VisuallyHidden.styled";

const Main = () => {
  const [filter, setFilter] = useState<string>(FilterTypes.ALL);

  return (
    <MainStyled>
      <ExtensionsFilters filter={filter} setFilter={setFilter} />
      <ExtensionProvider>
        <LiveRegionProvider>
          <section>
            <VisuallyHidden as="h2">Available extensions</VisuallyHidden>
            <CardList filter={filter} />
          </section>
        </LiveRegionProvider>
      </ExtensionProvider>
    </MainStyled>
  );
};

export default Main;
