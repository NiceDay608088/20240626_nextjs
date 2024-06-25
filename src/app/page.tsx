"use client";

import { assests } from "@/data/sample-data";
import AssetList from "@/components/AssetList";
import { FaRegMoon } from "react-icons/fa";
import { ContainerDiv, ThemeDiv } from "./styles";
import AssetIcon from "@/components/AssetIcon";

export default function Home() {
  const onDeposit = (id: number) => {
    console.log("...onDeposit...", { id });
  };

  const onWithdraw = (id: number) => {
    console.log("...onWithdraw...", { id });
  };

  return (
    <ContainerDiv>
      <ThemeDiv>
        <AssetIcon icon={<FaRegMoon />} />
      </ThemeDiv>
      <AssetList
        assests={assests}
        onDeposit={onDeposit}
        onWithdraw={onWithdraw}
      />
    </ContainerDiv>
  );
}
