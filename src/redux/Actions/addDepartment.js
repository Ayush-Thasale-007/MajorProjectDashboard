import { AddType } from "../types/cakeType";

export const addDepartment = (value) => {
    return async (dispatch) => {
        dispatch({
            type: AddType.ADD_DEPT,
            payload: value,
        });
    }
}
export const deleteDepartment = (value) => {
    return async (dispatch) => {
        dispatch({
            type: AddType.DELETE_DEPT,
            payload: value,
        });
    }
}


