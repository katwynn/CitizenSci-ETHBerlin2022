import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Algforskarsommar from '../public/assets/projects/Algforskarsommar.png';
import Aurora from '../public/assets/projects/Aurora.png'
import Butterfly from '../public/assets/projects/Butterfly Migration.png'
import MarineMammals from '../public/assets/projects/Marine Mammals in Belgium.png'
import CitizenObservatory from '../public/assets/projects/Citizen Observatory of Drought.png'
import Naturens from '../public/assets/projects/Naturens kalender.png'
import ProjectItem from './ProjectItem';

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
            backgroundImg={Algforskarsommar}
            projectUrl='/picturepile'
            tech='A citizen sci project'
          />
          <ProjectItem
            title='Aurora'
            backgroundImg={Aurora}
            projectUrl='https://eu-citizen.science/project/361'
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
            title='Vuex To Do App'
            backgroundImg={Butterfly}
            projectUrl='https://eu-citizen.science/project/357'
            tech='Vue Vuex JS'
          />
          <ProjectItem
            title='ggQuest'
            backgroundImg={CitizenObservatory}
            projectUrl='https://eu-citizen.science/project/358'
            tech='Vue JS'
          />
          <ProjectItem
            title='ggQuest'
            backgroundImg={MarineMammals}
            projectUrl='https://eu-citizen.science/project/285'
            tech='Vue JS'
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
