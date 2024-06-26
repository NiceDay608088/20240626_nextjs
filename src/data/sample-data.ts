import { IAsset } from "@/types/data-type";

export const dumyAssests: IAsset[] = [
  {
    id: 1,
    imageUrl: "/ust.png",
    // "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
    token: "USTC",
    name: "Terra Classic",
    balanceUp: 89.66,
    balanceDown: 10,
  },
  {
    id: 2,
    imageUrl: "/utori.png",
    // "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
    token: "TORI",
    name: "Teritori",
    balanceUp: 102.61,
    balanceDown: 101.02,
  },
];
