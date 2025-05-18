import CardItem from "./CardItem";
import { CardListStyled } from "./styles/CardList.styled";
import data from "../data/data.json";
import { useState } from "react";
import { FilterTypes } from "../enums/FilterTypes";

const CardList = ({ filter }: { filter: string }) => {
  const [extensions] = useState(
    data.map(ext => ({ ...ext, id: self.crypto.randomUUID() }))
  );

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
