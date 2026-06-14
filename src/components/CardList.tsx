import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import { useExtensions } from "../hooks/useExtensions";
import { EmptyMessageStyled } from "./styles/EmptyMessage.styled";
import { useMemo } from "react";
import { filterExtensions } from "../utils/extensions";

const CardList = ({ filter }: { filter: string }) => {
  const { extensions } = useExtensions();

  const visibleExtensions = useMemo(
    () => filterExtensions(filter, extensions),
    [filter, extensions],
  );

  return visibleExtensions.length ? (
    <CardListStyled>
      {visibleExtensions.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </CardListStyled>
  ) : (
    <EmptyMessageStyled>{filter} list is empty!</EmptyMessageStyled>
  );
};

export default CardList;
