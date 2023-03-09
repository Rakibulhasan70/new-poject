import React from 'react';
import './Services.css'
import setting from '../../../Assets/setting.png'
import speed from '../../../Assets/speed.png'
import protect from '../../../Assets/protect.png'
import backup from '../../../Assets/backup.png'
import freessl from '../../../Assets/freessl.png'
import database from '../../../Assets/database.png'

const Service = () => {
    return (
      <div>
        <section class="services">
          <div class="s-container">
            <div class="mt-[100px] mb-9">
              <h2 className="text-center md:text-4xl text-2xl font-bold mb-2">
                We Offer a Wide Variety
              </h2>
              <h2 className="text-center md:text-4xl text-2xl font-bold">
                of IT Services
              </h2>
            </div>
            <div class="services-box">
              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={setting} alt=".." />
                  </div>
                  <h4>Web Development</h4>
                  <p>
                    Creating a Seamless Online Experience with Web Development.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={speed} />
                  </div>
                  <h4>Fast Preformance</h4>
                  <p>
                    Lightning-Fast Performance: Optimizing Your Digital
                    Experience.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={protect} />
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>
                    Designing Intuitive Interfaces for Exceptional User
                    Experience.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={backup} />
                  </div>
                  <h4>Back-end Development</h4>
                  <p>
                    Enhancing Your Web Application's Functionality with Reliable
                    Backend Development.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={freessl} />
                  </div>
                  <h4>Mobile App Development</h4>
                  <p>
                    Revolutionizing Mobile Experience with Innovative App
                    Development.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="ser-box">
                  <div class="icon">
                    <img src={database} />
                  </div>
                  <h4>Product Engineering</h4>
                  <p>
                    From Concept to Creation: Streamlining Product Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Service;