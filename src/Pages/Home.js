import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import door1 from '../Images/Doors.png';
import door2 from '../Images/Doors.png';
import beach from '../Images/Beach.png';

const Home = () => {
  const [door1Position, setDoor1Position] = useState('center');
  const [door2Position, setDoor2Position] = useState('center');
  const [beachClosed, setBeach] = useState();

  const handleClick = () => {
    setDoor1Position('left');
    setDoor2Position('right');
    setBeach('open');
  };

  return (
    <section name="home" className="bg-pattern h-screen flex items-center justify-center bg-[#FFDDBA] text-white">
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
    </section>
  );
}


export default Home