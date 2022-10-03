import {NavigationItemWithActive} from '../app/shared/interfaces/navigation-item-with-active.interface';

/**
 * Configuration that is consistent across environments
 */
export const STATIC_CONFIG = {
  displayName: 'JMS',
  elements: {

    /**
     * This is removed from the components selector
     * when registering it as an element
     */
    componentPrefix: 'jms-',

    /**
     * This is added as the suffix instead
     *
     * @example
     * A component with the selector jms-table
     * is registered as an element with the selector
     * jms-e-table
     */
    selectorPrefix: 'jms-e-',
  },
  login: {
    email: true,
    google: true,
    facebook: true
  },
  /**
   * We use this to redirect all unauthenticated users
   */
  loginRoute: ['/login'],
  /**
   * Used for redirecting all authenticated users
   * visiting pages for unauthenticated users
   */
  dashboardRoute: ['/dashboard'],
  navigation: {
    items: [
      {
        icon: 'dashboard',
        label: 'DASHBOARD',
        type: 'link',
        value: '/dashboard'
      },

      {
        icon: 'star_half',
        label: 'ITEMS',
        type: 'link',
        value: '/m/items'
      },
      {
        icon: 'emoji_nature',
        label: 'PROFESSIONS',
        type: 'link',
        value: '/m/professions'
      },
      {
        icon: 'hive',
        label: 'ZONES',
        type: 'link',
        value: '/m/zones'
      },
      {
        icon: 'person_2',
        label: 'CLASSES',
        type: 'link',
        value: '/m/classes'
      },

      {
        children: [
          {
            label: 'Members',
            type: 'link',
            value: '/m/members'
          }
        ],
        icon: 'reduce_capacity',
        label: 'GUILD',
        type: 'expandable'
      },
      {
        children: [
          {
            icon: 'supervised_user_circle',
            label: 'USERS',
            type: 'link',
            value: '/m/users'
          },
          {
            icon: 'vpn_key',
            label: 'ROLES',
            type: 'link',
            value: '/m/roles'
          },
          {
            icon: 'email',
            label: 'AUTOMATIC_EMAILS',
            type: 'link',
            value: '/m/automatic-emails'
           },
           {
             icon: 'send',
             label: 'SENT_EMAILS',
             type: 'link',
             value: '/m/sent-emails'
           },

        ],
        icon: 'account_box',
        label: 'MANAGEMENT',
        type: 'expandable'
      },
      {
        children: [
          {
            icon: 'send',
            label: 'INVITES',
            type: 'link',
            value: '/m/user-invites'
          }
        ],
        icon: 'dns',
        label: 'SYSTEM',
        type: 'expandable'
      }
    ] as NavigationItemWithActive[]
  }
};
