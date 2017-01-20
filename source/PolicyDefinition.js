const policyDefinition = [{
    id: 1,
    name: 'UK Motor',
    pages: [{
      name: 'Proposer',
      groupsByRow: [ 2, 2 ],
      groups: [{
        id: 1,
        type: 'standard',
        name: 'Proposer Information',
        fields: [{
            id: 1,
            riskItemId: 1,
            required: true,
            name: 'Title',
            description: 'Your title',
            type: 'dropdown',
            options: ['Mr','Mrs']
          },{
            id: 2,
            required: true,
            riskItemId: 2,
            name: 'Forename',
            description: 'Forename',
            type: 'text',
            options: []
          },{
            id: 3,
            required: true,
            riskItemId: 3,
            name: 'Surname',
            description: 'Surname',
            type: 'text',
            options: []
          },{
            id: 4,
            required: true,
            riskItemId: 4,
            name: 'Birth date',
            description: '',
            type: 'date',
            options: []
          },{
            id: 5,
            required: true,
            riskItemId: 5,
            name: 'Gender',
            type: 'option',
            description: '',
            options: ['Male','Female']
          }]
        },{
          id: 2,
          type: 'standard',
          name: 'Contact details',
          fields: [{
              id: 6,
              required: true,
              riskItemId: 6,
              name: 'Primary Tel',
              description: '',
              type: 'text',
              options: []
          },{
              id: 7,
              required: false,
              riskItemId: 7,
              name: 'Secondary Tel',
              description: '',
              type: 'text',
              options: []
          },{
              id: 8,
              required: true,
              riskItemId: 8,
              name: 'Email',
              description: '',
              type: 'text',
              options: []
            }]
        },{
          id: 3,
          type: 'standard',
          name: 'Address',
          fields: [{
              id: 9,
              required: true,
              riskItemId: 9,
              name: 'Proposer address',
              description: 'Postcode',
              type: 'text',
              options: []
            }]
        },{
          id: 4,
          type: 'standard',
          name: 'Additional information',
          fields: [{
              id: 10,
              required: false,
              riskItemId: 10,
              name: 'Has the proposer been previously insured?',
              description: '',
              type: 'checkbox',
              options: []
            },{
              id: 11,
              required: false,
              riskItemId: 11,
              name: 'Is the proposer a caravan/motor club member?',
              description: '',
              type: 'checkbox',
              options: []
            },{
              id: 12,
              required: false,
              riskItemId: 12,
              name: 'Do you own your home?',
              description: '',
              type: 'option',
              options: ['Yes','No']
            },{
              id: 13,
              required: true,
              riskItemId: 13,
              name: 'Number of vehicles available in family?',
              description: '',
              type: 'number',
              options: []
            }]
        }]
    },{
      name: 'Driver',
      groupsByRow: [ 1, 1 ],
      groups: [{
        id: 5,
        type: 'repeating-group-selection',
        name: 'Manage drivers',
        fields: [{
          id: 14,
          riskItemId: 14,
          name: 'Forename',
          description: 'Driver forename',
          type: 'text',
          options: []
        },{
          id: 15,
          riskItemId: 15,
          name: 'Surname',
          description: 'Driver surname',
          type: 'text',
          options: []
        },{
          id: 16,
          riskItemId: 16,
          name: 'Age',
          description: 'Driver age',
          type: 'number',
          options: []
        },{
          id: 17,
          riskItemId: 17,
          name: 'Gender',
          description: 'Driver gender',
          type: 'text',
          options: []
        },{
          id: 18,
          riskItemId: 18,
          name: 'Claims',
          description: 'Driver claims',
          type: 'number',
          options: []
        },{
          id: 18,
          riskItemId: 18,
          name: 'Convictions',
          description: 'Driver convictions',
          type: 'number',
          options: []
        },{
          id: 19,
          riskItemId: 19,
          name: 'Relation to proposer',
          description: 'Driver relation to proposer',
          type: 'text',
          options: []
        }]
      },{
        id: 6,
        type: 'repeating-group-body',
        name: 'Driver information',
        fields: [{
          id: 20,
          required: true,
          riskItemId: 20,
          name: 'Title',
          description: 'Driver title',
          type: 'dropdown',
          options: ['Mr','Mrs']
        },{
          id: 21,
          required: true,
          riskItemId: 21,
          name: 'Forename',
          description: 'Driver forename',
          type: 'text',
          options: []
        },{
          id: 22,
          required: true,
          riskItemId: 22,
          name: 'Surname',
          description: 'Driver surname',
          type: 'text',
          options: []
        },{
          id: 23,
          required: true,
          riskItemId: 23,
          name: 'Birth date',
          description: '',
          type: 'date',
          options: []
        }]
      }]
    }]
}]

exports.policyDefinition = policyDefinition;
