import styled from 'styled-components';

// components
export const Button = styled.button`
  background-color: transparent;
  padding: 0.75em;
  justify-content: center;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  color: inherit;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const PrimaryButton = styled(Button)`
  border-color: var(--primary);

  &:hover {
    color: white;
    background-color: var(--primary);
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  div:not(:first-child) {
    margin: 0 8px;
  }
`;

// inspired by Quasar Framework Card style
export const Card = styled.div`
  position: relative;
  border-radius: var(--card-radious);
  box-shadow: var(--box-shadow);
  background-color: var(--primary);
  color: white;
  text-align: left;
  overflow: hidden;

  /* for mobile screens */
  @media screen and (max-width: 527px) {
    width: 100%;
  }
`;

export const CardTitle = styled.div`
  text-align: center;
  margin: 0;
  padding: 1rem 1.2rem;
  color: var(--accent);
  font-size: 1.4rem;
`;

export const CardContent = styled.section`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`;
