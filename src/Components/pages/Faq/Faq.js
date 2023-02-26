import React, { useState } from 'react';
import './Faq.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import FaqGif from '../../../Assets/about-img/FAQ.gif'

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    // console.log(activeIndex);
    const handleClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    const questions = [
        {
            question: 'What is React?',
            answer:
                'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their application efficiently.'
        },
        {
            question: 'What is Tailwind CSS?',
            answer:
                'Tailwind CSS is a utility-first CSS framework that provides pre-defined classes for building custom UI designs. It aims to make the development process faster and more efficient by reducing the need for custom CSS styles.'
        },
        {
            question: 'What are hooks in React?',
            answer:
                'Hooks are functions that allow developers to use state and other React features in functional components. They were introduced in React 16.8 and have become an essential part of React development.'
        },
        {
            question: 'What is useState() hook?',
            answer:
                'useState() is a built-in React hook that allows developers to add state to functional components. It takes an initial value as a parameter and returns an array with the current state value and a function to update that value.'
        },
        {
            question: 'What is the purpose of useEffect() hook?',
            answer:
                'useEffect() is a built-in React hook that allows developers to perform side effects, such as updating the DOM or fetching data from an API, in functional components. It runs after every render and takes a function as a parameter.'
        }
    ];

    return (
        <div>
            <div className='max-w-7xl md:mx-auto mx-5 lg:px-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center items-center'>
                    <div className="">
                        {questions.map((q, index) => (
                            <div key={index} className="lg:my-4 md:my-2 my-2 bg-[#F6FAFF] rounded-lg">
                                <div className='px-3 pt-1'>
                                    <button className={`w-full text-left font-medium focus:outline-none flex items-center justify-between text-[#777B84] pb-1 ${activeIndex === index && 'text-[#0082C4] border-b border-[#E4F0FF]'}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <span>{q.question}</span>
                                        {activeIndex === index ? (
                                            <HiMinus size={20} className='font-semibold text-[#0082C4]' />
                                        ) : (
                                            <HiPlus size={20} className='font-semibold text-[#0082C4]' />
                                        )}
                                    </button>
                                </div>
                                <div className={`accordion-answer px-3 pb-1 text-[#777B84] ${activeIndex === index && 'accordion-answer-open'
                                    }`}
                                >
                                    {q.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={FaqGif} alt='Faq Gif' className='w-3/4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq