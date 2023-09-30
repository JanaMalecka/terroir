import React, { FC } from 'react';
import map from '../assets/images/map2.png';
import ScaleIn from '../features/Animate/ScaleIn';
import Button from '../components/Button';

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
      <div className="container__content">
        <div>
          <ScaleIn from={{ scale: '0' }} to={{ scale: '1' }}>
            <a
              href={`http://localhost:3000/statut-terroir-cejkovice`}
              className="link-dark"
              aria-label={`Přejít na webové stránky Statut terroir Čejkovice`}
              target="_self"
              rel="noreferrer"
            >
              <Button className="btn--secondary">Více o terroir</Button>
            </a>
          </ScaleIn>
        </div>
      </div>
    </>
  );
};

export default Map;
