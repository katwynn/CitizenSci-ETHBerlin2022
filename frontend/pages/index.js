import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'


import {
  useClaimedNFTSupply,
  useContractMetadata,
  useUnclaimedNFTSupply,
  useActiveClaimCondition,
  Web3Button,
  useContract,
} from "@thirdweb-dev/react";

import { useAccount, useDisconnect } from "wagmi";



export default function Home() {
  const myNftDropContractAddress = "0x2EA0AcB4854E0Ad6b2306b824Cbae2560D2Bf06e"
  const { contract: nftDrop } = useContract(myNftDropContractAddress);  const { address } = useAccount();

  return (
    <div>
      <Head>
        <title>CitizenSci | Help Collect Data</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Web3Button
        contractAddress={myNftDropContractAddress}
        action={async (contract) =>
          await contract.erc721.claim(quantity)
        }
        // If the function is successful, we can do something here.
        onSuccess={(result) =>
          alert(
            `Successfully minted ${result.length} NFT${
              result.length > 1 ? "s" : ""
            }!`
          )
        }
        // If the function fails, we can do something here.
        onError={(error) => alert(error?.message)}
        accentColor="#f213a4"
        colorMode="dark"
      >
        Mint 
        </Web3Button>
      <Projects />
    </div>
  )
}