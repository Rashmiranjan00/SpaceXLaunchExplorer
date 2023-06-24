import { createAsyncThunk } from "@reduxjs/toolkit";
import { LunchPadsActionTypes } from "./launchPadsActionTypes";
import { type LaunchPadsState } from "./launchPadModels/launchPadsModel";
import { setLoading, setLaunchPads } from "./launchPadsSlice";

export const getLaunchPads = createAsyncThunk(
    LunchPadsActionTypes.getLaunchPads,
    async ({ launchPads }: LaunchPadsState, { dispatch }) => {
        dispatch(setLoading(true));
        dispatch(setLaunchPads(launchPads));
        dispatch(setLoading(false));
    }
);
