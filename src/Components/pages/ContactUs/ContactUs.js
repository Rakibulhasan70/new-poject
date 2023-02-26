import React, { useState } from "react";
import "./Contactus.css";
import contact_img from "../../../Assets/Business team work.png";

import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import useTitle from "../../../hooks/useTitle";

const ContactUs = () => {
  const [value, setValue] = useState();
  useTitle("Contact Us")
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <section className="max-w-7xl lg:mx-auto md:mx-5 mx-5">
        <div className="my-12">
          <h1 className="text-[#131313] lg:text-4xl md:text-3xl text-2xl font-bold text-center">CONTACT USS</h1>
          <div className="flex items-center justify-center my-5">
            <div className="decor-left">
              <span></span>
            </div>
            <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Quick Contact</p>
            <div className="decor-right">
              <span></span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-base text-[#848484] text-center lg:w-1/2 md:w-3/4 w-full">We are looking forward to work with you. Please contact us to discuss more about your preferred service. Don't miss out.</p>
          </div>
        </div>
        <div className="lg:flex md:flex grid grid-cols-1 items-center mb-12">
          <div className="lg:w-[30%] md:w-[30%] w-full py-24 lg:px-0 md:px-2 px-0 bg-[#43BAFF] lg:rounded-l-md md:rounded-l-md rounded-l-none">
            <p className="text-white text-xl text-center">Affordable Pricing</p>
            <p className="text-[#fff] text-xl text-center">Lorem Ipsum is simply dummy</p>
          </div>
          <div className="lg:w-[40%] md:w-[40%] w-full lg:py-12 md:py-8 py-12 bg-[#0E0A31] lg:rounded-md md:rounded-md rounded-none">
            <h2 className="text-xl text-center font-bold text-[#fff] tracking-wider border-b-[2px] border-b-[#43BAFF] pb-2">SOFTONIXT</h2>
            <div className="lg:px-8 md:px-4 px-8">
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center border-b-[1px] border-b-[#737373] py-3">
                <p className="text-lg font-medium text-[#fff]">Address:</p>
                <p className="text-[#fff]">Lorem Ipsum, 40C, Lorem Ipsum dummy, Lorem Ipsum, Ch 98054</p>
              </div>
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center border-b-[1px] border-b-[#737373] py-3">
                <p className="text-lg font-medium text-[#fff]">Ph & Fax:</p>
                <div className="text-[#fff]">
                  <p>+123 456 789</p>
                  <p>test@info.com</p>
                </div>
              </div>
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center py-3">
                <p className="text-lg font-medium text-[#fff]">Address:</p>
                <div className="text-[#fff]">
                  <p>Mon-Fri: 9:30am - 6:30pm</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-full py-28 lg:px-0 md:px-2 px-0 bg-[#43BAFF] lg:rounded-r-md md:rounded-r-md rounded-r-none">
            <p className="text-white text-xl text-center"><span className="text-[#fff] text-bold">24/7</span> Real Time Support</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl lg:mx-auto md:mx-5 mx-5 py-12">
        <h1 className="text-[#131313] lg:text-4xl md:text-3xl text-2xl font-bold lg:ml-8 md:ml-8 ml-0 lg:text-start md:text-start text-center">GET IN TOUCH</h1>
        <div className="flex items-center my-5">
          <div className="decor-left">
            <span></span>
          </div>
          <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Send us a message</p>
          <div className="decor-right">
            <span></span>
          </div>
        </div>
        <div className="lg:flex md:flex grid grid-cols-1 lg:gap-12 md:gap-6 gap-12 pt-5">
          <div className="lg:w-3/5 md:w-3/5 w-full order-last md:order-first">
            <form className="flex flex-col gap-3">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <input id="name" type="text" placeholder="Your Name*" className="border-[1px] border-[#43BAFF] focus:border-[#7141B1] outline-none focus:outline-none p-4 w-full rounded-md" required />
                <input id="email" type="email" placeholder="Your Email*" className="border-[1px] border-[#43BAFF] focus:border-[#7141B1] outline-none focus:outline-none p-4 w-full rounded-md" required />
              </div>
              <PhoneInput
                country='bd'
                enableSearch='true'
              />
              <select className="text-[#848484] focus:border-[#7141B1] border-[1px] border-[#43BAFF] outline-none focus:outline-none p-4 w-full rounded-md" required>
                <option value="">Category</option>
                <option value="Website Creation">Website Creation</option>
                <option value="Graphics design">Graphics design</option>
                <option value="Responsive web site">Responsive web site</option>
                <option value="Bug Fixing">Bug Fixing</option>
                <option value="Others">Others</option>
              </select>
              <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required className="border-[1px] border-[#43BAFF] focus:border-[#7141B1] outline-none focus:outline-none p-4 w-full rounded-md" />
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} className="my-3" />
              <button className="submit-button full-width w-full" type="submit">
                <div className="svg-wrapper-1 mx-auto ">
                  <div className="svg-wrapper">
                    <svg
                      className="submit-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </form>
          </div>
          <div className="lg:w-2/5 md:w-2/5 w-full order-first md:order-last">
            <img className="w-75 rounded" src={contact_img} alt="" />
            <p className="lg:w-3/4 md:w-full w-full mt-5">We've driven online revenues of over $2 billion for our clients. Ready to know how we can help youu?</p>
            <div className="mt-5">
              <p className="text-xl font-bold">info@demo.com</p>
              <p className="text-xl font-bold">+91 11 1111 2900</p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl lg:mx-auto md:mx-auto mx-5">
      </div>
    </div>
  );
};

export default ContactUs;

