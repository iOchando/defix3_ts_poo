import { CredentialInterface } from "../interfaces/credential.interface";
export interface BlockchainService {
  fromMnemonic(mnemonic: string): Promise<CredentialInterface>;
  fromPrivateKey(privateKey: string): Promise<CredentialInterface | null>;
  isAddress(address: string): Promise<boolean>;
  getBalance(address: string): Promise<number>;
  getBalanceToken(
    address: string,
    contract: string,
    decimals: number
  ): Promise<number>;
  sendTransfer(
    fromAddress: string,
    privateKey: string,
    toAddress: string,
    amount: number,
    coin: string
  ): Promise<string>;
  sendTransferToken(
    fromAddress: string,
    privateKey: string,
    toAddress: string,
    amount: number,
    srcToken: any
  ): Promise<string>;
}
