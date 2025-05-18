import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import { FilterTypes } from "../enums/FilterTypes";
import { useExtensions } from "../hooks/useExtensions";

const CardList = ({ filter }: { filter: string }) => {
  const { extensions } = useExtensions();

  const getExtensions = () => {
    if (filter === FilterTypes.ALL) {
      return extensions;
    } else if (filter === FilterTypes.ACTIVE) {
      return extensions.filter(ext => ext.isActive);
    } else {
      return extensions.filter(ext => !ext.isActive);
    }
  };

  return (
    <CardListStyled>
      {getExtensions().map(item => (
        <CardItem key={item.id} {...item} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
