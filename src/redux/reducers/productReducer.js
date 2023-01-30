import { ActionTypes } from "../contants/action-type"

const initial_state = {
    product:[]
}

export const  productReducer = (state = initial_state, {type,payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,product:payload};
        default:
            return state;

    }
}