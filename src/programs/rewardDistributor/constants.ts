import type { AnchorTypes } from "@saberhq/anchor-contrib";
import { PublicKey } from "@solana/web3.js";

import * as REWARD_DISTRIBUTOR_TYPES from "../../idl/cardinal_reward_distributor";

export const REWARD_DISTRIBUTOR_ADDRESS = new PublicKey(
  "8qYb1jcU4Q9hAms5VtoU2QFRrX37UEYBduCi4EEtojz7"
);
export const REWARD_MANAGER = new PublicKey(
  "crkdpVWjHWdggGgBuSyAqSmZUmAjYLzD435tcLDRLXr"
);

export const REWARD_ENTRY_SEED = "reward-entry";

export const REWARD_DISTRIBUTOR_SEED = "reward-distributor";

export type REWARD_DISTRIBUTOR_PROGRAM =
  REWARD_DISTRIBUTOR_TYPES.CardinalRewardDistributor;

export const REWARD_DISTRIBUTOR_IDL = REWARD_DISTRIBUTOR_TYPES.IDL;

export type RewardDistributorTypes = AnchorTypes<REWARD_DISTRIBUTOR_PROGRAM>;

type Accounts = RewardDistributorTypes["Accounts"];
export type RewardEntryData = Accounts["rewardEntry"];
export type RewardDistributorData = Accounts["rewardDistributor"];

export enum RewardDistributorKind {
  Mint = 1,
  Treasury = 2,
}
