import React from 'react';
import Header from './components/Header';
import GeneralVision from './components/GeneralVision';
import CandidatesList from './components/CandidatesList'
import { PageContainer } from '../../styles';
import Banner from '../../components/Banner';

export default class IndexPage extends React.Component {
  render () {
    return (
      <PageContainer paddingless>
        <Banner />

        <Header />

        <GeneralVision />

        <CandidatesList />
      </PageContainer>
    )
  }
}
