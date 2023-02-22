import { CHAIN_ID, ERC721TOKEN_ADDRESS } from '@/lib/constants/web3_contants';
import { useEvmWalletNFTs, useEvmContractNFTs } from '@moralisweb3/next';
import { EvmNft } from "@moralisweb3/common-evm-utils";

export const useMoralisApi = (address: string) => {
  const myNFTOptions = {
    chain: CHAIN_ID,
    tokenAddreses: [ERC721TOKEN_ADDRESS],
    address: address,
  };
  let data: any;
  try {
    data = useEvmWalletNFTs(myNFTOptions);
  } catch (e) {
    data = undefined;
  }

  const contractNFTOptions = {
    chain: CHAIN_ID,
    address: ERC721TOKEN_ADDRESS,
  };
  let contractNFTData: any;
  try {
    contractNFTData = useEvmContractNFTs(contractNFTOptions);
  } catch (e) {
    contractNFTData = undefined;
  }
  return {
    myNfts: data ? data.data : [],
    nfts: contractNFTData ? contractNFTData.data : [],
    ERC721TOKEN_ADDRESS,
  };
};
