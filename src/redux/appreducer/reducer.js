import * as types from "./action.types";
const initialState = {
    isLoading: false,
    isLoad: false,
    isError: false,
    allcomplains: [],
    getproducts:[]
};


export const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {

        case types.GET_ALLCOMPLAIN_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.GET_ALLCOMPLAIN_SUCCESS: {
            return { ...state, isLoading: false, isError: false, allcomplains: payload }
        }

        case types.GET_ALLCOMPLAIN_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }


        case types.ADD_COMPLAIN_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.ADD_COMPLAIN_SUCCESS: {
            return { ...state, isLoading: false, isError: false }
        }

        case types.ADD_COMPLAIN_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        case types.GET_ALLPRODUCT_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.GET_ALLPRODUCT_SUCCESS: {
            return { ...state, isLoading: false, isError: false, getproducts: payload }
        }

        case types.GET_ALLPRODUCT_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }


        case types.ADD_PRODUCT_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.ADD_PRODUCT_SUCCESS: {
            return { ...state, isLoading: false, isError: false }
        }

        case types.ADD_PRODUCT_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }


        default: {
            return state;
        }
    }
}