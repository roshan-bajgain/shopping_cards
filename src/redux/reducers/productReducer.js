import { ActionTypes } from "../contants/action-type"

const initial_state = {
    product:[{
        id:23,
        title: "Roshan",
        catogries: "Programmer",
    }]
}

export const  productReducer = (state=initial_state, {type,payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return state;
        default:
            return state;

    }
}