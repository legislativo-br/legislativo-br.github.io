import React from 'react';
import styled from 'styled-components';
import DesktopLogo from '../assets/images/desktop-banner.jpg';
import MobileLogo from '../assets/images/mobile-banner.jpg';

const BannerContainer = styled.div`
  width: 100%;
  display: block;
`;

const isDesktop = width => width > 768;

export default function Banner () {
  const viewportWidth = window.innerWidth;
  return (
    <BannerContainer>
      <img
        src={isDesktop(viewportWidth) ? DesktopLogo : MobileLogo}
        alt=""
      />
    </BannerContainer>
  )
}
