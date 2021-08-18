import React, { FC, useEffect } from 'react';
import doodle from '@jalba/react-css-doodle';

interface NavProps {}

const gridSize = 2;
const gridGap = '2';

const background = () => 'red';

const FancyDoodle = doodle`
:doodle {
    @grid: 25x1 / 18vmin;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    
  }
  :container {
        size: 100vmax; 
    perspective: 240px;
    transform-style: preserve-3d;
    animation: r-doodle 30s linear infinite;
  }

  height: 5px; 
  will-change: transform; 
  transform-style: preserve-3d;
  box-shadow: 0 0 5px rgba(255, 255, 255, .65); 
  background: hsla(
    calc(10 + @index()), 80%, 60%, @rand(.8) 
  );    
  
  --tz: @rand(60vmax, 80vmax);
  --sc: @rand(1, 6, .1); 
     
  transform: 
    rotateY(0) 
    scaleX(var(--sc)) 
    translateZ(var(--tz));

  animation: cycle @rand(1s, 5s, .1) linear infinite;
  animation-delay: @rand(0s, 4s, .1);
  
  @keyframes cycle {
    to { transform: 
      rotateY(1turn) 
      scaleX(var(--sc)) 
      translateZ(var(--tz));
    }
  }
  
  @keyframes r-doodle {
    to { transform: 
      rotateX(@pick(-2turn, 2turn)) 
      rotateY(@pick(-2turn, 2turn)) 
      rotateZ(@pick(-2turn, 2turn)) 
    }
  }
`;

const Nav: FC<NavProps> = () => {
  return (
    <>
      <header className='sticky top-0 z-50 bg-gray-100'>
        <nav className='flex justify-between bg-white shadow'>
          <div className='group bg-gray-100 h-20 pt-5 ml-10 px-2'>
            <a
              href='/home'
              className='text-4xl no-underline text-pink-600 group-hover:text-yellow-500 font-sans font-bold'
            >
              C
            </a>
            <a
              href='/home'
              className='text-4xl no-underline text-yellow-500 group-hover:text-pink-600 font-sans font-bold'
            >
              K
            </a>
            {/* <br />
          <span className="text-xs text-grey-dark">Beautiful New Tagline</span> */}
          </div>
          <div className='sm:mb-0 self-center'>
            <button className='whitespace-nowrap bottom-5 lg:static md:static sm:static transition duration-500 ease-in-out hover:bg-yellow-500 transition transform hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none text-md font-bold uppercase no-underline text-white hover:text-gray-100 ml-2 px-1 bg-pink-600 py-2 px-12 rounded-lg ml-10 mr-5'>
              Start Project
            </button>
            {/* <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> */}

            {/* </div> */}
          </div>
        </nav>
      </header>

      <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-screen h-80 flex justify-center headerNav bg-gray-500 mb-10'>
        <FancyDoodle />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <polygon
            className='svg--sm'
            fill='#f3f4f6'
            points='0,0 30,100 65,10 90,100 100,75 100,100 -10,115'
            style={{
              strokeWidth: 0.4,
              stroke: 'rgb(0, 0, 0)',
            }}
          />

          <polygon
            className='svg--lg'
            points='0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 -10,100'
            fill='#f3f4f6'
            style={{
              strokeWidth: 0.22,
              stroke: 'rgb(0, 0, 0)',
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default Nav;
