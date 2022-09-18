import Image from 'next/image';
import React from 'react';
import Algforskarsommar from '../public/assets/projects/Algforskarsommar.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Gold3 from '../public/assets/skills/Gold3.png';
import Gold4 from '../public/assets/skills/Gold4.png';
import Gold5 from '../public/assets/skills/Gold5.png';


const netflix = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/Qma5FgmS9s3hkQrURfG4XDnh5Dxp9Fx9ZjBYkPFUNdQwfi/nft-drop.html?contract=0xF7F49781C77c073d8B5796F0d5357948b9d08b13&chainId=80001"
          width="600px"
          height="600px"
          className="max-w-[1240px]"
          frameborder="0"
          ></iframe>
          <a href="https://app.submarine.me/submarine/nft?edit=wNcJizZfq21qasD3vQqvNy"> View submarined
          </a>
      </div>
    </div>
  </div> 
  );
};

export default netflix;
