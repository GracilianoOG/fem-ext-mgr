import CardItem from "../CardItem";
import { CardListStyled, EmptyMessageStyled } from "./CardList.styled";
import { useExtensions } from "@/hooks/useExtensions";
import { filterExtensions } from "@/utils/extensions";
import { useFilter } from "@/hooks/useFilter";

const CardList = () => {
  const { extensions } = useExtensions();
  const { filter } = useFilter();
  const visibleExtensions = filterExtensions(filter, extensions);

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
