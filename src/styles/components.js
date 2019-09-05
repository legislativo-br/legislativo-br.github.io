import styled from 'styled-components';

// components
export const Button = styled.button`
  background-color: transparent;
  padding: 0.75em;
  justify-content: center;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  color: #4a4a4a;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const PrimaryButton = styled(Button)`
  border-color: #34314d;

  &:hover {
    color: white;
    background-color: #34314d;
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
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-color: #34314d;
  color: white;
  border-radius: 4px;
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
  color: #f6b642;
  font-size: 1.4rem;
`;

export const CardContent = styled.section`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 4px;
  border: none;
  background-color: white;
  color: #34314d;
  font-size: 0.8rem;

  i {
    font-size: 14px;
    margin-right: 4px;
  }
`;
