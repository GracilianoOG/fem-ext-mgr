import ExtensionsFilters from "./ExtensionsFilters";
import CardList from "./CardList";
import { useState } from "react";
import { FilterTypes } from "../enums/FilterTypes";
import ExtensionProvider from "../providers/ExtensionProvider";
import { MainStyled } from "./styles/Main.styled";

const Main = () => {
  const [filter, setFilter] = useState<string>(FilterTypes.ALL);

  return (
    <MainStyled>
      <ExtensionsFilters filter={filter} setFilter={setFilter} />
      <ExtensionProvider>
        <CardList filter={filter} />
      </ExtensionProvider>
    </MainStyled>
  );
};

export default Main;
