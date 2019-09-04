import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  font-size: 1.5rem;
  color: ${props => props.inverted ? 'white' : '#34314D'};

  .selected {
    color: #F6B642;
  }
`

const Icon = ({ selected }) => {
  return (
    <span className={selected ? 'selected' : null}>
      <i className="fas fa-user-tie"></i>
    </span>
  )
}

const rendersIcons = (chars, selected) => {
  return Array(chars)
    .fill(0)
    .map((_, key) => key < selected ? <Icon key={key} selected /> : <Icon key={key} />)
}

const Pictogram = (props) => {
  const { chars, selected, inverted } = props

  return (
    <Container inverted={inverted || false}>
      {rendersIcons(chars, selected)}
    </Container>
  )
}

export default Pictogram
