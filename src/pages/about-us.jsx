import React from 'react'
import '../App.css'
import NavLeft from '../component/nav-left'

export default function Aboutus() {
    return (
        <>
        <nav className="flex-r">
            <NavLeft />
        </nav>
        <div className='about-us'>

            <p>
                Welcome to <span className='gradient'>mylogo.ai</span>, we're dedicated to giving you the very best of logo designs.
            </p>

            <p>
                Founded in 2022 by Aditya Mishra. My interest in Deep Learning drove me to create something that I felt should be free and accessiable to all, so I created mylogo.ai. A tool which offers you fast and free logo designs. So that you can focus on other things that need your attention.
            </p>
            <p>
                I hope you enjoy my product as much as I enjoy offering it to you.
            </p>
            <p>
                Sincerely,

                <div>Aditya Mishra</div> 
            </p>

        </div>
        </>
    )
}
