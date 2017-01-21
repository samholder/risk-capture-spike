const policyDefinition = {
    pages: {
      Proposer : {
        name: "Proposer",
        groupsByRow: [ 2, 2 ],
        groups: [1, 2, 3, 4],
        subGroups: []
      },
      Driver : {
        name: "Driver",
        groupsByRow: [ 1, 1 ],
        groups: [ 5, 6 ],
        subGroups: []
      }
    },
    groups: {
      1 : {
        id: 1,
        name: 'Proposer Information',
        headers : [],
        fields : [ 1, 2, 3, 4, 5 ],
        subGroups: []
      },
      2 : {
        id: 2,
        name: 'Contact details',
        headers : [],
        fields : [ 6, 7, 8 ],
        subGroups: []
      },
      3 : {
        id: 3,
        name: 'Address',
        headers : [],
        fields : [ 9 ],
        subGroups: []
      },
      4 : {
        id: 4,
        name: 'Additional information',
        headers : [],
        fields : [ 10, 11, 12, 13 ],
        subGroups: []
      },
      5: {
        id: 5,
        name: 'Manage drivers',
        headers : [ 1, 2, 3, 4, 5, 6, 7 ],
        fields : [],
        subGroups: [ 6 ]

      },
      6: {
        id: 6,
        name: 'Driver information',
        headers : [],
        fields : [ 14, 15, 16, 17 ],
        subGroups: []
      }
    },
    headers: {
      1 : {
        id: 1,
        source: 15,
        name: 'Forename',
        type: 'text'
      },
      2: {
        id: 2,
        source: 16,
        name: 'Surname',
        type: 'text'
      },
      3: {
        id: 3,
        source: 19,
        name: 'Age',
        type: 'number'
      },
      4: {
        id: 4,
        source: 18,
        name: 'Gender',
        type: 'text'
      },
      5: {
        id: 5,
        source: 20,
        name: 'Claims',
        type: 'number'
      },
      6: {
        id: 6,
        source: 19,
        name: 'Convictions',
        type: 'number'
      },
      7: {
        id: 7,
        source: 20,
        name: 'Relation to proposer',
        type: 'text'
      }
    },
    fields : {
      1 : {
        id: 1,
        source: 1,
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
        source: 2,
        fieldName: 'forename',
        name: 'Forename',
        description: 'Forename',
        type: 'text',
        options: []
      },
      3 : {
        id: 3,
        required: true,
        source: 3,
        fieldName: 'surname',
        name: 'Surname',
        description: 'Surname',
        type: 'text',
        options: []
      },
      4 : {
        id: 4,
        required: true,
        source: 4,
        fieldName: 'birth_date',
        name: 'Birth date',
        description: '',
        type: 'date',
        options: []
      },
      5 : {
        id: 5,
        required: true,
        source: 5,
        fieldName: 'gender',
        name: 'Gender',
        type: 'option',
        description: '',
        options: ['Male','Female']
      },
      6 : {
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
      10 : {
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
        options: ['Yes','No']
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
       options: ['Mr','Mrs']
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
      }
    },
    sources: {
      1 : {
        id: 1,
        type: 'riskItem',
        riskItem: 'proposerTitle'
      },
      2 : {
        id: 2,
        type: 'riskItem',
        riskItem: 'proposerForename'
      },
      3 : {
        id: 3,
        type: 'riskItem',
        riskItem: 'proposerSurname'
      },
      4 : {
        id: 4,
        type: 'riskItem',
        riskItem: 'proposerBirthDate'
      },
      5 : {
        id: 5,
        type: 'riskItem',
        riskItem: 'proposerGender'
      },
      6 : {
        id: 6,
        type: 'riskItem',
        riskItem: 'proposerPrimaryTelephone'
      },
      7 : {
        id: 7,
        type: 'riskItem',
        riskItem: 'proposerPrimaryTelephone'
      },
      8 : {
        id: 8,
        type: 'riskItem',
        riskItem: 'proposerEmail'
      },
      9 : {
        id: 9,
        type: 'riskItem',
        riskItem: 'proposerAddress'
      },
      10 : {
        id: 10,
        type: 'riskItem',
        riskItem: 'proposerPreviouslyInsured'
      },
      11 : {
        id: 11,
        type: 'riskItem',
        riskItem: 'proposerCaravanClubMember'
      },
      12 : {
        id: 12,
        type: 'riskItem',
        riskItem: 'proposerOwnsOwnHome'
      },
      13 : {
        id: 13,
        type: 'riskItem',
        riskItem: 'proposerFamilyVehiclesAmount'
      },
      14 : {
        id: 14,
        type: 'riskItem',
        riskItem: 'driverTitle'
      },
      15 : {
        id: 15,
        type: 'riskItem',
        riskItem: 'driverForename'
      },
      16 : {
        id: 16,
        type: 'riskItem',
        riskItem: 'driverSurname'
      },
      17 : {
        id: 17,
        type: 'riskItem',
        riskItem: 'driverBirthDate'
      },
      18 : {
        id: 18,
        type: 'riskItem',
        riskItem: 'driverGender'
      },
      19 : {
        id: 19,
        type: 'age',
        riskItem: 'driverBirthDate'
      },
      20 : {
        id: 20,
        type: 'subGroupCount',
        group: 6
      },
      21 : {
        id: 21,
        type: 'subGroupCount',
        group: 7
      }
    }
  };

exports.policyDefinition = policyDefinition;
