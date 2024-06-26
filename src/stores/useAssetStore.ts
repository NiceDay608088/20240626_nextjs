import { create } from "zustand";
import { Chain, AssetList } from "@chain-registry/types";
import { assets, chains, ibc } from "chain-registry";

export interface AssetInfo {
  loading: boolean;
  selectedChain: string;
  assetList: AssetList;
}

interface AssetState {
  assetInfo: AssetInfo;
  addAssetList: (chain: Chain) => void;
}

// const useAssetStore = create<AssetState>((set) => ({
//   assetInfo: {
//     loading: true,
//     selectedChain: "osmosis",
//     assetList: {
//       $schema: undefined,
//       chain_name: "",
//       assets: [],
//     },
//   },
// }));
