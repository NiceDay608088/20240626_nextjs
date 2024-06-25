"use client";

import styled from "styled-components";

export const ContainerDiv = styled.div`
  padding: 40px;
`;

export const ThemeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconSpan = styled.span`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 20%;
  }
`;

export const AssetListDiv = styled.div``;

export const AssetListItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 10px 0;
`;

export const AssetListItemImageDiv = styled.div`
  min-width: 80px;
  height: 40px;
`;

export const AssetListItemTokenDiv = styled.div`
  flex: 0.5;
  min-width: 160px;
`;

export const AssetListItemBalanceDiv = styled.div`
  flex: 1;
  min-width: 160px;
`;

export const AssetListItemActionDiv = styled.div`
  width: 250px;
  display: flex;
  gap: 10px;
`;

export const AssetListItemActionBtn = styled.div`
  padding: 5px 20px;
  cursor: pointer;
  color: black;
  background-color: #f5f7fb;
  border-radius: 10%;

  &:hover {
    color: #9a928c;
    background-color: #f2f3f4;
  }
`;

export const AssetListItemTextGrey = styled.p`
  color: grey;
`;

export const AssetListItemFontBold = styled.p`
  font-weight: 600;
  color: rgb(44, 49, 55);
`;
