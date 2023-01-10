import React, { useState } from 'react';
import { AdItem, Navbar } from '../components';
import Ads from '../components/Ads/Ads';

const Dashboard = () => {
  const [listAds, setListAds] = useState([]);

  return (
    <>
      <Navbar
        handlerSetList={ad =>
          setListAds(
             [ad, ...listAds]
          )
        }
      />
      <Ads listAds={listAds} />
    </>
  );
};

export default Dashboard;
