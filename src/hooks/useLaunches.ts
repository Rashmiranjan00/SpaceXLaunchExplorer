import { useEffect } from "react";
import { type ApolloError, useLazyQuery } from "@apollo/client";

import { type Launches } from "../redux/launches/launchesModels/launchesModel";

import { FETCH_LAUNCHES } from "../apollo/queries/fetchLaunches";

interface Result {
    launches?: Launches[];
    loading: boolean;
    error: ApolloError | undefined;
}

export const useLaunches = (): Result => {
    const [fetchLaunches, { data: launches, loading, error }] =
        useLazyQuery<Launches[]>(FETCH_LAUNCHES);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchLaunches();
    }, [fetchLaunches]);
    return {
        launches,
        loading,
        error
    };
};
