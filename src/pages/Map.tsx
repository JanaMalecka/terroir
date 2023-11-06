import React, { FC } from 'react';
import map from '../assets/images/map3.png';

const Map: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content title-width">
        <h1>MAPA TERROIR ČEJKOVICE</h1>
      </div>

      <div className="mt-5">
        <img
          alt="Foto vinice"
          src={map}
          className="img-style mb-5"
          loading="lazy"
        />
      </div>
      <div className="container__content"></div>
    </>
  );
};

export default Map;
