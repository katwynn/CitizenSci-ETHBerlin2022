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
  const myNftDropContractAddress = "0xF7F49781C77c073d8B5796F0d5357948b9d08b13"
  const { contract: nftDrop } = useContract(myNftDropContractAddress);  const { address } = useAccount();

  return (
    <div>
      <Head>
        <title>CitizenSci | Help Collect Data</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Projects />
    </div>
  )
}