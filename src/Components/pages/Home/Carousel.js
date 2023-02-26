import React, { useEffect, useState } from 'react';
import GreaterThan from '../../../Assets/greaterthan.png';
import './Carousel.css';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='h-[310px] bg-white rounded-2xl inline-flex' style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         updateIndex(activeIndex+1);
    //     }, 1000);
    //     return()=>{
    //         if(interval){
    //             clearInterval(interval);
    //         }
    //     }
    // })

    // const handlers = useSwipeable({
    //     onSwipedLeft: () => updateIndex(activeIndex + 1),
    //     onSwipedRight: () => updateIndex(activeIndex - 1),
    // })

    return (
        <div className='overflow-hidden'>
            <div className='flex justify-end gap-5 w-full mb-8'>
                <button className='bg-white rounded-xl px-5 py-4 hover:shadow-sm shadow-lg transition-all arrowShadow' onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    <img src={GreaterThan} alt="Grater than" className='rotate-180' />
                </button>
                <button className='bg-white rounded-xl px-5 py-4 shadow-lg hover:shadow-sm transition-all arrowShadow' onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                    <img src={GreaterThan} alt="Grater than" className='' />
                </button>
            </div>
            <div className='whitespace-nowrap' style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.6s' }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    )
}

export default Carousel