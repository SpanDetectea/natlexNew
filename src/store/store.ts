import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentReducer";

const store = configureStore({
    reducer:{
        content: contentReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
