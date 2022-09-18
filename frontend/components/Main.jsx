import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiFillProject } from 'react-icons/ai';
import { BiBadge } from 'react-icons/bi';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            OPEN SCIENCE POWERED BY WEB3
          </p>
          <h1 className='py-4 text-gray-700'>
            Participate in <span className='text-[#0d6414]'> Citizen </span>
          </h1>
          <h1 className='py-2 text-gray-700'><span className='text-[#0d6414]'> Science </span> Projects</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Recieve proper recognition with your contribution in Science.
          Own your data. Trace your contribution. And share it to your granddaughter!
          </p>
          <div className='flex items-center justify-between max-w-[400px] m-auto py-4'>
            <Link
              href='/#projects'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded flex items-center justify-between m-auto bg-gray-200 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiFillProject/>
              <div className="px-2">
                See projects
              </div>
              </div>
            </Link>
            <Link
              href='/skills'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded flex items-center justify-between m-auto bg-gray-200 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BiBadge />

              <div className="px-2">
                Collect badges
              </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
