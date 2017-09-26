export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";

// Transaction actions
export function addTransaction(values) {
    return {
        type: ADD_TRANSACTION,
        payload: values
    }
}
export function deleteTransaction(id) {
    return {
        type: DELETE_TRANSACTION,
        payload: id
    }
}
export function updateTransaction(id, item) {
    return {
        type: UPDATE_TRANSACTION,
        id: id,
        item: item
    }
}

// Categories actions
export function getCategories() {
    return {
        type: GET_CATEGORIES
    }
}
export function addCategory(values) {
    return {
        type: ADD_CATEGORY,
        payload: values
    }
}
export function editCategory(id, item) {
    return {
        type: EDIT_CATEGORY,
        id: id,
        item: item
    }
}
export function deleteCategory(id) {
    return {
        type: DELETE_CATEGORY,
        payload: id
    }
}