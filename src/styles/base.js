import styled from 'styled-components';

// Containers
export const PageContainer = styled.main`
  position: relative;
  padding: ${props => (props.paddingless ? null : '5rem 0 2rem 0')};

  @media screen and (max-width: 768px) {
    padding: ${props => (props.paddingless ? null : '5rem 2rem 2rem')};
  }
`;

export const Hero = styled.header`
  min-height: ${props => (props.fullheight ? '100vh' : '100%')};
  padding: 2rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.max || '1200px'};
`;

export const Section = styled.section`
  padding: 2rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

// text related components
export const Content = styled.div`
  font-size: 1.25rem;
  text-align: ${props => (props.center ? 'center' : 'left')};

  h1 {
    font-size: 2rem;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 1rem;
  }

  p:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.15rem;

    p {
      text-align: left;
    }
  }
`;
