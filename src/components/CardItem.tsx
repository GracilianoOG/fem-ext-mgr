import type { CardItemProps } from "../interfaces/CardItemProps";
import ExtensionToggler from "./ExtensionToggler";
import RemoveButton from "./RemoveButton";
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
        <RemoveButton extId={id} name={name} />
        <ExtensionToggler extId={id} isActive={isActive} />
      </CardItemPanelStyled>
    </CardItemStyled>
  );
};

export default CardItem;
