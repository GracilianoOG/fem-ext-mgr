import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import { useExtensions } from "../hooks/useExtensions";
import { EmptyMessageStyled } from "./styles/EmptyMessage.styled";
import { filterExtensions } from "../utils/extensions";
import { useFilter } from "../hooks/useFilter";

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
