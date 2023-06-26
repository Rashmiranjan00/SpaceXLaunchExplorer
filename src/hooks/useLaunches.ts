/* eslint-disable */
import { useEffect, useState } from 'react';
import { type ApolloError, useQuery } from '@apollo/client';

import {
    type GetLaunchesVars,
    type LaunchesDataType,
} from '../redux/launches/launchesModels/launchesModel';

import { FETCH_LAUNCHES } from '../apollo/queries/fetchLaunches';

interface Result {
    launches?: LaunchesDataType;
    loading: boolean;
    error: ApolloError | undefined;
    loadMore: () => void;
}

export const useLaunches = (): Result => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const {
        data: launches,
        loading,
        error,
        fetchMore,
    } = useQuery<LaunchesDataType, GetLaunchesVars>(FETCH_LAUNCHES, {
        variables: { limit: 10, offset: 0 },
    });

    // Calls the Graphql API.
    useEffect(() => {
        if (!loading && currentPage !== 1) {
            fetchMore({
                variables: {
                    limit: 10,
                    offset: currentPage,
                },
            });
        }
    }, [currentPage, loading]);

    // Should be called from end of list for pagination
    const loadMore = () => {
        console.log('here');
        if (loading) {
            return;
        }

        if (currentPage * 10 === launches?.launches.length) {
            setCurrentPage(prevState => prevState + 1);
        }
    };

    return {
        launches,
        loading,
        error,
        loadMore,
    };
};
