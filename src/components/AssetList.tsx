import {
  AssetListDiv,
  AssetListItemActionDiv,
  AssetListItemBalanceDiv,
  AssetListItemDiv,
  AssetListItemImageDiv,
  AssetListItemTokenDiv,
  AssetListItemTextGrey,
  AssetListItemFontBold,
} from "@/app/styles";
import { IAsset } from "@/types/data-type";
import React from "react";
import ActionBtn from "./ActionBtn";
import Image from "next/image";

interface AssetsProp {
  assests: IAsset[];
  onDeposit: (id: number) => void;
  onWithdraw: (id: number) => void;
}

const AssetList = ({ assests, onDeposit, onWithdraw }: AssetsProp) => {
  const renderListHeader = () => {
    return (
      <AssetListItemDiv>
        <AssetListItemImageDiv />
        <AssetListItemTokenDiv>Assert</AssetListItemTokenDiv>
        <AssetListItemBalanceDiv>Balance</AssetListItemBalanceDiv>
        <AssetListItemActionDiv />
      </AssetListItemDiv>
    );
  };

  return (
    <AssetListDiv>
      {renderListHeader()}
      {assests.map((asset: IAsset) => {
        return (
          <AssetListItemDiv key={asset.id}>
            <AssetListItemImageDiv>
              <Image src={asset.imageUrl} width={40} height={40} alt="" />
            </AssetListItemImageDiv>
            <AssetListItemTokenDiv>
              <AssetListItemFontBold>{asset.token}</AssetListItemFontBold>
              <AssetListItemTextGrey>{asset.name}</AssetListItemTextGrey>
            </AssetListItemTokenDiv>
            <AssetListItemBalanceDiv>
              <AssetListItemFontBold>{asset.balanceUp}</AssetListItemFontBold>
              <AssetListItemTextGrey>{asset.balanceDown}</AssetListItemTextGrey>
            </AssetListItemBalanceDiv>
            <AssetListItemActionDiv>
              <ActionBtn label="Deposit" action={() => onDeposit(asset.id)} />
              <ActionBtn label="Withdraw" action={() => onWithdraw(asset.id)} />
            </AssetListItemActionDiv>
          </AssetListItemDiv>
        );
      })}
    </AssetListDiv>
  );
};

export default AssetList;
