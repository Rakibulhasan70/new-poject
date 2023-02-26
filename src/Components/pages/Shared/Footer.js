import React from 'react';
import FooterBg from '../../../Assets/footer-bg.png';
// import WhiteLogo from '../../Assets/white-logo.png';
import LocationIconYellow from '../../../Assets/location-icon-yellow.png';
import CallIconYellow from '../../../Assets/call-icon-yellow.png';
import EmailIconYellow from '../../../Assets/email-icon-yellow.png';
import FacebookLogo from '../../../Assets/facebook-icon.png';
import LinkedinLogo from '../../../Assets/linkedin-icon.png';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className='bg-[#0E0A31]'>
                <div className='max-w-7xl lg:mx-auto md:mx-auto mx-5 pt-20'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-20 gap-5 pb-12 FooterListBorder2'>
                        <div className='grid grid-cols-1 gap-8'>
                            {/* <img src={WhiteLogo} alt='White Logo' className='lg:w-44 md:w-44 w-36' /> */}
                            <p className='text-base text-[#E3E6EA]'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages</p>
                            <div className='grid grid-cols-1 gap-2'>
                                <p className='bg-[#322B5D] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={CallIconYellow} alt='' />+880125 455785 55</p>
                                <p className='bg-[#322B5D] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={EmailIconYellow} alt='' />hello@gmail.com</p>
                                <p className='bg-[#322B5D] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={LocationIconYellow} alt='' />Company address, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Our Work</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>About Us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Vision and Values</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Meet the Team</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Collaboration</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Publications</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Learn</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a mentor</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Community Members</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a Partner</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Mentor Hub</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Partner Hub</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Support</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Help & FAQ</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Events</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Contact us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Terms of service</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Live Chat</Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex grid grid-cols-1 justify-between items-center py-6'>
                        <div>
                            <p className='text-[#E3E6EA] text-base'>© 2022 Copyrights by <span className='text-[#F74F22] font-semibold'>Softonixt Technologies.</span> All Rights Reserved.</p>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <Link to=''><img src={FacebookLogo} alt='Facebook logo' className='bg-[#322B5D] rounded-md px-4 py-4' /></Link>
                            <Link to=''><img src={LinkedinLogo} alt='Facebook logo' className='bg-[#322B5D] rounded-md px-4 py-4' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer