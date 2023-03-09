import React from 'react';
import TypeWriterEffect from "react-typewriter-effect";
import './Banner.css'
import { FaPlay } from 'react-icons/fa';
import VideoModal from '../Shared/VideoModal';
import { useState } from 'react';

const Banner = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div className="bg-banner-home md:py-24 py-12">
        <div className="max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 justify-center items-center">
            <div>
              <h1 className="my-3 md:text-4xl text-2xl text-white font-bold">
                <span className="text-[#A370F0]">Softonix</span> - Digital IT
                Solutions
              </h1>
              <TypeWriterEffect
                className="md:text-4xl text-2xl text-white"
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#A370F0",
                  fontWeight: 900,
                  fontSize: "2em",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  "We provide Web Design",
                  "We provide Grapics Design",
                  "We provide Bug Fixing",
                  "We provide web Development",
                ]}
                multiTextDelay={1000}
                typeSpeed={90}
              />
              <p className="md:text-xl text-base text-white py-2">
                {/* Empowering Digital Transformation with Innovative IT Solutions. */}
                Softonox is a leading provider of innovative IT solutions
                designed to transform businesses of all sizes. With a team of
                expert technicians and developers, we specialize in creating
                custom software applications,and providing comprehensive IT
                support.
              </p>
              <div className="video-box">
                <div onClick={() => setOpen(true)} className="play-btn">
                  <FaPlay></FaPlay>
                </div>
                <span className="md:text-lg text-base">VIDEO SHOWCASE</span>
              </div>
              <VideoModal isOpen={isOpen} setOpen={setOpen}></VideoModal>
            </div>

            <div className="">
              <img
                className="rounded-lg border border-white"
                src="https://cdn.dribbble.com/users/1814344/screenshots/11954759/media/567476f9c2e4151e52edd69845c61fb1.png?compress=1&resize=768x576&vertical=top"
                alt=".."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-4 gap-5 md:mt-[-65px] mt-8">
          <div className="bg-gradient-to-r from-[#2F2572] to-[#6E3FAE] h-[130px] hover:mt-[-10px] transition-all shadow-2xl flex justify-center items-center text-white">
            <p className="text-xl p-3">
              Innovative IT Solutions for Your Business.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#6E3FAE] to-[#06D3F7] h-[130px] hover:mt-[-10px] transition-all shadow-2xl flex justify-center items-center">
            <p className="text-xl text-white p-3">
              Digital Transformation Made Simple with -{" "}
              <span className="text-[#06D3F7]">Softonix.</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#06DAFF] to-[#337ab7] h-[130px] hover:mt-[-10px] transition-all shadow-2xl flex justify-center items-center">
            <p className="text-xl text-white p-3">
              Building User-Friendly Websites & Web
              Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;