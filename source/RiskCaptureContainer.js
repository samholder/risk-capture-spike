import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage } from 'silk-react-components';
import PageTabsContainer from './Pages/PageTabsContainer';
import PageContainer from './Pages/PageContainer';

const RiskCaptureContainer = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabsContainer/>
      <PageContainer page={page}/>
    </Stage>
  </div>;

export default connect(
  state => ({
    page: state.selectedPage !== '' ?
      state.definition.pages[state.selectedPage] :
      state.definition.pages[0]
    })
)(RiskCaptureContainer);
