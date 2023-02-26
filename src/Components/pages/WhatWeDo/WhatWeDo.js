import React from 'react';
import './WhatWeDo.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import whatWeDo from '../../../Assets/home-img/what-we-do.png';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <section className='what-we-do-bg mt-[70px]'>
            <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-4 gap-8 justify-center justify-items-center items-center'>
                    <div>
                        <h2 className='text-white md:text-4xl text-2xl font-bold py-6 md:text-start text-center'>What We Actually Do</h2>
                        <div className='flex md:justify-start justify-center md:gap-5 mb-5 mt-3'>
                            <div className='tech-icon-container'>
                                <FaReact className='tech-icon'></FaReact>
                            </div>
                            <div className='tech-icon-container'>
                                <FaNodeJs className='tech-icon'></FaNodeJs>
                            </div>
                            <div className='tech-icon-container'>
                                <SiExpress className='tech-icon'></SiExpress>
                            </div>
                            <div className='tech-icon-container'>
                                <SiMongodb className='tech-icon'></SiMongodb>
                            </div>
                        </div>
                        <h4 className='text-white md:text-2xl text-xl font-bold py-2 md:text-start text-center'>MERN Website Development Services</h4>
                        <p className='text-white md:text-lg text-base md:text-start text-center'>Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
                        <div className='flex md:justify-start justify-center'>
                            <Link to='/contact-us' className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all md:py-3 py-2 md:px-6 px-4 rounded-md text-white mt-8 flex justify-center'>CONTACT US</Link>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <img src={whatWeDo} alt='What-we-do inner pic' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;