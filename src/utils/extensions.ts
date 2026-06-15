import { FilterTypes } from "../enums/FilterTypes";
import type { CardItemProps } from "../interfaces/CardItemProps";

export type FilterOptions = "all" | "active" | "inactive";

export const filterExtensions = (
  filter: FilterOptions,
  extensions: CardItemProps[],
) => {
  if (filter === FilterTypes.ALL) {
    return extensions;
  } else if (filter === FilterTypes.ACTIVE) {
    return extensions.filter((ext) => ext.isActive);
  } else {
    return extensions.filter((ext) => !ext.isActive);
  }
};

export const generateId = () => self.crypto.randomUUID();
