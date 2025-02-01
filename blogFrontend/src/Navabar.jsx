import React, { useState } from 'react'
import './Navbar.css'
import { FaRegPenToSquare } from "react-icons/fa6";

const Navabar = ({ formHandle }) => {


    return (
        <div>
            <nav>
                <a href="#" className='appName'><h1>#</h1></a>
                <div className='nav-right'>
                    <div className='create-i-con'>
                        <button onClick={formHandle} className='create-icon'><FaRegPenToSquare size={20} /></button>
                    </div>
                    <a href="#">
                        <img src="WhatsApp Image 2024-04-18 at 11.59.23_225fdc80.jpg" alt="profilePic" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navabar