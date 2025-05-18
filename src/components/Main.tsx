import ExtensionsFilters from "./ExtensionsFilters";
import CardList from "./CardList";
import { useState } from "react";
import { FilterTypes } from "../enums/FilterTypes";

const Main = () => {
  const [filter, setFilter] = useState<string>(FilterTypes.ALL);

  return (
    <main>
      <ExtensionsFilters filter={filter} setFilter={setFilter} />
      <CardList filter={filter} />
    </main>
  );
};

export default Main;
