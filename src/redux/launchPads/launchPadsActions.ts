import { createAsyncThunk } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";

import { LunchPadsActionTypes } from "./launchPadsActionTypes";
import {
    type LaunchPads,
    GET_LAUNCHPADS,
    type GetLaunchPadsVars
} from "./launchPadsModel";
import { setLoading } from "./launchPadsSlice";

export const getLaunchPads = createAsyncThunk(
    LunchPadsActionTypes.getLaunchPads,
    async ({ limit = 10, offset = 0 }: GetLaunchPadsVars, { dispatch }) => {
        dispatch(setLoading(true));
        const { loading, data, error } = useQuery<
            LaunchPads[],
            GetLaunchPadsVars
        >(GET_LAUNCHPADS, {
            variables: {
                limit,
                offset
            }
        });
        // eslint-disable-next-line no-console
        console.log("LOADING", loading);
        // eslint-disable-next-line no-console
        console.log("DATA", data);
        // eslint-disable-next-line no-console
        console.log("ERROR", error);
        dispatch(setLoading(false));
    }
);
