import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage } from 'silk-react-components'
import PageTabsContainer from './Pages/PageTabsContainer';
import Page from './Pages/Page';

const RiskCaptureContainer = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabsContainer/>
      <Page page={page}/>
    </Stage>
  </div>

export default connect(
  state => ({
    page : state.selectedPageTab !== ''
      ? state.definitions.pages[state.selectedPageTab]
      : state.definitions.pages[0]
    }),
  dispatch => ({
  })
)(RiskCaptureContainer)
