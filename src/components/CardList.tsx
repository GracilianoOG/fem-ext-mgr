import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import { FilterTypes } from "../enums/FilterTypes";
import { useExtensions } from "../hooks/useExtensions";
import { EmptyMessageStyled } from "./styles/EmptyMessage.styled";
import { useCallback, useMemo } from "react";

const CardList = ({ filter }: { filter: string }) => {
  const { extensions } = useExtensions();

  const getExtensions = useCallback(
    (filter: string) => {
      if (filter === FilterTypes.ALL) {
        return extensions;
      } else if (filter === FilterTypes.ACTIVE) {
        return extensions.filter(ext => ext.isActive);
      } else {
        return extensions.filter(ext => !ext.isActive);
      }
    },
    [extensions]
  );

  const visibleExtensions = useMemo(
    () => getExtensions(filter),
    [getExtensions, filter]
  );

  return visibleExtensions.length ? (
    <CardListStyled>
      {visibleExtensions.map(item => (
        <CardItem key={item.id} {...item} />
      ))}
    </CardListStyled>
  ) : (
    <EmptyMessageStyled>{filter} list is empty!</EmptyMessageStyled>
  );
};

export default CardList;
