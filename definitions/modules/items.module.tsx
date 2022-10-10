import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';
import {PipeType} from '../enums/pipe-type.enum';

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
    icon: {
      label: 'Item photo',
      component: {
        type: 'image'
      }
    }
  },
  layout: {
    filterModule: {
      value: [
        {
          key: 'itemLevel',
          operator: '>',
          value: 0
        }
      ],

      schema: {
        properties: {
          class: {type: 'string'}
        }
      },
      clearFilters: [
        {
          key: 'itemLevel',
          operator: '>',
          value: 0
        }
      ],
      definitions: {
        class: {
          label: 'Item Class'
        }
      }
    },
    editTitleKey: 'name',
    instance: {
      segments: [{
        fields: [
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
          key: '/class',
          label: 'Class',
        },
        {
          key: '/icon',
          label: 'Icon',
          pipe: [PipeType.Custom],
          pipeArguments: {
            0: (it, row) => {
              return `<img src='${it}' width='40'>`;
            }
          }
        },
        {
          key: '/quality',
          label: 'Quality',
          pipe:[PipeType.Custom, PipeType.Sanitize],
          pipeArguments: {
            0:(it,row) => {
              if(it === 'Common'){
                return `<font color='#808080'><b><em>${it}</em></b></font>`
              }
              if(it === 'Uncommon'){
                return `<font color='#228b22'><b><em>${it}</em></b></font>`
              }
              if(it === 'Rare'){
                return `<font color='#1e90ff'><b><em>${it}</em></b></font>`
              }
              if(it === 'Epic'){
                return `<font color='#663399'><b><em>${it}</em></b></font>`
              }
              if(it === 'Legendary'){
                return `<font color='orange'><b><em>${it}</em></b></font>`
              }
            }
          }

        },
        {
          key: '/itemLevel',
          label: 'Item Level',
          sortable: true
        },
        {
          key: '/sellPrice',
          label: 'Price'
        }
      ]


    }
  }
};
