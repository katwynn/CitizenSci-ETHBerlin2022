import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Project1 from '../public/assets/projects/project1.jpg';
import Project2 from '../public/assets/projects/project2.jpg';
import Project3 from '../public/assets/projects/project3.jpg';
import Project4 from '../public/assets/projects/project4.jpg';
import Project5 from '../public/assets/projects/project5.jpg';
import Project6 from '../public/assets/projects/project6.jpg';
import Project7 from '../public/assets/projects/project7.jpg';
import Project8 from '../public/assets/projects/project8.jpg';
import Project9 from '../public/assets/projects/project9.jpg';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#119200]'>
          Active Projects
        </p>
        <h2 className='py-4'>Contibute to projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Picture Pile'
            backgroundImg={Project6}
            projectUrl='/picturepile'
            tech='A citizen sci project'
          />
          <ProjectItem
            title='Project1'
            backgroundImg={Project1}
            projectUrl='/'
            tech='A citizen sci project'
          />
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#119200]'>
          Past Projects
        </p>
        <h2 className='py-4'>View your contribution</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Project2'
            backgroundImg={Project2}
            projectUrl='/'
            tech='Vue Vuex JS'
          />
          <ProjectItem
            title='Project3'
            backgroundImg={Project3}
            projectUrl='/'
            tech='Vue JS'
          />
          <ProjectItem
            title='Project4'
            backgroundImg={Project4}
            projectUrl='/'
            tech='Vue JS'
          />
          <ProjectItem
            title='Project5'
            backgroundImg={Project5}
            projectUrl='/'
            tech='Vue JS'
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
