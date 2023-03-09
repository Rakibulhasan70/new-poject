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
        <section className="services-banner h-[80vh] flex items-center">
          <div className="py-[50px] md:py-0">
            <h1 className="text-4xl text-white font-bold text-center">
              OUR SERVICES
            </h1>
            <p className="text-white text-2xl font-sans md:text-center py-9 px-5 lg:px-[80px] text-justify">
              Softonix provide comprehensive and reliable solutions for all your
              technology needs. From network design and implementation to
              cybersecurity and cloud computing, our team of experienced
              professionals is dedicated to ensuring that your systems are
              running smoothly and securely.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all tracking-wider text-white px-9 py-4 text-xl font-bold rounded-full">
                <Link to="/ourTeam"> HIRE OUR TEAM </Link>
              </button>
            </div>
          </div>
        </section>
        <div className="we-are-different-bg grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center items-center py-10 px-5 lg:px-14">
          <div className="">
            <h1 className="text-2xl text-center lg:text-start lg:text-4xl text-white font-bold lg:border-l-4 pl-5 border-white">
              Why Softonix is Different
            </h1>
            <p className="text-white mt-5 text-xl font-sans text-justify">
              we are prioritizing customer satisfaction and building strong
              relationships with clients.And we also Offering reliable price.
            </p>
            <button className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all py-3 px-6 rounded-md text-white my-5">
              <Link to="/contactUs">Contact us</Link>
            </button>
          </div>
          <div>
            <diV className="flex items-center pt-7 lg:ml-8 mb-5">
              <div className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2">
                <GiLovers className="w-[30px] h-[30px] text-white"></GiLovers>
              </div>
              <div className="text-white pl-4 lg:pl-8">
                <p className="text-xl font-bold">
                  Softonix Love Helping People
                </p>
                <p className="font-sans text-justify">
                  Softonix that loves helping people would also prioritize
                  communication, transparency, and responsiveness. we would be
                  proactive in anticipating and addressing issues, and we would
                  always be available to offer support and guidance when needed.
                </p>
              </div>
            </diV>
            <diV className="flex items-center  lg:ml-8 mb-5">
              <div className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2">
                <FaHandsHelping className="w-[30px] h-[30px] text-white"></FaHandsHelping>
              </div>
              <div className="text-white pl-4 lg:pl-8">
                <p className="text-xl font-bold">
                  Softonix Committed to Excellence
                </p>
                <p className="font-sans text-justify">
                  Softonix is committed to excellence would prioritize investing
                  in the latest technology, tools, and talent to deliver
                  best-in-class solutions. we would continuously improve our
                  processes and workflows to ensure that we are efficient,
                  effective, and aligned with industry best practices.
                </p>
              </div>
            </diV>
            <diV className="flex items-center lg:ml-8">
              <div className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all rounded-full inline-block p-6 border-2">
                <GiThink className="w-[30px] h-[30px] text-white"></GiThink>
              </div>
              <div className="text-white pl-4 lg:pl-8">
                <p className="text-xl font-bold">Softonix Forward Thinking</p>
                <p className="font-sans text-justify">
                  Softonix is forward-thinking would prioritize long-term
                  strategic planning, risk management, and sustainability. we
                  would seek to build strong, long-term relationships with our
                  clients, based on trust, transparency, and a shared commitment
                  to achieving business success.
                </p>
              </div>
            </diV>
          </div>
        </div>
      </section>
      <section className=" mx-8 mt-7 md:mx-20">
        <div class="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-2">
            We Offer a Wide
          </h2>
          <h2 className="text-center text-3xl lg:text-5xl font-bold">
            Variety of IT Services
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-last lg:order-first">
            <h2 className=" text-2xl md:text-3xl font-bold">
              <span className="border-b-2 pb-2 border-sky-500">
                Javascript Dev
              </span>
              elopment
            </h2>
            <p className="text-xl text-justify my-5 font-sans">
              JavaScript is a high-level, interpreted programming language used
              primarily to create interactive web pages and web applications. It
              is a client-side scripting language that can be embedded directly
              into HTML documents to enhance their functionality, or it can be
              used to create standalone applications.
            </p>
            <li className="text-xl text-justify mb-3 font-sans">
              JavaScript is a versatile and flexible language that supports
              multiple programming paradigms, including object-oriented,
              functional, and procedural programming. It is also an event-driven
              language, which means that it can respond to user input or system
              events by triggering specific actions.
            </li>
            <li className="text-xl text-justify mb-3 font-sans">
              One of the key features of JavaScript is its ability to manipulate
              the Document Object Model (DOM), which is a hierarchical tree
              structure that represents the elements and content of a web page.
              With JavaScript, developers can add, remove, modify, or manipulate
              DOM elements dynamically, making it possible to create highly
              interactive and responsive web pages and applications.
            </li>
            <li className="text-xl text-justify mb-3 font-sans">
              JavaScript is also widely used for server-side programming, using
              technologies like Node.js, which allows JavaScript to be used for
              building scalable, high-performance, and real-time applications.
              Some of the popular frameworks and libraries used for JavaScript
              development include React, Angular, Vue.js, and jQuery. These
              frameworks provide developers with a set of tools, components, and
              patterns for building complex web applications quickly and
              efficiently.
            </li>
          </div>
          <div className=" flex justify-center items-center ">
            <img src={jsDev}></img>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div className="flex justify-center items-center ">
            <img src={jsDev}></img>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">
              <span className="border-b-2 border-sky-500 pb-2">Web Develo</span>
              pment
            </h2>
            <p className="text-xl text-justify my-5 font-serif">
              Web development refers to the process of creating and maintaining
              websites and web applications that are accessible through the
              internet or intranet. It involves a range of activities, including
              web design, web content development, client-side scripting,
              server-side scripting, and network security configuration.
            </p>
            <li className="text-xl text-justify mb-3 font-serif">
              Web development typically starts with the creation of a website
              design that includes the layout, color scheme, typography, and
              other visual elements. This design is usually created using tools
              like Adobe Photoshop or Sketch, and it serves as a blueprint for
              the development of the website.
            </li>
            <li className="text-xl text-justify mb-3 font-serif">
              The next step in web development is web content development, which
              involves creating and organizing the text, images, and multimedia
              elements that will be included on the website. This content is
              typically created using HTML, CSS, and JavaScript, which are the
              core technologies of web development.
            </li>
            <li className="text-xl text-justify mb-3 font-serif">
              Client-side scripting involves writing JavaScript code that runs
              in the user's web browser, and it is used to create interactive
              and dynamic web pages. This includes tasks like form validation,
              animation, and handling user input. Server-side scripting involves
              writing code that runs on the web server and is used to generate
              dynamic content in response to user requests. This includes tasks
              like database integration, user authentication, and data
              processing.
            </li>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div className="order-last lg:order-first">
            <h2 className="text-3xl font-bold">
              <span className="border-b-2 border-sky-500 pb-2">Web Des</span>ign
            </h2>
            <p className="text-xl text-justify my-5 font-sans">
              Web design development is the process of creating and maintaining
              websites, including the design, layout, and functionality. It
              involves various disciplines, including graphic design, interface
              design, coding, and content creation.
            </p>
            <li className="text-xl text-justify mb-3 font-sans">
              The design aspect of web development involves creating the visual
              elements of a website, such as the layout, color scheme,
              typography, and graphics. The design should be aesthetically
              pleasing and user-friendly, and should also align with the brand's
              identity and message. A good web design should also be responsive,
              meaning it should be optimized to display properly on different
              devices, such as desktops, tablets, and smartphones.
            </li>
            <li className="text-xl text-justify mb-3 font-sans">
              The development aspect of web development involves writing the
              code that powers the website's functionality. This includes
              creating the structure of the website using HTML, styling the
              website using CSS, and adding interactivity using JavaScript. Web
              developers also use various web development frameworks, libraries,
              and tools to simplify the development process and enhance the
              website's functionality.
            </li>
            <li className="text-xl text-justify mb-3 font-sans">
              In summary, web design development is the process of creating and
              maintaining a website, which involves designing the visual
              elements, coding the website's functionality, and creating and
              managing the content. A good web design should be aesthetically
              pleasing, user-friendly, and responsive, while the development
              should focus on creating a functional and efficient website.
            </li>
          </div>
          <div className=" flex justify-center items-center">
            <img src={jsDev}></img>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div className=" flex justify-center items-center">
            <img src={jsDev}></img>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">
              <span className="border-b-2 border-[#43BAFF] pb-2">
                Mobile Develo
              </span>
              pment
            </h2>
            <p className="text-xl text-justify my-5 font-serif">
              Mobile development is the process of creating mobile applications
              that run on mobile devices such as smartphones and tablets. Mobile
              development involves designing, building, and testing mobile
              applications across different operating systems such as iOS and
              Android.
            </p>
            <li className="text-xl text-justify mb-3 font-serif">
              Mobile development includes different types of applications such
              as native applications, hybrid applications, and web applications.
              Native applications are built specifically for a particular
              operating system and provide the best performance and user
              experience. Hybrid applications are a mix of native and web
              applications and can be used across multiple platforms. Web
              applications are accessed through a web browser and do not require
              installation on the device.
            </li>
            <li className="text-xl text-justify mb-3 font-serif">
              Mobile development involves multiple stages such as planning,
              design, development, testing, and deployment. During the planning
              stage, the developer identifies the requirements, target audience,
              and platform for the application. In the design stage, the
              developer creates wireframes, prototypes, and designs the user
              interface. In the development stage, the developer codes the
              application and integrates features. In the testing stage, the
              developer tests the application for bugs, performance issues, and
              user experience. Finally, in the deployment stage, the application
              is released to the app stores.
            </li>
            <li className="text-xl text-justify mb-3 font-serif">
              In summary, mobile development is the process of creating mobile
              applications for different operating systems such as iOS and
              Android. It involves designing, building, and testing applications
              using programming languages, SDKs, and APIs. Mobile development
              follows different stages such as planning, design, development,
              testing, and deployment.
            </li>
          </div>
        </div>
      </section>
      <section className="my-8 mx-5 md:mx-9 bg-[#322B5D] mt-[50px] rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8">
          <div className="order-last lg:order-first">
            <h3 className="text-2xl md:text-4xl font-bold py-4 text-white">
              Ready to talk about your next project with us?{" "}
            </h3>
            <p className="py-4 text-xl text-white">
              Helping startups to Fortune 500 companies achieve their digital
              transformations since 2013.
            </p>
            <button className="bg-[#43BAFF] hover:bg-[#7141B1] transition-all py-3 px-6 rounded-md text-white">
              CONTACT US
            </button>
          </div>
          <div className="order-first lg:order-last">
            <img className="rounded-md" src={readyToTalk}></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesDetails
