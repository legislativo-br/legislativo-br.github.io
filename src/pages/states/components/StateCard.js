import React from 'react';
import PropTypes from 'prop-types';
import BarChart from '../../../components/BarChart';
import { Card, CardTitle, CardContent } from '../../../styles';

const StateCard = props => {
  const { name, chars, notPulling } = props.state

  const series = [{
    name: 'Eleitos Nominalmente',
    data: [ notPulling ]
  }, {
    name: 'Eleitos por puxadinho',
    data: [ (chars - notPulling) ]
  }]

  return (
    <Card style={{
      width: '100%'
    }}>
      <CardTitle>
        <span> {name} </span>
      </CardTitle>

      <CardContent>
        <BarChart series={series} />
      </CardContent>
    </Card>
  )
}

StateCard.propTypes = {
  state: PropTypes.object
}

export default StateCard;
