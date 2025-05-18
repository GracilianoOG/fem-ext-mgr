import ExtensionsFilters from "./ExtensionsFilters";
import CardList from "./CardList";
import { useState } from "react";
import { FilterTypes } from "../enums/FilterTypes";
import ExtensionProvider from "../providers/ExtensionProvider";

const Main = () => {
  const [filter, setFilter] = useState<string>(FilterTypes.ALL);

  return (
    <main>
      <ExtensionsFilters filter={filter} setFilter={setFilter} />
      <ExtensionProvider>
        <CardList filter={filter} />
      </ExtensionProvider>
    </main>
  );
};

export default Main;
