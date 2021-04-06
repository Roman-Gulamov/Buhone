import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const INPUT_DATA = [
    {
        id: '1',
        name: 'username',
        component: 'input',
        autoFocus: true,
        autoComplete: 'true',
        type: 'text',
        title: 'Name'
    },
    {
        name: 'email',
        component: 'input',
        autoFocus: false,
        autoComplete: 'true',
        type: 'email',
        title: 'Email'
    },
    {
        name: 'message',
        component: 'textarea',
        autoFocus: false,
        autoComplete: null,
        type: null,
        title: 'Message'
    },
]

export const DESCRIPTION_DATA = [
    {
        id: '1',
        icon: faMobileAlt,
        text: '+7 (111) 222-33-44',
        marginRight: true
    },
    {
        id: '2',
        icon: faEnvelope,
        text: 'order@bu-one.ru',
        marginRight: false
    }
]