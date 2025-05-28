import { memo } from "react";
import type { CardItemProps } from "../interfaces/CardItemProps";
import ExtensionToggler from "./ExtensionToggler";
import RemoveButton from "./RemoveButton";
import {
  CardItemInfoStyled,
  CardItemPanelStyled,
  CardItemStyled,
  CardItemTitleStyled,
} from "./styles/CardItem.styled";

const CardItem = ({ id, logo, name, description, isActive }: CardItemProps) => {
  return (
    <CardItemStyled>
      <CardItemInfoStyled>
        <div>
          <img src={logo} alt="" width={60} height={60} />
        </div>
        <div>
          <CardItemTitleStyled>{name}</CardItemTitleStyled>
          <p>{description}</p>
        </div>
      </CardItemInfoStyled>
      <CardItemPanelStyled>
        <RemoveButton extId={id} name={name} />
        <ExtensionToggler extId={id} isActive={isActive} name={name} />
      </CardItemPanelStyled>
    </CardItemStyled>
  );
};

export default memo(CardItem);
