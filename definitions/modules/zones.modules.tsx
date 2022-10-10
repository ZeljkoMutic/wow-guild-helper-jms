import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';
import {State} from '@jaspero/form-builder';

export const ZONES_MODULE: Module = {
  id: Collections.Zones,
  name: 'ZONES',
  schema: {
    properties: {
      id: {type: 'string'},
      zoneId: {type: 'number'},
      name: {type: 'string'},
      category: {type: 'string'},
      level: {
        type: 'array',
        items: {
          type: 'number'
        },
        minItems: 1,
        maxItems: 2,
        uniqueItems: false
      },
      territory: {type: 'string'}
    },

    required: []
  },
  definitions: {
    // level:{
    //   disableOn: [State.Edit, State.Create]
    // }
  },
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [{
        fields: [
          '/name',
          '/category',
          '/level'
        ]
      }]
    },
    table:{
      tableColumns: [
        {
          key: '/name',
          label: 'Name'
        },
        {
          key: '/category',
          label: 'Category'
        },
        {
          key: '/level',
          label: 'Level'
        },
        {
          key: '/territory',
          label: 'Territory'
        }
      ]
    }
  }
};
