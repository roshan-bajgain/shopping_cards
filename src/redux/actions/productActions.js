import { ActionTypes } from "../contants/action-type";

export const setproduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload:products
    };
};

export const selected_product = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    };
};