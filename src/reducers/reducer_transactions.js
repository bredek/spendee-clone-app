import _ from 'lodash';
import {
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION
} from '../actions/index';

let id_count = 0;

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

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TRANSACTION:
            const newTransaction = {
                id: id_count,
                category: action.payload.category,
                date: action.payload.date,
                description: action.payload.description,
                sum: action.payload.sum
            }
            id_count++;
            return [...state, newTransaction];
            break;
        case DELETE_TRANSACTION:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
            break;
        case UPDATE_TRANSACTION:
            return insertItem([...state.slice(0, action.id), ...state.slice(action.id + 1)], action);
            break;
        default:
            return state;
            break;
    }
}