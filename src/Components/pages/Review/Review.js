import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Quote from '../../../Assets/quote.png';
// import Avatar from '../../../assets/avatar.png';
import Avatar from '../../../Assets/avatar.png';
import LocationIconRed from '../../../Assets/location-icon.png';


function Review() {
    const reviews = [
        {
            id: 1,
            name: "John Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            id: 2,
            name: "Jane Doe",
            text: "Praesent id est ac enim congue congue sit amet quis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            name: "Bob Johnson",
            text: "Aenean in nisi fringilla, tincidunt ante eu, hendrerit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    const [sliderRef, setSliderRef] = useState(null);
    const handlePrevious = () => {
        if (sliderRef) {
            sliderRef.slickPrev();
        }
    };
    const handleNext = () => {
        if (sliderRef) {
            sliderRef.slickNext();
        }
    };

    return (
        <section className='bg-sky-50 lg:p-12 md:p-12 p-5'>
            <div className='max-w-7xl lg:mx-auto md:mx-auto lg:px-5 lg:py-12 md:py-0 py-8'>
                <div className='md:flex grid grid-cols-1 lg:gap-24 md:gap-5 gap-8'>
                    <div className='md:w-1/2 w-full'>
                        <p className='lg:text-lg md:text-base text-sm font-semibold py-2 px-5 inline-block rounded-full text-[#0E0A31] bg-sky-200'>Our Feedbacks</p>
                        <p className='md:text-4xl text-2xl font-bold mb-3 text-[#2E3033] my-5'>What they're talking about us</p>
                        <p className='lg:text-lg md:text-lg text-base text-gray-600'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many.</p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className='flex justify-end gap-5 w-full md:mb-8 mb-4'>
                            <button className='bg-white rounded-xl px-4 py-4 arrowShadow' onClick={handlePrevious}>
                                <FaChevronLeft className='text-[#0E0A31] lg:text-2xl md:text-xl text-xl' />
                            </button>
                            <button className='bg-white rounded-xl px-4 py-4 arrowShadow' onClick={handleNext}>
                                <FaChevronRight className='text-[#0E0A31] lg:text-2xl md:text-xl text-xl' />
                            </button>
                        </div>
                        <Slider ref={(slider) => setSliderRef(slider)}>
                            {reviews.map((review) => (
                                <div key={review.id} className='w-full lg:p-10 md:p-8 p-5 grid grid-cols-1 bg-white rounded-xl relative'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <div>
                                                <img src={Avatar} alt='avatar' className='h-12 w-12 rounded-full border-4 border-[#E4E4E4]' />
                                            </div>
                                            <div>
                                                <p className='text-lg font-semibold text-[#2E3033]'>{review.name}</p>
                                                <p className='text-sm flex items-center gap-1 text-[#777B84]'><img src={LocationIconRed} alt='location' />Dhaka, Bangladesh</p>
                                            </div>
                                        </div>
                                        <div className='absolute top-5 md:right-5 right-0'>
                                            <img src={Quote} alt='Quote' className='md:w-full w-4/5' />
                                        </div>
                                    </div>
                                    <div className='inline-block pt-3 text-[#777B84]'>
                                        <p>{review.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Review
