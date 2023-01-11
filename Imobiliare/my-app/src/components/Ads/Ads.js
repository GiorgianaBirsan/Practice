import React from 'react';
import { AdItem } from '../AdItem';

export default function Ads(props) {
  const { listAds } = props;
  console.log('listAds', listAds, typeof listAds);

  return (
    <>
      {listAds.map((ad, index) => {
        console.log('ad', ad);

        console.log('ad sad', typeof ad);
        return (
          <AdItem
            key={index}
            title={ad.title}
            description={ad.description}
            address={ad.address}
            price={ad.price}
            phone={ad.phone}
            room={ad.room}
          />
        );
      })}
    </>
  );
}
