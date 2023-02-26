import React from 'react';
import Slider from 'react-slick';
import './LatestWork.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const LatestWork = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }

            }
        ]
    };
    return (
        <div className='mb-16 max-w-7xl lg:mx-auto md:mx-auto pl-8 py-12'>
            <div className='text-2xl font-semibold text-center font-mono bg-[#eff4fa] w-[50%] lg:w-[18%] mx-auto py-2  mb-10 rounded-xl'>
                <h2 >Latest Work</h2>
            </div>

            <Slider {...settings}>
                <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Project One</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Project Two</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>  <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title"> Project Three</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>  <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Four</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>  <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Project Five</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>  <div class="containers">

                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image rounded-xl" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Project Six</h3>
                                <p class="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Slider>

            <div className=' text-center mt-16 '>
                <Link to='/portfolio'>  <button className='seeMore'>See More</button></Link>
            </div>
        </div>
    );
};

export default LatestWork;