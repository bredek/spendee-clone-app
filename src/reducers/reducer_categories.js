import {
    GET_CATEGORIES,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from '../actions/index';

const initState = [
    {
        id: 0,
        value: 'Car',
    },
    {
        id: 1,
        value: 'Travel',
    },
    {
        id: 2,
        value: 'Family',
    }
]

let id_count = initState.length;

function insertItem(array, action) {
    return [
        ...array.slice(0, action.id),
        action.item,
        ...array.slice(action.id)
    ]
}

function removeItem(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            const newCategory = {
                id: id_count,
                value: action.payload.value
            }
            id_count++;
            return [...state, newCategory];
            break;
        case EDIT_CATEGORY:
            return insertItem([...state.slice(0, action.id), ...state.slice(action.id + 1)], action);
            break;
        case DELETE_CATEGORY:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
            break;
        case GET_CATEGORIES:
            return state;
            break;
        default:
            return state;
            break;
    }
}