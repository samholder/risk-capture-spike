Feature: Conversion
	
@mytag
Scenario: Convert risk capture definition xml to json formatted for engine
	Given I have the following xml:
"""
<RiskCaptureDefinition policyLine="UK Motor">
  <Pages>
    <Page name="Proposer">
      <GroupLayout>
        <Row><Cell groupId="1"/><Cell groupId="2"/></Row>
        <Row><Cell groupId="3"/><Cell groupId="4"/></Row>
      </GroupLayout>
      <Groups>
        <Group groupId="1" name="Proposer Information">
          <Fields>
            <Field fieldName="title" name="Title" type="dropdown" required="true" description="Proposer title">
              <Options>
                <Option value="Mr"/>
                <Option value="Mrs"/>
              </Options>
              <RiskItemSource riskItem="proposerTitle"/>
            </Field>
          </Fields>
        </Group>
        <Group groupId="2" name="Contact details">
          <Fields>
          </Fields>
        </Group>
        <Group groupId="3" name="Address">
          <Fields>
          </Fields>
        </Group>
        <Group groupId="4" name="Additional information">
          <Fields>
          </Fields>
        </Group>
      </Groups>
    </Page>
    <Page name="Driver">
      <GroupLayout>
        <Row><Cell groupId="5"/></Row>
        <Row><Cell groupId="6"/></Row>
        <Row><Cell groupId="7"/><Cell groupId="8"/></Row>
        <Row><Cell groupId="9"/><Cell groupId="10"/></Row>
      </GroupLayout>
      <Groups>
        <RepeatingGroup groupId="5" name="Manage drivers">
          <Columns>
            <Column name="#" type="text">
              <IndexSource/>
            </Column>
            <Column name="Forename" type="text">
              <RiskItemSource riskItem="driverForename"/>
            </Column>
          </Columns>
          <Groups>
            <Group groupId="6" name="Driver information">
              <Fields>
                <Field fieldName="driver_title" name="Title" type="dropdown" required="true" description="Driver title">
                  <Options>
                    <Option value="Mr"/>
                    <Option value="Mrs"/>
                  </Options>
                  <RiskItemSource riskItem="driverTitle"/>
                </Field>
              </Fields>
            </Group>
            <RepeatingGroup groupId="7" name="Drivers claims">
              <Columns>
                <Column name="#" type="text">
                  <IndexSource/>
                </Column>
                <Column name="Type" type="text">
                  <RiskItemSource riskItem="claimType"/>
                </Column>
                <Column name="Date" type="text">
                  <RiskItemSource riskItem="claimDate"/>
                </Column>
                <Column name="Cost" type="text">
                  <RiskItemSource riskItem="claimCost"/>
                </Column>
              </Columns>
              <Groups>
                <Group groupId="9" name="Claim">
                  <Fields>
                    <Field fieldName="claim_type" name="Claim type" type="dropdown" required="true" description="">
                      <Options>
                        <Option value="Accident"/>
                        <Option value="Theft"/>
                      </Options>
                      <RiskItemSource riskItem="claimType"/>
                    </Field>
                  </Fields>
                </Group>
              </Groups>
            </RepeatingGroup>
            <RepeatingGroup groupId="8" name="Drivers convictions">
              <Columns>
              </Columns>
              <Groups>
                <Group groupId="10" name="Conviction">
                  <Fields>
                  </Fields>
                </Group>
              </Groups>
            </RepeatingGroup>
          </Groups>
        </RepeatingGroup>
      </Groups>
    </Page>
  </Pages>
</RiskCaptureDefinition>
"""
    When I convert the risk capture xml to json
    Then I should receive the following json:
"""
{
    policyLine: 'UK Motor',
    pages: {
        proposer: {
            name: 'Proposer',
            groupLayout: [
                [ 1, 2 ],
                [ 3, 4 ]
            ],
            groups: [1, 2, 3, 4],
            repeatingGroups: []
        },
        driver: {
            name: 'Driver',
            groupLayout: [
                [ 5 ],
                [ 6 ],
                [ 7, 8 ],
                [ 9, 10 ]
            ],
            groups: [],
            repeatingGroups: [ 5 ]
        }
    },
    groups: {
      1: {
        id: 1,
        name: 'Proposer Information',
        columns: [],
        fields: [ 1 ],
        subGroups: []
      },
      2: {
        id: 2,
        name: 'Contact details',
        columns: [],
        fields: [],
        subGroups: [],
        subRepeatingGroups: []
      },
      3: {
        id: 3,
        name: 'Address',
        columns: [],
        fields: [],
        subGroups: [],
        subRepeatingGroups: []
      },
      4: {
        id: 4,
        name: 'Additional information',
        columns: [],
        fields: [],
        subGroups: [],
        subRepeatingGroups: []
      },
      5: {
        id: 5,
        name: 'Manage drivers',
        columns: [ 1, 2 ],
        fields: [],
        subGroups: [ 6 ],
        subRepeatingGroups: [ 7, 8 ]
      },
      6: {
        id: 6,
        name: 'Driver information',
        columns: [],
        fields: [ 14 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      7: {
        id: 7,
        name: 'Drivers claims',
        columns: [ 1, 9, 10, 11 ],
        fields: [],
        subGroups: [ 9 ],
        subRepeatingGroups: []
      },
      8: {
        id: 8,
        name: 'Drivers convictions',
        columns: [ 1, 12, 13 ],
        fields: [],
        subGroups: [ 10 ],
        subRepeatingGroups: []
      },
      9: {
        id: 9,
        name: 'Claim',
        columns: [],
        fields: [ 18 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      10: {
        id: 10,
        name: 'Conviction',
        columns: [],
        fields: [],
        subGroups: [],
        subRepeatingGroups: []
      }
    }
}
"""
