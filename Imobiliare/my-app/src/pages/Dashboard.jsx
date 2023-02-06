import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import Ads from '../components/Ads/Ads';
import getListAds from '../api/listAds/getListAds';
import updateListAds from '../api/listAds/updateListAds';

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
    //const edit = JSON.parse(getListAds[id]);
    //  updateListAds(ad);
    console.log('asd', ad);
  }

  function handlerSetList(ad) {
    ad.id = listAds.length > 0 ? listAds[0].id + 1 : 0;
    setListAds([ad, ...listAds]);
    updateListAds([ad, ...listAds]);
  }

  useEffect(() => {
    const list = async () => {
      const getList = await getListAds();
      setListAds(getList);
    };
    list();
  }, [setListAds]);

  return (
    <>
      <Navbar handlerSetList={handlerSetList} />
      <Ads listAds={listAds} deleteByIndex={deleteByIndex} editHandler={editHandler} />
    </>
  );
};

export default Dashboard;
