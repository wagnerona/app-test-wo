import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
import door1 from '../Images/Doors.png';
import door2 from '../Images/Doors.png';
import beach from '../Images/Beach.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Home = () => {
  const [door1Position, setDoor1Position] = useState('center');
  const [door2Position, setDoor2Position] = useState('center');
  const [beachClosed, setBeach] = useState();
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const videoRef = useRef(null);

  const handleClick = () => {
    if (door1Position === 'center' && door2Position === 'center') {
      setDoor1Position('left');
      setDoor2Position('right');
      setBeach('open');
      setDoorsOpen(true);
    } else {
      setDoor1Position('center');
      setDoor2Position('center');
      setBeach('closed');
      setDoorsOpen(false);
    }
  };

  const handleClose = () => setShowVideoPlayer(false);



  return (
    <section name="home" className="bg-pattern h-screen flex-col items-center justify-center bg-[#FFDDBA] text-white">
      <header >
        <h1 className='text-center text-4xl pt-28 pb-10'>THIS IS A CAMPAIGN FOR A DESTINATION</h1>
      </header>
      <div className='w-full h-[28vw] flex overflow-hidden relative'>
        <img
          src={beach}
          alt='Beach'
          onClick={() => { handleClick() }}
          className={`beach ${beachClosed} mr-auto`}
        />
        {doorsOpen && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className='video-button pl-10 py-3 flex items-center hover:scale-110 duration-500 shadow-md'
              onClick={() => setShowVideoPlayer(true)}
            >
              <span className='mr-6 ml-4'>WATCH VIDEO</span>
              <FaChevronRight size={23} />
            </button>
          </div>
        )}
        {showVideoPlayer && (
          <div className='video-player absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
            <video
              ref={videoRef}
              width="600px"
              height="300px"
              autoPlay
              controls
            >
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <button className="close-video absolute bg-slate-600 rounded px-2 py-1 opacity-20 hover:opacity-100 hover:bg-[#FF7BAC]" onClick={() => handleClose()}>Close Video</button>
          </div>
        )}
        <img
          src={door1}
          alt='Door 1'
          onClick={() => handleClick()}
          className={`cursor-pointer door door1 ${door1Position} ml-auto z-20`}
        />
        <img
          src={door2}
          alt='Door 2'
          onClick={() => { handleClick() }}
          className={`cursor-pointer door door2 ${door2Position} mr-auto z-20`}
        />
      </div>
      {showVideoPlayer && (
        <div onClick={() => handleClose()} className='video-overlay w-full h-screen z-30'>
        </div>
      )}

      <div className='flex-col '>
        <div className='flex justify-center pt-10 pb-3 text-[#FF7BAC]'>
          <FaChevronLeft className='cursor-pointer' size={30} onClick={() => { handleClick() }} /> <FaChevronRight className='cursor-pointer' size={30} onClick={() => { handleClick() }} />
        </div>
        <h2 className='text-center text-4xl'>
          SLIDE THE WINDOW  <br /> <span className='explore-text'>TO EXPLORE</span>
        </h2>

      </div>
    </section>

  );
}


export default Home