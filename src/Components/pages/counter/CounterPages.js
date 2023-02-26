import React from 'react';
import './Counter.css'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import projectIcon from "../../../Assets/projectcompleted.png";
import happyClint from "../../../Assets/happyclint.png";
import lunchedProject from "../../../Assets/lunchedproject.png";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

const CounterPages = () => {
  return (
    <section className="lg:py-20 md:py-20 py-5">
      <div className="max-w-7xl lg:mx-auto md:mx-8 lg:px-8 mx-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-12 md:gap-12 gap-5">
          <div className="col-md-4">
            <section class="icon-main-container">
              <div class="icon-main">
                <div class="big-circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png"
                      alt="web design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png"
                      alt="game design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png"
                      alt="game dev icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png"
                      alt="ui-ux icon"
                    />
                  </div>
                </div>
                <div class="circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png"
                      alt="app icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                      alt="blockchain icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                      alt="ar-vr icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div class="center-logo">
                  <span class="text-3xl font-bold text-blue-500">
                    {" "}
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp end={30} duration={5} /> : 30}
                        </div>
                      )}
                    </VisibilitySensor>
                    +
                  </span>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-center flex-col">
              <img className="icon mt-10 w-16" src={happyClint} alt="..." />
              <h3 className="lg:text-2xl md:text-xl text-lg text- font-bold lg:mt-4 md:mt-4 mt-0">
                Satisfied Clients
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <section class="icon-main-container">
              <div class="icon-main">
                <div class="big-circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png"
                      alt="web design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png"
                      alt="game design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png"
                      alt="game dev icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png"
                      alt="ui-ux icon"
                    />
                  </div>
                </div>
                <div class="circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png"
                      alt="app icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                      alt="blockchain icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                      alt="ar-vr icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div class="center-logo">
                  <span class="text-3xl font-bold text-blue-500">
                    {" "}
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp end={50} duration={5} /> : 50}
                        </div>
                      )}
                    </VisibilitySensor>
                    +
                  </span>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-center flex-col">
              <img className="icon mt-10 w-16" src={projectIcon} alt="..." />
              <h3 className="lg:text-2xl md:text-xl text-lg font-bold lg:mt-4 md:mt-4 mt-0">
                Project Completed
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <section class="icon-main-container">
              <div class="icon-main">
                <div class="big-circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png"
                      alt="web design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png"
                      alt="game design icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png"
                      alt="game dev icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png"
                      alt="ui-ux icon"
                    />
                  </div>
                </div>
                <div class="circle">
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png"
                      alt="app icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                      alt="blockchain icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                      alt="ar-vr icon"
                    />
                  </div>
                  <div class="icon-block">
                    <img
                      src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div class="center-logo">
                  <span class="text-2xl font-bold text-blue-500">
                    {" "}
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp end={10} duration={2} /> : 10}
                        </div>
                      )}
                    </VisibilitySensor>
                    +
                  </span>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-center flex-col">
              <img
                className="icon mt-10 w-16"
                src={lunchedProject}
                alt="..."
              />
              <h3 className="lg:text-2xl md:text-xl text-lg font-bold mt-4 ">
                Project Lunched
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterPages;