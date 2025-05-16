import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import data from "../data/data.json";

const CardList = () => {
  return (
    <CardListStyled>
      {data.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
