import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Technologies from '../Technology/Technologies';
import CounterPages from '../counter/CounterPages';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import useTitle from '../../../hooks/useTitle';
import LatestWork from '../Latest-Work/LatestWork';
import Review from '../Review/Review';

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <WhatWeDo></WhatWeDo>
      <CounterPages />
      <Review></Review>
      <Technologies />
      <LatestWork></LatestWork>
    </div>
  );
};

export default Home;