import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';

export const PROFESSIONS_MODULE: Module = {
  id: Collections.Professions,
  name: 'PROFESSIONS',
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      icon: {type: 'string'}

    },
    required: []
  },
  definitions: {
    name: {
      label: 'Profession',
      component: {
        type: 'select',
        configuration: {
          dataSet: [
            {
              name: 'Alchemy',
              value: 'alchemy'
            },
            {
              name: 'Blacksmithing',
              value: 'blacksmithing'
            },
            {
              name: 'Enchanting',
              value: 'enchanting'
            },
            {
              name: 'Engineering',
              value: 'engineering'
            },
            {
              name: 'Inscription',
              value: 'inscription'
            },
            {
              name: 'Jewelcrafting',
              value: 'jewelcrafting'
            },
            {
              name: 'Leatherworking',
              value: 'leatherworking'
            },
            {
              name: 'Tailoring',
              value: 'tailoring'
            }
          ]
        }
      }
    },
    icon: {
      label: 'Profession photo',
      component: {
        type: 'image'
      }
    }
  },
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [{
        fields: [
          '/name',
          '/icon'
        ]
      }]
    },
    table: {
      tableColumns: [
        {
          key: '/name',
          label: 'Name'
        },
        {
          key: '/icon',
          label: 'Icon'
        }
      ]
    }
  }
};

