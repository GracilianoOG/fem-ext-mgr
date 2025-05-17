import type { CardItemProps } from "../interfaces/CardItemProps";
import { RemoveButtonStyled } from "./styles/Button.styled";
import {
  CardListContentStyled,
  CardListItemStyled,
} from "./styles/CardList.styled";
import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";

const CardItem = ({ logo, name, description, isActive }: CardItemProps) => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RemoveButtonStyled>Remove</RemoveButtonStyled>
        <ExtensionTogglerStyled $isActive={isActive}></ExtensionTogglerStyled>
      </div>
    </CardListItemStyled>
  );
};

export default CardItem;
