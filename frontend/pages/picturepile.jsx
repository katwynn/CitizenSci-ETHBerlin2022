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
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Algforskarsommar}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Picture pile</h2>
          <h3>Scitizen science project</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <div className="py-5">
            <h2 className="py-2">What is this project about?</h2>
            <p>
            With Picture Pile you can contribute to solving global problems as climate chance and malnutrition by sorting piles of pictures together with other players.
            </p>

          </div>
          <div className="py-5">

          <h2 className="py-2">How can citizens participate in research?</h2>
          <p>
          Sorting the pictures is very easy and works in a similar way to other Apps. A question is asked about a displayed image, for example: “Is farmland visible in the image?”. Now the player can slide the picture to the right or to the left to answer the question with “yes” or “no”. Alternatively, you can slide the picture down, if you are not sure. Picture Pile can be viewed in the browser, on the iPhone, iPad and Android.
          </p>
          </div>
          <a
            href='https://www.citizen-science.at/en/projects/picture-pile-598'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Visit website</button>
          </a>
          <Link
            href='/demo'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo project</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-4'>Claimable Badges</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <div className='m-auto'>
                <Image className='hover:scale-95 ease-in duration-300' src={Gold3} width='120px' height='120px' alt='/' />
              </div>
              <div className='m-auto'>
                <Image className='hover:scale-95 ease-in duration-300' src={Gold4} width='120px' height='120px' alt='/' />
              </div>
              <div className='m-auto'>
                <Image className='hover:scale-95 ease-in duration-300' src={Gold5} width='120px' height='120px' alt='/' />
              </div>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
