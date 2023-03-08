import { BlockchainService } from "../blockchain.interface";
import {
  KeyPair,
  keyStores,
  Near,
  Account,
  utils,
  ConnectedWalletAccount,
  WalletConnection,
  Contract,
} from "near-api-js";
import axios from "axios";
const nearSEED = require("near-seed-phrase");
import { CredentialInterface } from "../../interfaces/credential.interface";
import { BufferN } from "bitcoinjs-lib/src/types";
import BN from "bn.js";
import ref from "@ref-finance/ref-sdk";
import {
  ftGetTokensMetadata,
  fetchAllPools,
  estimateSwap,
  instantSwap,
} from "@ref-finance/ref-sdk";
import {
  Action,
  createTransaction,
  functionCall,
} from "near-api-js/lib/transaction";
import { PublicKey } from "near-api-js/lib/utils";
import e from "express";
import { UtilsShared } from "../../shared/utils/utils.shared";

const NETWORK = process.env.NETWORK || "testnet";
const ETHERSCAN = process.env.ETHERSCAN;

let NEAR: string;

if (process.env.NEAR_ENV === "testnet") {
  NEAR = "testnet";
} else {
  NEAR = "near";
}

export class NearService implements BlockchainService {
  async createWallet(mnemonic: string): Promise<CredentialInterface> {
    const walletSeed = await nearSEED.parseSeedPhrase(mnemonic);
    const keyPair = KeyPair.fromString(walletSeed.secretKey);
    const implicitAccountId = Buffer.from(keyPair.getPublicKey().data).toString(
      "hex"
    );

    const credential: CredentialInterface = {
      name: "NEAR",
      address: implicitAccountId,
      privateKey: walletSeed.secretKey,
    };

    return credential;
  }
  async getBalance(address: string): Promise<number> {
    try {
      let balanceTotal = 0;

      const keyStore = new keyStores.InMemoryKeyStore();
      const near = new Near(UtilsShared.ConfigNEAR(keyStore));

      const account = new Account(near.connection, address);

      const balanceAccount = await account.state();
      const valueStorage = Math.pow(10, 19);
      const valueYocto = Math.pow(10, 24);
      const storage =
        (balanceAccount.storage_usage * valueStorage) / valueYocto;
      balanceTotal =
        Number(balanceAccount.amount) / valueYocto - storage - 0.05;
      if (balanceTotal === null || balanceTotal < 0) {
        balanceTotal = 0;
      }
      return balanceTotal;
    } catch (error) {
      return 0;
    }
  }
}