import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage, Grid, GridRow } from 'silk-react-components'
import PageTabs from './Pages/PageTabs';
import Section from './Sections/Section';

const renderSectionsRow = (page, sectionStartIndex, sectionsInRow) => {
  var sections = [];

  for (var i = 0; i < sectionsInRow; i++) {
    var sectionId = page.sections[sectionStartIndex + i];
    sections.push(<Section id={sectionId}/>);
  }

  return <GridRow>{sections}</GridRow>;
}

const renderSections = (page) => {
  var rows = [];
  var sectionStartIndex = 0;

  page.sectionsByRow.forEach(sectionsInRow => {
    rows.push(renderSectionsRow(page, sectionStartIndex, sectionsInRow));
    sectionStartIndex += sectionsInRow;
  });

  return rows;
}

const RiskCapture = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabs/>
      <Grid>
          {renderSections(page)}
      </Grid>
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
