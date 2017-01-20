const policyDefinition = {
    pages: {
      Proposer : {
        name: "Proposer",
        groupsByRow: [ 2, 2 ],
        groups: [1, 2, 3, 4]
      },
      Driver : {
        name: "Driver",
        groupsByRow: [ 1 ],
        groups: [ 5 ]
      }
    },
    groups: {
      1 : {
        id: 1,
        name: 'Proposer Information',
        fields : [ 1, 2, 3, 4, 5 ]
      },
      2 : {
        id: 2,
        name: 'Contact details',
        fields : [ 6, 7, 8 ]
      },
      3 : {
        id: 3,
        name: 'Address',
        fields : [ 9 ]
      },
      4 : {
        id: 4,
        name: 'Additional information',
        fields : [ 10, 11, 12, 13 ]
      },
      5 : {
        id: 5,
        name: 'Manage drivers',
        fields : [],
        subGroups: [ 6 ]
      },
      6: {
        id: 6,
        name: 'Driver information',
        headers : [ 1, 2, 3, 4, 5, 6, 7 ],
        fields : [ 14, 15, 16, 17 ]
      }
    },
    headers: {
      1 : {
        id: 1,
        riskItemId: 14,
        name: 'Forename',
        type: 'text'
      },
      2: {
        id: 2,
        riskItemId: 15,
        name: 'Surname',
        type: 'text'
      },
      3: {
        id: 3,
        riskItemId: 16,
        name: 'Age',
        type: 'number'
      },
      4: {
        id: 4,
        riskItemId: 17,
        name: 'Gender',
        type: 'text'
      },
      5: {
        id: 5,
        riskItemId: 18,
        name: 'Claims',
        type: 'number'
      },
      6: {
        id: 6,
        riskItemId: 18,
        name: 'Convictions',
        type: 'number'
      },
      7: {
        id: 7,
        riskItemId: 19,
        name: 'Relation to proposer',
        type: 'text'
      }
    },
    fields : {
      1 : {
        id: 1,
        riskItemId: 1,
        required: true,
        fieldName: 'title',
        name: 'Title',
        description: 'Your title',
        type: 'dropdown',
        options: ['Mr','Mrs']
      },
      2 : {
        id: 2,
        required: true,
        riskItemId: 2,
        fieldName: 'forename',
        name: 'Forename',
        description: 'Forename',
        type: 'text',
        options: []
      },
      3 : {
        id: 3,
        required: true,
        riskItemId: 3,
        fieldName: 'surname',
        name: 'Surname',
        description: 'Surname',
        type: 'text',
        options: []
      },
      4 : {
        id: 4,
        required: true,
        riskItemId: 4,
        fieldName: 'birth_date',
        name: 'Birth date',
        description: '',
        type: 'date',
        options: []
      },
      5 : {
        id: 5,
        required: true,
        riskItemId: 5,
        fieldName: 'gender',
        name: 'Gender',
        type: 'option',
        description: '',
        options: ['Male','Female']
      },
      6 : {
        id: 6,
        required: true,
        riskItemId: 6,
        fieldName: 'primary_telephone',
        name: 'Primary Tel',
        description: '',
        type: 'text',
        options: []
      },
      7: {
        id: 7,
        required: false,
        riskItemId: 7,
        fieldName: 'secondary_telephone',
        name: 'Secondary Tel',
        description: '',
        type: 'text',
        options: []
      },
      8: {
        id: 8,
        required: true,
        riskItemId: 8,
        fieldName: 'email',
        name: 'Email',
        description: '',
        type: 'text',
        options: []
      },
      9: {
        id: 9,
        required: true,
        riskItemId: 9,
        fieldName: 'proposer_address',
        name: 'Proposer address',
        description: 'Postcode',
        type: 'text',
        options: []
      },
      10 : {
        id: 10,
        required: false,
        riskItemId: 10,
        fieldName: 'previously_insured',
        name: 'Has the proposer been previously insured?',
        description: '',
        type: 'checkbox',
        options: []
      },
      11: {
        id: 11,
        required: false,
        riskItemId: 11,
        fieldName: 'caravan_club_member',
        name: 'Is the proposer a caravan/motor club member?',
        description: '',
        type: 'checkbox',
        options: []
      },
      12: {
        id: 12,
        required: false,
        riskItemId: 12,
        fieldName: 'owns_own_home',
        name: 'Do you own your home?',
        description: '',
        type: 'option',
        options: ['Yes','No']
      },
      13: {
        id: 13,
        required: true,
        riskItemId: 13,
        fieldName: 'owns_own_home',
        fieldName: 'family_vehicles_amount',
        name: 'Number of vehicles available in family?',
        description: '',
        type: 'number',
        options: []
      },
      14: {
       id: 14,
       required: true,
       riskItemId: 14,
       fieldName: 'driver_title',
       name: 'Title',
       description: 'Driver title',
       type: 'dropdown',
       options: ['Mr','Mrs']
      },
      15: {
       id: 15,
       required: true,
       riskItemId: 15,
       fieldName: 'driver_forename',
       name: 'Forename',
       description: 'Driver forename',
       type: 'text',
       options: []
      },
      16: {
       id: 16,
       required: true,
       riskItemId: 16,
       fieldName: 'driver_surname',
       name: 'Surname',
       description: 'Driver surname',
       type: 'text',
       options: []
      },
      17: {
       id: 17,
       required: true,
       riskItemId: 17,
       fieldName: 'driver_birth_date',
       name: 'Birth date',
       description: '',
       type: 'date',
       options: []
      }
    }
  };

exports.policyDefinition = policyDefinition;
