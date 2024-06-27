"use client";

import { dumyAssests } from "@/data/sample-data";
import AssetList from "@/components/AssetList";
import { FaRegMoon } from "react-icons/fa";
import { ContainerDiv, ThemeDiv } from "./styles";
import AssetIcon from "@/components/AssetIcon";
import MyModal from "@/components/MyModal/MyModal";
import { useState } from "react";
import ComboBox from "@/components/ComboBox/ComboBox";

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);

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
        assests={dumyAssests}
        onDeposit={onDeposit}
        onWithdraw={onWithdraw}
      />
      <button onClick={() => setModalVisible(true)}>Add Asset</button>
      <MyModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      >
        <ComboBox />
      </MyModal>
    </ContainerDiv>
  );
}
