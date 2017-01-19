import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage, Grid, GridRow } from 'silk-react-components'
import GroupTabs from './Groups/GroupTabs';
import Section from './Sections/Section';

const renderSectionsRow = (group, sectionStartIndex, sectionsInRow) => {
  var sections = [];

  for (var i = 0; i < sectionsInRow; i++) {
    var sectionId = group.sections[sectionStartIndex + i];
    sections.push(<Section id={sectionId}/>);
  }

  return <GridRow>{sections}</GridRow>;
}

const renderSections = (group) => {
  var rows = [];
  var sectionStartIndex = 0;

  group.sectionsByRow.forEach(sectionsInRow => {
    rows.push(renderSectionsRow(group, sectionStartIndex, sectionsInRow));
    sectionStartIndex += sectionsInRow;
  });

  return rows;
}

const RiskCapturePage = ({group}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <GroupTabs/>
      <Grid>
          {renderSections(group)}
      </Grid>
    </Stage>
  </div>

export default connect(
  state => ({
    group : state.selectedGroupTab !== ''
      ? state.definitions.groups[state.selectedGroupTab]
      : state.definitions.groups[0]
    }),
  dispatch => ({
  })
)(RiskCapturePage)
