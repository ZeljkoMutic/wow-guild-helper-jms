import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';

export const CLASSES_MODULE: Module = {
  id: Collections.Classes,
  name: 'CLASSES',
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      icon: {type: 'string'},
      specs: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {type: 'string'},
            icon: {type: 'string'}
          }
        },
        minItems: 1,
        maxItems: 2
      }
    },
    required: []
  },
  definitions: {
    name: {
      label: 'Class',
      component: {
        type: 'select',
        configuration: {
          dataSet: [
            {
              name: 'Warrior',
              value: 'warrior'
            },
            {
              name: 'Paladin',
              value: 'paladin'
            },
            {
              name: 'Death Knight',
              value: 'death knight'
            },
            {
              name: 'Druid',
              value: 'druid'
            },
            {
              name: 'Warlock',
              value: 'warlock'
            },
            {
              name: 'Rogue',
              value: 'rogue'
            },
            {
              name: 'Priest',
              value: 'priest'
            },
            {
              name: 'Mage',
              value: 'mage'
            },
            {
              name: 'Hunter',
              value: 'hunter'
            },
            {
              name: 'Shaman',
              value: 'shaman'
            }
          ]
        }
      }
    },
    icon: {
      label: 'Class photo',
      component: {
        type: 'image'
      }
    },
    'specs/icon': {

      label: 'Spec photo',
      component: {
        type: 'image'
      }

    }
  },
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [
        {
          fields: [
            '/name',
            '/icon'
          ]
        },
        {
          title: 'Specialization',
          array: '/specs',
          fields: [
            '/name',
            '/icon'
          ]
        }
      ]
    }
  }
};
