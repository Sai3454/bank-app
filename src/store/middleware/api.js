import axios from "axios";
import { apiCallBegan } from "../api";
import Cookies from "js-cookie";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== apiCallBegan.type) return next(action);

        let { url, method, data, onStart, params, onSuccess, onError } = action.payload;

        if (onStart) dispatch({ type: onStart });

        
        const token = Cookies.get('x-hasura-admin-secret')
        const userId = Cookies.get('x-hasura-user-id')
        const role = Cookies.get('x-hasura-user-role')


        if(!data) data = {}

        const headers = {
            "content-type": "application/json",
            "x-hasura-admin-secret": token,
            "x-hasura-role": role,
            "x-hasura-user-id": userId
        }

        try {
            const response = await axios.request({
                baseURL: "https://bursting-gelding-24.hasura.app/api/rest",
                url,
                headers,
                method,
                params,
                data
            });

            dispatch({ type: onSuccess, payload: response.data });
            dispatch({type: "transactions/updateAllTypeTransactions"})
        } catch (error) {
            if (onError)
                dispatch({ type: onError, payload: { error: error.message } });
            dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
        }
    };

export default api;
