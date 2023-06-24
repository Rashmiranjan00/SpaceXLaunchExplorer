import { useEffect } from "react";
import { type ApolloError, useLazyQuery } from "@apollo/client";

import { type LaunchPads } from "../redux/launchPads/launchPadModels/launchPadsModel";

import { FETCH_LAUNCHPADS } from "../apollo/queries/fetchLaunchPads";

interface Result {
    launchPads?: LaunchPads[];
    loading: boolean;
    error: ApolloError | undefined;
}

export const useLaunchPads = (): Result => {
    const [fetchLaunchPads, { data: launchPads, loading, error }] =
        useLazyQuery<LaunchPads[]>(FETCH_LAUNCHPADS);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchLaunchPads();
    }, [fetchLaunchPads]);
    return {
        launchPads,
        loading,
        error
    };
};
