import { CoinMarketResponse } from "../types/interfaces";
export declare const assetsApi: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, {
    getAssets: import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>;
    getAssetById: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>;
    getCoinMarketChart: import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>;
}, "restAPI", string, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react").reactHooksModuleName>;
export declare const useGetAssetsQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: CoinMarketResponse[] | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
    currentData?: CoinMarketResponse[] | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
    currentData?: CoinMarketResponse[] | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp">>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
    currentData?: CoinMarketResponse[] | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
    currentData?: CoinMarketResponse[] | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)>> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: {
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
} | typeof import("@reduxjs/toolkit/query").skipToken, options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: boolean | number;
} & {
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: CoinMarketResponse[] | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
        currentData?: CoinMarketResponse[] | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | ({
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
        currentData?: CoinMarketResponse[] | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp">>) | ({
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
        currentData?: CoinMarketResponse[] | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>> & {
        currentData?: CoinMarketResponse[] | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)>> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}) | undefined) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<{
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse[], "restAPI", unknown>>;
}, useGetAssetByIdQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp">>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)>> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: string | typeof import("@reduxjs/toolkit/query").skipToken, options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: boolean | number;
} & {
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | ({
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp">>) | ({
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)>> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}) | undefined) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>>;
}, useLazyGetAssetByIdQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp">>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
    currentData?: CoinMarketResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)>> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & Omit<{
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | ({
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp">>) | ({
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>> & {
        currentData?: CoinMarketResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)>> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}, "skip">) | undefined) => [(arg: string, preferCacheValue?: boolean) => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, CoinMarketResponse, "restAPI", unknown>>, [R][R extends any ? 0 : never] & {
    reset: () => void;
}, {
    lastArg: string;
}], useGetCoinMarketChartQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    } | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    id: string;
    vs_currency: string;
    days: string | number;
    interval?: "5m" | "hourly" | "daily";
    precision?: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}, "restAPI", unknown>> & {
    currentData?: {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    } | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    id: string;
    vs_currency: string;
    days: string | number;
    interval?: "5m" | "hourly" | "daily";
    precision?: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}, "restAPI", unknown>> & {
    currentData?: {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    } | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp">>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    id: string;
    vs_currency: string;
    days: string | number;
    interval?: "5m" | "hourly" | "daily";
    precision?: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}, "restAPI", unknown>> & {
    currentData?: {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    } | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
    id: string;
    vs_currency: string;
    days: string | number;
    interval?: "5m" | "hourly" | "daily";
    precision?: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}, "restAPI", unknown>> & {
    currentData?: {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    } | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)>> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: {
    id: string;
    vs_currency: string;
    days: string | number;
    interval?: "5m" | "hourly" | "daily";
    precision?: string;
} | typeof import("@reduxjs/toolkit/query").skipToken, options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: boolean | number;
} & {
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: {
            prices: [number, number][];
            market_caps: [number, number][];
            total_volumes: [number, number][];
        } | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>> & {
        currentData?: {
            prices: [number, number][];
            market_caps: [number, number][];
            total_volumes: [number, number][];
        } | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | ({
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>> & {
        currentData?: {
            prices: [number, number][];
            market_caps: [number, number][];
            total_volumes: [number, number][];
        } | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp">>) | ({
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>> & {
        currentData?: {
            prices: [number, number][];
            market_caps: [number, number][];
            total_volumes: [number, number][];
        } | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>> & {
        currentData?: {
            prices: [number, number][];
            market_caps: [number, number][];
            total_volumes: [number, number][];
        } | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)>> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}) | undefined) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<{
        id: string;
        vs_currency: string;
        days: string | number;
        interval?: "5m" | "hourly" | "daily";
        precision?: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, string, {
        prices: [number, number][];
        market_caps: [number, number][];
        total_volumes: [number, number][];
    }, "restAPI", unknown>>;
};
