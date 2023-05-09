import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import door1 from '../Images/Doors.png';
import door2 from '../Images/Doors.png';
import beach from '../Images/Beach.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home = () => {
  const [door1Position, setDoor1Position] = useState('center');
  const [door2Position, setDoor2Position] = useState('center');
  const [beachClosed, setBeach] = useState();

  const handleClick = () => {
    if (door1Position === 'center' && door2Position === 'center') {
      setDoor1Position('left');
      setDoor2Position('right');
      setBeach('open');
    } else {
      setDoor1Position('center');
      setDoor2Position('center');
      setBeach('closed');
    }
  };


  return (
    <section name="home" className="bg-pattern h-screen flex-col items-center justify-center bg-[#FFDDBA] text-white">
      <header >
        <h1 className='text-center text-4xl pt-28 pb-10'>THIS IS A CAMPAIGN FOR A DESTINATION</h1>
      </header>
      <div className='w-full h-[28vw] flex overflow-hidden'>
        <img
          src={beach}
          alt='Beach'
          onClick={() => { handleClick() }}
          className={`beach ${beachClosed} mr-auto`}
        />

        <img
          src={door1}
          alt='Door 1'
          onClick={() => handleClick()}
          className={`cursor-pointer door door1 ${door1Position} ml-auto`}
        />

        <img
          src={door2}
          alt='Door 2'
          onClick={() => { handleClick() }}
          className={`cursor-pointer door door2 ${door2Position} mr-auto`}
        />
      </div>
      <div className='flex-col'>
        <div className='flex justify-center pt-10 pb-3 text-[#FF7BAC]'>
          <FaChevronLeft className='cursor-pointer' size={30} onClick={() => { handleClick() }} /> <FaChevronRight className='cursor-pointer' size={30} onClick={() => { handleClick() }} />
        </div>
        <h2 className='text-center text-4xl'>
          SLIDE THE WINDOW  <br /> <span className='explore-text'>TO EXPLORE</span> </h2>
      </div>
    </section>

  );
}


export default Home