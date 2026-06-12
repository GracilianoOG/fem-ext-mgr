import { memo, useState } from "react";
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
import { ConfirmModal } from "./ConfirmModal";

const CardItem = ({ id, logo, name, description, isActive }: CardItemProps) => {
  const { setExtensions } = useExtensions();
  const { updateLiveRegion } = useLiveRegion();
  const [isRemoved, setIsRemoved] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const removeExtension = () => {
    if (!isRemoved) return;

    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.id !== id),
    );
    updateLiveRegion(`Removed ${name} extension.`);
  };

  const handleClick = () => {
    setIsModal(true);
  };

  const handleConfirm = () => {
    setIsRemoved(true);
    removeExtension();
    setIsModal(false);
  };

  return (
    <>
      <CardItemStyled $isRemoved={isRemoved} onAnimationEnd={removeExtension}>
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
          <RemoveButton name={name} onClick={handleClick} />
          <ExtensionToggler extId={id} isActive={isActive} name={name} />
        </CardItemPanelStyled>
      </CardItemStyled>
      <ConfirmModal
        isVisible={isModal}
        title="Delete Extension"
        description="Do you want to delete this extension?"
        onConfirm={handleConfirm}
        onCancel={() => setIsModal(false)}
      />
    </>
  );
};

export default memo(CardItem);
