import { FilterTypes } from "../enums/FilterTypes";
import type { CardItemProps } from "../interfaces/CardItemProps";

export const filterExtensions = (
  filter: string,
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
