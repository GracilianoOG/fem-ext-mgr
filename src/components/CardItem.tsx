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
import { useExtensions } from "../hooks/useExtensions";
import { useLiveRegion } from "../hooks/useLiveRegion";

const CardItem = ({ id, logo, name, description, isActive }: CardItemProps) => {
  const { setExtensions } = useExtensions();
  const { updateLiveRegion } = useLiveRegion();

  const removeExtension = () => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.id !== id),
    );
    updateLiveRegion(`Removed ${name} extension.`);
  };

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
        <RemoveButton name={name} onClick={removeExtension} />
        <ExtensionToggler extId={id} isActive={isActive} name={name} />
      </CardItemPanelStyled>
    </CardItemStyled>
  );
};

export default memo(CardItem);
