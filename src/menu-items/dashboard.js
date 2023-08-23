// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'contact',
      title: 'Contact',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'contact',
          title: 'All Contact',
          type: 'item',
          url: '/contact',
          target: false
        },
        {
          id: 'contact_add',
          title: 'Add Contact',
          type: 'item',
          url: '/contact-add',
          target: false
        },
        {
          id: 'contact_upload',
          title: 'Upload Contact',
          type: 'item',
          url: '/contact-upload',
          target: false
        }
      ]
    }
  ]
};

export default dashboard;
