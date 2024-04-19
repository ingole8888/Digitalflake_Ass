import * as types from "./action.types";
import { loadData, saveData } from "../../hoc/localstorage"

const initialstate = {
    isLoading: false,
    isError: true,
    isAuth: loadData("auth") || false,
    token: loadData("token") || "",
}

export const reducer = (state = initialstate, action) => {
    const { type, payload, user } = action

    switch (type) {
        case types.GET_LOGIN_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_LOGIN_SUCCESS:
            let logtoken = payload
            saveData("token", logtoken)

            let user1 = user
            saveData("currentUser", JSON.stringify(user1))

            let authin = true
            saveData("auth", authin)


            return { ...state, isLoading: false, isAuth: authin, token: logtoken, user1 }

        case types.GET_LOGIN_FAILURE:
            return { ...state, isLoading: false, isAuth: false, token: "", isError: true }


        case types.GET_SIGNUP_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_SIGNUP_SUCCESS:
            let newUser = user
            return { ...state, isLoading: false, data: newUser }

        case types.GET_SIGNUP_FAILURE:
            return { ...state, isLoading: false, isError: true }


        default:
            return state
    }
}
