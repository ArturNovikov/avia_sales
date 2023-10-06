import React from 'react';

import LogoPlane from '../../assets/LogoLogoPlane.svg';

import './Loading.scss';

const Loading = () => {
  return (
    <>
      <div className="Container">
        <img className="Logo" src={LogoPlane} alt="Loading Plane" />
        <p>Loading</p>
      </div>
    </>
  );
};

export default Loading;
