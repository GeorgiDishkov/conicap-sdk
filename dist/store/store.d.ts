export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    restAPI: import("@reduxjs/toolkit/query").CombinedState<{}, string, "restAPI">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        restAPI: import("@reduxjs/toolkit/query").CombinedState<{}, string, "restAPI">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
