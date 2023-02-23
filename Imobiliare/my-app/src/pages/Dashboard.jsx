import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import Ads from '../components/Ads/Ads';
import getListAds from '../api/listAds/getListAds';
import updateListAds from '../api/listAds/updateListAds';
import { Text } from '@chakra-ui/react';

const Dashboard = () => {
  const [listAds, setListAds] = useState([]);

  function deleteByIndex(id) {
    if (listAds.length > 0) {
      const list = listAds.filter(ad => ad.id !== id);
      setListAds(list);
      updateListAds(list);
    }
  }

  function editHandler(ad) {
    if (listAds.length > 0) {
      const listFree = listAds.filter(adList => adList.id !== ad.id);

      const list = listAds.map(adList => {
        if (adList.id === ad.id) {
          updateListAds([ad, ...listFree].sort((a, b) => b.id - a.id));
          setListAds([ad, ...listFree].sort((a, b) => b.id - a.id));
        }
      });
    }
  }

  function handlerSetList(ad) {
    ad.id = listAds.length > 0 ? listAds[0].id + 1 : 0;
    setListAds([ad, ...listAds]);
    updateListAds([ad, ...listAds]);
  }

  useEffect(() => {
    const list = async () => {
      const getList = await getListAds();
      if (getList.length > 0) {
        setListAds(getList);
      }
    };

    list();
  }, [setListAds]);

  return (
    <>
      <Navbar handlerSetList={handlerSetList} />
      <Ads listAds={listAds} deleteByIndex={deleteByIndex} editHandler={editHandler} >
      
      </Ads>
    </>
  );
};

export default Dashboard;
