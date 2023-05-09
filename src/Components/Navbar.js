import React from 'react'
// import { Link } from 'react-router-dom'
import Logos from '../Images/Logos.png'

const Navbar = () => {
    return (
        <header className='fixed w-full h-[60px] flex justify-end items-center px-5 shadow-md shadow-bottom bg-[#0097A7] z-0'>

            <div>
                <img src={Logos} alt='Logo'/>
            </div>

        </header>
    )
}

export default Navbar

