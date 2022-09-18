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
        <p className='uppercase text-sm tracking-widest text-gray-600'>
          OPEN SCIENCE POWERED BY WEB3
        </p>
        <form encType="multipart/form-data">
            
            <label htmlFor="myfile">Select a file:</label>
            <input type="file" id="myfile" name="myfile" />
            <br /><br />
            <button className="p-3 px-10">
                <input type="submit" />

            </button>
        </form>
        <Link href='/mint'>
          <a> Mint
          </a>
        </Link>
      </div>
    </div>
  </div> 
  );
};

export default netflix;
