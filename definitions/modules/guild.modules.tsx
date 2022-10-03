import {Collections} from '../interfaces/collections';
import {Module} from '../interfaces/module.interface';
import {PipeType} from '../enums/pipe-type.enum';


export const GUILD_MODULE: Module = {
  id: Collections.Guild,
  name: 'GUILD',
  schema: {
    properties: {
      id: {type: 'string'},
      guildId: {type: 'string'},
      name: {type: 'string'},
      icon: {type: 'string'},
      members: {type: 'string'}
    },
    required: []
  },
  definitions: {
    icon: {
      label: 'Guild photo',
      component: {
        type: 'image'
      }
    },
    members: {
      label: 'MEMBERS',
      component: {
        type: 'ref',
        configuration: {
          multiple: true,
          collection: 'members',
          valueKey: 'id',
          clearValue: null,
          search: {
            key: '/name',
            label: 'Name'
          },
          display: {
            key: '/name',
            label: 'Name'
          },
          table: {
            tableColumns: [
              {
                key: '/id',
                label: 'ID'
              },
              {
                key: '/name',
                label: 'Name'
              }
            ]
          }
        }
      }

    }

  },
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [{
        fields: [
          '/members'
        ]
      }
      ]
    },
    table: {
      tableColumns: [
        {
          key: '/members',
          label: 'Members',
          pipe: [PipeType.Custom],
          pipeArguments: {
            0: (it, row)  => {
              console.log(it);
              let list = '<ul>';
              for(const item of it){
                list += '<li>' + item + '</li>';
              }
              list = list + '</ul>';
              return list;
            }
          }
        }
      ]
    }
  }
};
