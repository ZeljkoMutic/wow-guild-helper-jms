import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';

export const MEMBERS_MODULE: Module = {
  id: Collections.Members,
  name: 'MEMBERS',
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      level: {type: 'number'},
      faction: {type: 'string'},
      class: {type: 'string'},
      role: {type: 'string'},
      attendance: {type: 'number'}

    },
    required: []
  },
  definitions: {},
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [{
        fields: [
          '/name',
          '/level',
          '/faction',
          '/class',
          '/role',
          '/attendance'
        ]
      },
      ]
    },
    table: {
      tableColumns: [
        {
          key:'/name',
          label: 'Name'
        },
        {
          key: '/level',
          label: 'Level'
        },
        {
          key: '/faction',
          label: 'Faction'
        },
        {
          key: '/class',
          label: 'Class'
        },
        {
          key: '/role',
          label: 'Role'
        },
        {
          key: '/attendance',
          label: 'Attendance',
          control: true
        }

      ]
    }
  }
};


