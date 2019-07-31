import styled from 'styled-components';

// Containers
export const PageContainer = styled.main`
  position: relative;
  padding: ${props => props.paddingless ? null : '5rem 2rem 2rem 2rem'};

  @media (max-width: 600px) {
    padding: ${props => props.paddingless ? null : '1rem'};
  }
`;

export const Hero = styled.header`
  min-height: ${props => props.fullheight ? '100vh' : '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Section = styled.section`
  padding: 2rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

// text related components
export const Content = styled.div`
  h1 {
    font-size: 2rem;
  }
`;

export const Text = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// components
export const Button = styled.button`
  background-color: transparent;
  padding: .75em;
  justify-content: center;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  color: #363636;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all .2s ease;
`;

export const PrimaryButton = styled(Button)`
  border-color: #363636;

  &:hover {
    color: white;
    background-color: #363636;
  }
`;
