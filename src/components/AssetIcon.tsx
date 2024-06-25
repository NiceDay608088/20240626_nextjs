import { IconSpan } from "@/app/styles";
import React from "react";

interface IconProp {
  icon: any;
}

const AssetIcon = ({ icon }: IconProp) => {
  return <IconSpan>{icon}</IconSpan>;
};

export default AssetIcon;
