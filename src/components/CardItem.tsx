import { RemoveButtonStyled } from "./styles/Button.styled";
import {
  CardListContentStyled,
  CardListItemStyled,
} from "./styles/CardList.styled";

const CardItem = ({
  logo,
  name,
  description,
}: {
  logo: string;
  name: string;
  description: string;
}) => {
  return (
    <CardListItemStyled>
      <CardListContentStyled>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </CardListContentStyled>
      <div>
        <RemoveButtonStyled>Remove</RemoveButtonStyled>
      </div>
    </CardListItemStyled>
  );
};

export default CardItem;
