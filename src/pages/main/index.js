import React from 'react';
import Header from './components/Header';
import GeneralVision from './components/GeneralVision';
import CandidatesList from './components/CandidatesList'
import { PageContainer } from '../../styles';

export default class IndexPage extends React.Component {
  render () {
    return (
      <PageContainer paddingless>
        <Header />

        <GeneralVision />

        <CandidatesList />
      </PageContainer>
    )
  }
}
