import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const FORM_DATA = [
    {
        id: '1',
        name: 'name',
        component: 'input',
        autoFocus: true,
        autoComplete: 'true',
        type: 'text',
        title: 'Имя',
        placeholder: 'Иван'
    },
    {
        id: '2',
        name: 'surname',
        component: 'input',
        autoFocus: false,
        autoComplete: 'true',
        type: 'text',
        title: 'Фамилия',
        placeholder: 'Иванов'
    },
    {
        id: '3',
        name: 'message',
        component: 'textarea',
        autoFocus: false,
        autoComplete: null,
        type: null,
        title: 'Сообщение',
        placeholder: 'Ваше сообщение'
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