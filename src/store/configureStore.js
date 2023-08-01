import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "./employees";
import transactionsReducer from "./transactions";
import error from "./middleware/error";
import api from "./middleware/api";
import getApi from "./middleware/getApi";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        api,
        getApi,
        error,      
    ],
});

export default store;
