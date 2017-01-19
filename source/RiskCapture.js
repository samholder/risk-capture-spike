import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage } from 'silk-react-components'
import PageTabs from './Pages/PageTabs';
import Page from './Pages/Page';

const RiskCapture = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabs/>
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
)(RiskCapture)
