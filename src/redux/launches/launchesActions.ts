import { createAsyncThunk } from "@reduxjs/toolkit";
import { LaunchesActionTypes } from "./launchesActionTypes";
import { type LaunchesState } from "./launchesModels/launchesModel";
import { setLoading, setLaunches } from "./launchesSlice";

export const getLaunches = createAsyncThunk(
    LaunchesActionTypes.getLaunches,
    async ({ launches, loading }: LaunchesState, { dispatch }) => {
        dispatch(setLoading(true));
        dispatch(setLaunches(launches));
        dispatch(setLoading(loading));
    }
);
