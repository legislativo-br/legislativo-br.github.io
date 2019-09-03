import React from 'react';
import styled from 'styled-components';
import DesktopLogo from '../assets/images/desktop-banner.jpg';
import MobileLogo from '../assets/images/mobile-banner.jpg';

const BannerContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: block;
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${DesktopLogo});

  @media screen and (max-width: 768px) {
    background-image: url(${MobileLogo});
  }
`;

const Banner = () => (<BannerContainer />)

export default Banner;
