import React from 'react';

import LogoPlane from '../../assets/LogoLogoPlane.svg';

import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loadingLogo} src={LogoPlane} alt="Loading Plane" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
