import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage } from 'silk-react-components';
import PageTabsContainer from './Pages/PageTabsContainer';
import Page from './Pages/Page';

const RiskCaptureContainer = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabsContainer/>
      <Page page={page}/>
    </Stage>
  </div>;

export default connect(
  state => ({
    page: state.selectedPageTab !== '' ?
      state.definition.pages[state.selectedPageTab] :
      state.definition.pages[0]
    })
)(RiskCaptureContainer);
