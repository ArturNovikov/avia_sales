import React from 'react';

import LogoPlane from '../../assets/LogoLogoPlane.svg';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img className="loadingLogo" src={LogoPlane} alt="Loading Plane" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
