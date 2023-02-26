import React from 'react'
import jsDev from '../../../Assets/services-img/mobile-development.png'
import mobileDev from '../../../Assets/services-img/web-desktop-mobileapp.png'
import serviceBanner from '../../../Assets/services-img/service-img.jpg'
import loveHelping from '../../../Assets/services-img/hand-holding-heart-svgrepo-com.svg'
import light from '../../../Assets/services-img/light-bulb-14-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import readyToTalk from '../../../Assets/ourt-team-img/ready-to-talk.webp'
import './ServicesDetails.css'
import { GiLovers, GiThink } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle'

function ServicesDetails() {
  useTitle("Services")
  return (
    <div>
      <section>
        <section className='services-banner h-[80vh] flex items-center'>
          <div className='py-[50px] md:py-0'>
            <h1 className='text-4xl text-white font-bold text-center'>OUR SERVICES</h1>
            <p className='text-white text-2xl font-sans md:text-center py-9 px-5 lg:px-[80px] text-justify'>Successful teamwork starts with individuals. We collaborate to reach common goals and together
              we achieve more to provide best solutions. Our teammates turn their work into a trustful
              and respectful partnership permeating every aspect of our team activity.</p>
            <div className='flex justify-center'>
              <button className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all tracking-wider text-white px-9 py-4 text-xl font-bold rounded-full'>HIRE OUR TEAM</button>
            </div>
          </div>
        </section>
        <div className='we-are-different-bg grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center items-center py-10 px-5 lg:px-14'>
          <div className=''>
            <h1 className='text-2xl text-center lg:text-start lg:text-4xl text-white font-bold lg:border-l-4 pl-5 border-white'>Why We Are Different</h1>
            <p className='text-white mt-5 text-xl font-sans text-justify'>Our core values define who we are as a company as well as the people who work here. They are what drive us to succeed and what we strive for every day.</p>
            <button className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all py-3 px-6 rounded-md text-white my-5'>CONTACT US</button>
          </div>
          <div>
            <diV className="flex items-center pt-7 lg:ml-8 mb-5">
              <div className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2'>
                <GiLovers className='w-[30px] h-[30px] text-white'></GiLovers>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Love Helping People</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
            <diV className="flex items-center  lg:ml-8 mb-5">
              <div className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2'>
                <FaHandsHelping className='w-[30px] h-[30px] text-white'></FaHandsHelping>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Are Committed to Excellence</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
            <diV className="flex items-center lg:ml-8">
              <div className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2'>
                <GiThink className='w-[30px] h-[30px] text-white'></GiThink>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Are Forward Thinking</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
          </div>
        </div>
      </section>
      <section className=' mx-8 mt-7 md:mx-20'>
        <div class="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
          <h2 className='text-center text-3xl lg:text-5xl font-bold mb-2'>We Offer a Wide</h2>
          <h2 className='text-center text-3xl lg:text-5xl font-bold'>Variety of IT Services</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='order-last lg:order-first'>
            <h2 className=' text-2xl md:text-3xl font-bold'><span className='border-b-2 pb-2 border-sky-500'>Javascript Dev</span>elopment</h2>
            <p className='text-xl text-justify my-5 font-sans'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-sans'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-sans'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-sans'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
          <div className=' flex justify-center items-center '>
            <img src={jsDev}></img>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className='flex justify-center items-center '>
            <img src={jsDev}></img>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-sky-500 pb-2'>Web Develo</span>pment</h2>
            <p className='text-xl text-justify my-5 font-serif'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-serif'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-serif'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-serif'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className='order-last lg:order-first'>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-sky-500 pb-2'>Web Des</span>ign</h2>
            <p className='text-xl text-justify my-5 font-sans'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-sans'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-sans'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-sans'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
          <div className=' flex justify-center items-center'>
            <img src={jsDev}></img>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className=' flex justify-center items-center'>
            <img src={jsDev}></img>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-[#43BAFF] pb-2'>Mobile Develo</span>pment</h2>
            <p className='text-xl text-justify my-5 font-serif'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-serif'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-serif'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-serif'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
        </div>
      </section>
      <section className='my-8 mx-5 md:mx-9 bg-[#322B5D] mt-[50px] rounded-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
          <div className='order-last lg:order-first'>
            <h3 className='text-2xl md:text-4xl font-bold py-4 text-white'>Ready to talk about your next project with us? </h3>
            <p className='py-4 text-xl text-white'>Helping startups to Fortune 500 companies achieve their digital transformations since 2013.</p>
            <button className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all py-3 px-6 rounded-md text-white'>CONTACT US</button>
          </div>
          <div className='order-first lg:order-last'>
            <img className='rounded-md' src={readyToTalk}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesDetails
