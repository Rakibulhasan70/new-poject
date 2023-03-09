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
        question: "What services does Softonix offer?",
        answer:
          " Softonix offers a wide range of services including network and infrastructure management, software development, web development, Bug Fixing, frontend Development, and digital transformation consulting.",
      },
      {
        question: "How experienced are Softnoix professionals?",
        answer:
          "Softonix professionals have a wealth of experience in the industry and possess diverse skill sets. Many of our team members hold advanced degrees and industry certifications, and we encourage ongoing professional development to stay current with the latest technologies and trends.",
      },
      {
        question: "How do you ensure the security of client data?",
        answer:
          "We take data security very seriously and have robust measures in place to protect our clients' data. This includes using secure servers, implementing encryption protocols, enforcing strict access controls, and conducting regular security audits.",
      },
      {
        question:
          "Can you provide references or case studies of your previous work?",
        answer:
          "Yes, we can provide references and case studies upon request. We have worked with a wide range of clients across various industries and have successfully completed numerous projects.",
      },
      {
        question: "What is your pricing model?",
        answer:
          "Our pricing model varies depending on the scope and complexity of the project. We typically offer both fixed-price and time-and-materials pricing options to accommodate different client needs.",
      },
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