import { RemoveButtonStyled } from "./styles/Button.styled";
import {
  CardListContentStyled,
  CardListItemStyled,
  CardListStyled,
} from "./styles/CardList.styled";
import img from "../assets/images/logos/logo-devlens.svg";

const CardList = () => {
  return (
    <CardListStyled>
      <CardListItemStyled>
        <CardListContentStyled>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h2>DevLens</h2>
            <p>
              Quickly inspect page layouts and visualize element boundaries.
            </p>
          </div>
        </CardListContentStyled>
        <div>
          <RemoveButtonStyled>Remove</RemoveButtonStyled>
        </div>
      </CardListItemStyled>
    </CardListStyled>
  );
};

export default CardList;
