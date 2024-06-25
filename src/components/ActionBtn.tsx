import { AssetListItemActionBtn } from "@/app/styles";
import React from "react";

interface ActionBtnProp {
  label: string;
  action: () => void;
}

const ActionBtn = ({ label, action }: ActionBtnProp) => {
  return (
    <AssetListItemActionBtn onClick={action}>{label}</AssetListItemActionBtn>
  );
};

export default ActionBtn;
