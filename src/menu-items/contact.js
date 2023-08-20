// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA contact MENU ITEMS ||============================== //

const contact = {
    id: 'contact',
    title: 'contact',
    caption: 'Manage your contacts',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/contact/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/contact/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default contact;
