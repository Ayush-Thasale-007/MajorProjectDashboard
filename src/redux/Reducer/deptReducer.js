import { AddType } from "../types/cakeType";

let initialState = {
    dept: [],
};

export const deptReducer = (state= initialState, action) => {
      console.log(action,"actionaction");

    switch(action.type) {
        case AddType.ADD_DEPT:
            return {
                ...state,
                dept: [...state.dept,action.payload],
                msg:"success"
            }
           

        case AddType.DELETE_DEPT:
            console.log("delreducer" + action.payload)
            
            return {
                ...state,
                dept: action.payload,
            }

        default:
            return state;
    }
}