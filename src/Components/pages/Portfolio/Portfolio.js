import React from 'react';
import './Portfolio.css'
import worker from '../../../Assets/services-img/mobile-development.png'

const Portfolio = () => {
    return (
        <div className=''>
            <div className='portfolio-bg'>
                <div className='portfolio-container'>
                    <div className='portfolio-extra'>
                        <h1>Our Portfolio</h1>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-1'>
                {/* project 1 */}
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 max-w-7xl mx-auto px-8 sm:mx-6 bg-[#f3f0ff] shadow-xl borde my-10 rounded-md justify-center items-center'>
                    <div className='mt-5 '>
                        <img src={worker} alt="" />
                    </div>
                    <div className='my-5 '>
                        <h2 className='portfolio-project-title'>Project One</h2>
                        <p className='portfolio-project-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in expedita iste quidem, vitae voluptates ab, tenetur tempora eos, labore minima? Vitae impedit .</p>
                        <p className='mt-5 font-medium text-lg'>Technology</p>
                        <p className='mt-2 font-semibold text-xl'>
                            React Js , Node Js , MongoDB , Redux.
                        </p>
                    </div>
                </div>

                {/* project 2 */}


                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 max-w-7xl mx-auto px-8 sm:mx-6 bg-[#ffffff] shadow-xl border my-10 rounded-md justify-center items-center '>
                    <div className='my-5 order-1 lg:order-0'>
                        <h2 className='portfolio-project-title'>Project Two</h2>
                        <p className='portfolio-project-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in expedita iste quidem, vitae voluptates ab, tenetur tempora eos, labore minima? Vitae impedit .</p>
                        <p className='mt-5 font-medium text-lg'>Technology</p>
                        <p className='mt-2 font-semibold text-xl'>
                            React Js , Node Js , MongoDB , Redux.
                        </p>
                    </div>
                    <div className='mt-5 order-0 lg:order-1'>
                        <img src={worker} alt="" />
                    </div>
                </div>

                {/* project 3 */}


                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 max-w-7xl mx-auto px-8 sm:mx-6 bg-[#f3f0ff] shadow-xl borde my-10 rounded-md justify-center items-center'>
                    <div className='mt-5'>
                        <img src={worker} alt="" />
                    </div>
                    <div className='my-5'>
                        <h2 className='portfolio-project-title'>Project Three</h2>
                        <p className='portfolio-project-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in expedita iste quidem, vitae voluptates ab, tenetur tempora eos, labore minima? Vitae impedit .</p>
                        <p className='mt-5 font-medium text-lg'>Technology</p>
                        <p className='mt-2 font-semibold text-xl'>
                            React Js , Node Js , MongoDB , Redux.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;