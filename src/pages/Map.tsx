import React, { FC } from 'react';
import map from '../assets/images/map.webp';

const Map: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content"></div>
      <div className="mt-5">
        <img
          alt="Foto vinice"
          src={map}
          className="img-style mb-5"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Map;
