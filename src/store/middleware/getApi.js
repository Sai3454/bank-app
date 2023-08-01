import axios from "axios";
import { getApiCall } from "../getApi";
import Cookies from 'js-cookie'

const getApi =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== getApiCall.type) return next(action);

        let { url, method, onStart, params, onSuccess, onError, onLoginFailue } = action.payload;

        if (onStart) dispatch({ type: onStart });

        const headers = { 
            'content-type': 'application/json', 
            'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF'
        }
        
        try {
            const response = await axios.request({
                baseURL: "https://bursting-gelding-24.hasura.app/api/rest",
                url,
                headers,
                method,
                params
            });

            if(response.data.get_user_id.length > 0){
                let role = "user"
                if(response.data.get_user_id[0].id === 3){
                    role = "admin"
                }

                Cookies.set('x-hasura-admin-secret', 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF', {
                    expires: 30,
                    path: '/',
                })
                Cookies.set('x-hasura-user-id', response.data.get_user_id[0].id, {
                    expires: 30,
                    path: '/',
                })
                Cookies.set('x-hasura-user-role', role, {
                    expires: 30,
                    path: '/',
                })
    
                dispatch({ type: onSuccess, payload: response.data });
            }else{
                dispatch({type: onLoginFailue})
            }
        } catch (error) {
            if (onError)
                dispatch({ type: onError, payload: { error: error.message } });
            dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
        }
    };

export default getApi;
