import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';

export const ITEMS_MODULE: Module = {
  id: Collections.Items,
  name: 'ITEMS',
  schema: {
    properties: {
      id: {type: 'string'},
      itemId: {type: 'number'},
      name: {type: 'string'},
      icon: {type: 'string'},
      class: {type: 'string'},
      subclass: {type: 'string'},
      sellPrice: {type: 'number'},
      quality: {type: 'string'},
      itemLevel: {type: 'number'},
      requiredLevel: {type: 'number'},
      slot: {type: 'string'},
      tooltip: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: {type: 'string'},
            format: {type: 'string'}
          }
        }
      },
      itemLink: {type: 'string'},
      vendorPrice: {type: 'number'},
      contentPhase: {type: 'number'},
      // source: {
      //   type: 'object',
      //   properties: {
      //     category: {type: 'string'},
      //     name: {type: 'string'},
      //     faction: {type: 'string'},
      //     cost: {type: 'number'}
      //   }
      // },
      uniqueName: {type: 'string'}

    },
    required: []
  },
  definitions: {
    icon:{
      label: 'Item photo',
      component:{
        type: 'image',
      }
    }
  },
  layout: {
    editTitleKey: 'name',
    instance: {
      segments:[{
        fields:[
         '/itemId',
          '/name',
          '/icon',
          '/class',
          '/sellPrice',
          '/quality',
          '/itemLevel',
          '/slot',
          '/vendorPrice'
        ]
      }]
    },
    table: {
      tableColumns: [
        {
          key: '/itemId',
          label: 'ID'
        },
        {
          key: '/name',
          label: 'Name'
        },
        {
          key: '/icon',
          label: 'Icon',
        },
        {
          key: '/quality',
          label: 'Quality'
        },
        {
          key: '/itemLevel',
          label: 'Item Level'
        },
        {
          key: '/sellPrice',
          label: 'Price'
        }
      ]


    }
  }
};
