import { RemoveButtonStyled } from "./styles/Button.styled";
import {
  CardListContentStyled,
  CardListItemStyled,
} from "./styles/CardList.styled";
import img from "../assets/images/logos/logo-devlens.svg";

const CardItem = () => {
  return (
    <CardListItemStyled>
      <CardListContentStyled>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h2>DevLens</h2>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </CardListContentStyled>
      <div>
        <RemoveButtonStyled>Remove</RemoveButtonStyled>
      </div>
    </CardListItemStyled>
  );
};

export default CardItem;
