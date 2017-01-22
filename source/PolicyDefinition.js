const policyDefinition = {
    pages: {
      Proposer: {
        name: 'Proposer',
        groupLayout: [
          [ 1, 2 ],
          [ 3, 4 ]
        ],
        groups: [1, 2, 3, 4],
        repeatingGroups: []
      },
      Driver: {
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
        fields: [ 1, 2, 3, 4, 5 ],
        subGroups: []
      },
      2: {
        id: 2,
        name: 'Contact details',
        columns: [],
        fields: [ 6, 7, 8 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      3: {
        id: 3,
        name: 'Address',
        columns: [],
        fields: [ 9 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      4: {
        id: 4,
        name: 'Additional information',
        columns: [],
        fields: [ 10, 11, 12, 13 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      5: {
        id: 5,
        name: 'Manage drivers',
        columns: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
        fields: [],
        subGroups: [ 6 ],
        subRepeatingGroups: [ 7, 8 ]
      },
      6: {
        id: 6,
        name: 'Driver information',
        columns: [],
        fields: [ 14, 15, 16, 17 ],
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
        fields: [ 18, 19, 20 ],
        subGroups: [],
        subRepeatingGroups: []
      },
      10: {
        id: 10,
        name: 'Conviction',
        columns: [],
        fields: [ 21, 22 ],
        subGroups: [],
        subRepeatingGroups: []
      }
    },
    columns: {
      1: {
        id: 1,
        source: 22,
        name: '#',
        type: 'text'
      },
      2: {
        id: 2,
        source: 15,
        name: 'Forename',
        type: 'text'
      },
      3: {
        id: 3,
        source: 16,
        name: 'Surname',
        type: 'text'
      },
      4: {
        id: 4,
        source: 19,
        name: 'Age',
        type: 'number'
      },
      5: {
        id: 5,
        source: 18,
        name: 'Gender',
        type: 'text'
      },
      6: {
        id: 6,
        source: 20,
        name: 'Claims',
        type: 'number'
      },
      7: {
        id: 7,
        source: 19,
        name: 'Convictions',
        type: 'number'
      },
      8: {
        id: 8,
        source: 20,
        name: 'Relation to proposer',
        type: 'text'
      },
      9: {
        id: 9,
        source: 23,
        name: 'Type',
        type: 'text'
      },
      10: {
        id: 10,
        source: 24,
        name: 'Date',
        type: 'text'
      },
      11: {
        id: 11,
        source: 25,
        name: 'Cost',
        type: 'text'
      },
      12: {
        id: 12,
        source: 26,
        name: 'Date',
        type: 'text'
      },
      13: {
        id: 11,
        source: 27,
        name: 'Type',
        type: 'text'
      }
    },
    fields: {
      1: {
        id: 1,
        source: 1,
        required: true,
        fieldName: 'title',
        name: 'Title',
        description: 'Your title',
        type: 'dropdown',
        options: ['Mr', 'Mrs']
      },
      2: {
        id: 2,
        required: true,
        source: 2,
        fieldName: 'forename',
        name: 'Forename',
        description: 'Forename',
        type: 'text',
        options: []
      },
      3: {
        id: 3,
        required: true,
        source: 3,
        fieldName: 'surname',
        name: 'Surname',
        description: 'Surname',
        type: 'text',
        options: []
      },
      4: {
        id: 4,
        required: true,
        source: 4,
        fieldName: 'birth_date',
        name: 'Birth date',
        description: '',
        type: 'date',
        options: []
      },
      5: {
        id: 5,
        required: true,
        source: 5,
        fieldName: 'gender',
        name: 'Gender',
        type: 'option',
        description: '',
        options: ['Male', 'Female']
      },
      6: {
        id: 6,
        required: true,
        source: 6,
        fieldName: 'primary_telephone',
        name: 'Primary Tel',
        description: '',
        type: 'text',
        options: []
      },
      7: {
        id: 7,
        required: false,
        source: 7,
        fieldName: 'secondary_telephone',
        name: 'Secondary Tel',
        description: '',
        type: 'text',
        options: []
      },
      8: {
        id: 8,
        required: true,
        source: 8,
        fieldName: 'email',
        name: 'Email',
        description: '',
        type: 'text',
        options: []
      },
      9: {
        id: 9,
        required: true,
        source: 9,
        fieldName: 'proposer_address',
        name: 'Proposer address',
        description: 'Postcode',
        type: 'text',
        options: []
      },
      10: {
        id: 10,
        required: false,
        source: 10,
        fieldName: 'previously_insured',
        name: 'Has the proposer been previously insured?',
        description: '',
        type: 'checkbox',
        options: []
      },
      11: {
        id: 11,
        required: false,
        source: 11,
        fieldName: 'caravan_club_member',
        name: 'Is the proposer a caravan/motor club member?',
        description: '',
        type: 'checkbox',
        options: []
      },
      12: {
        id: 12,
        required: false,
        source: 12,
        fieldName: 'owns_own_home',
        name: 'Do you own your home?',
        description: '',
        type: 'option',
        options: ['Yes', 'No']
      },
      13: {
        id: 13,
        required: true,
        source: 13,
        fieldName: 'family_vehicles_amount',
        name: 'Number of vehicles available in family?',
        description: '',
        type: 'number',
        options: []
      },
      14: {
       id: 14,
       required: true,
       source: 14,
       fieldName: 'driver_title',
       name: 'Title',
       description: 'Driver title',
       type: 'dropdown',
       options: ['Mr', 'Mrs']
      },
      15: {
       id: 15,
       required: true,
       source: 15,
       fieldName: 'driver_forename',
       name: 'Forename',
       description: 'Driver forename',
       type: 'text',
       options: []
      },
      16: {
       id: 16,
       required: true,
       source: 16,
       fieldName: 'driver_surname',
       name: 'Surname',
       description: 'Driver surname',
       type: 'text',
       options: []
      },
      17: {
       id: 17,
       required: true,
       source: 17,
       fieldName: 'driver_birth_date',
       name: 'Birth date',
       description: '',
       type: 'date',
       options: []
      },
      18: {
       id: 18,
       required: true,
       source: 23,
       fieldName: 'claim_type',
       name: 'Claim type',
       description: '',
       type: 'dropdown',
       options: ['Accident', 'Theft']
      },
      19: {
       id: 19,
       required: true,
       source: 24,
       fieldName: 'claim_date',
       name: 'Claim date',
       description: '',
       type: 'date',
       options: []
      },
      20: {
       id: 20,
       required: true,
       source: 25,
       fieldName: 'claim_cost',
       name: 'Total cost of claim (if known)',
       description: '',
       type: 'text',
       options: []
      },
      21: {
       id: 21,
       required: true,
       source: 26,
       fieldName: 'conviction_date',
       name: 'Conviction date',
       description: '',
       type: 'date',
       options: []
      },
      22: {
       id: 22,
       required: true,
       source: 27,
       fieldName: 'conviction_type',
       name: 'Conviction type',
       description: '',
       type: 'dropdown',
       options: ['Speeding', 'Driving under the influence']
      }
    },
    sources: {
      1: {
        id: 1,
        type: 'riskItem',
        riskItem: 'proposerTitle'
      },
      2: {
        id: 2,
        type: 'riskItem',
        riskItem: 'proposerForename'
      },
      3: {
        id: 3,
        type: 'riskItem',
        riskItem: 'proposerSurname'
      },
      4: {
        id: 4,
        type: 'riskItem',
        riskItem: 'proposerBirthDate'
      },
      5: {
        id: 5,
        type: 'riskItem',
        riskItem: 'proposerGender'
      },
      6: {
        id: 6,
        type: 'riskItem',
        riskItem: 'proposerPrimaryTelephone'
      },
      7: {
        id: 7,
        type: 'riskItem',
        riskItem: 'proposerPrimaryTelephone'
      },
      8: {
        id: 8,
        type: 'riskItem',
        riskItem: 'proposerEmail'
      },
      9: {
        id: 9,
        type: 'riskItem',
        riskItem: 'proposerAddress'
      },
      10: {
        id: 10,
        type: 'riskItem',
        riskItem: 'proposerPreviouslyInsured'
      },
      11: {
        id: 11,
        type: 'riskItem',
        riskItem: 'proposerCaravanClubMember'
      },
      12: {
        id: 12,
        type: 'riskItem',
        riskItem: 'proposerOwnsOwnHome'
      },
      13: {
        id: 13,
        type: 'riskItem',
        riskItem: 'proposerFamilyVehiclesAmount'
      },
      14: {
        id: 14,
        type: 'riskItem',
        riskItem: 'driverTitle'
      },
      15: {
        id: 15,
        type: 'riskItem',
        riskItem: 'driverForename'
      },
      16: {
        id: 16,
        type: 'riskItem',
        riskItem: 'driverSurname'
      },
      17: {
        id: 17,
        type: 'riskItem',
        riskItem: 'driverBirthDate'
      },
      18: {
        id: 18,
        type: 'riskItem',
        riskItem: 'driverGender'
      },
      19: {
        id: 19,
        type: 'age',
        riskItem: 'driverBirthDate'
      },
      20: {
        id: 20,
        type: 'subGroupCount',
        group: 6
      },
      21: {
        id: 21,
        type: 'subGroupCount',
        group: 7
      },
      22: {
        id: 22,
        type: 'index'
      },
      23: {
        id: 23,
        type: 'riskItem',
        riskItem: 'claimType'
      },
      24: {
        id: 24,
        type: 'riskItem',
        riskItem: 'claimDate'
      },
      25: {
        id: 25,
        type: 'riskItem',
        riskItem: 'claimCost'
      },
      26: {
        id: 26,
        type: 'riskItem',
        riskItem: 'convictionDate'
      },
      27: {
        id: 27,
        type: 'riskItem',
        riskItem: 'convictionType'
      }
    }
  };

exports.policyDefinition = policyDefinition;
