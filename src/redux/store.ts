import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistCombineReducers,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LaunchPadsReducer from "./launchPads/launchPadsSlice";

export const mainPersistConfig = {
    key: "main",
    version: 1,
    storage: AsyncStorage
};

export const persistedMainReducer = persistCombineReducers(mainPersistConfig, {
    launchPads: LaunchPadsReducer
});

const rootReducer = combineReducers({
    main: persistedMainReducer
});

const store = configureStore({
    reducer: rootReducer,
    // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ],
                warnAfter: 100
            },
            immutableCheck: { warnAfter: 100 }
        })
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
