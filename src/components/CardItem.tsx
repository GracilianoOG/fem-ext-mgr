import type { CardItemProps } from "../interfaces/CardItemProps";
import ExtensionToggler from "./ExtensionToggler";
import { RemoveButtonStyled } from "./styles/Button.styled";
import {
  CardItemInfoStyled,
  CardItemPanelStyled,
  CardItemStyled,
} from "./styles/CardItem.styled";

const CardItem = ({ id, logo, name, description, isActive }: CardItemProps) => {
  return (
    <CardItemStyled>
      <CardItemInfoStyled>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </CardItemInfoStyled>
      <CardItemPanelStyled>
        <RemoveButtonStyled>Remove</RemoveButtonStyled>
        <ExtensionToggler extId={id} isActive={isActive} />
      </CardItemPanelStyled>
    </CardItemStyled>
  );
};

export default CardItem;
