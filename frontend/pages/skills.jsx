import Image from 'next/image';
import React from 'react';
import Gray1 from '../public/assets/skills/Gray1.png';
import Gray2 from '../public/assets/skills/Gray2.png';
import Gray3 from '../public/assets/skills/Gray3.png';
import Gray4 from '../public/assets/skills/Gray4.png';
import Gray5 from '../public/assets/skills/Gray5.png';
import Gray6 from '../public/assets/skills/Gray6.png';
import Gray7 from '../public/assets/skills/Gray7.png';
import Gray8 from '../public/assets/skills/Gray8.png';
import Gold1 from '../public/assets/skills/Gold1.png';
import Gold2 from '../public/assets/skills/Gold2.png';
import Gold3 from '../public/assets/skills/Gold3.png';
import Gold4 from '../public/assets/skills/Gold4.png';
import Gold5 from '../public/assets/skills/Gold5.png';
import Gold6 from '../public/assets/skills/Gold6.png';
import Gold7 from '../public/assets/skills/Gold7.png';
import Gold8 from '../public/assets/skills/Gold8.png';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen py-20 p-2'>
      <div className='max-w-[1080px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#119200]'>
          Badges
        </p>
        <h2 className='py-4'>View what you have collected</h2>
        <br />
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-8'>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray1} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray2} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray3} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray4} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray5} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray6} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray7} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray8} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gold1} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray2} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray3} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray4} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray5} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray6} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gray7} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gold8} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-95 ease-in duration-300' src={Gold1} width='120px' height='120px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='hover:scale-105 ease-in duration-300' src={Gray2} width='120px' height='120px' alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
