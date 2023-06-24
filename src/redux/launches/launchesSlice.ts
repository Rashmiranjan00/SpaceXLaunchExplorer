import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
    type LaunchesState,
    type Launches
} from "./launchesModels/launchesModel";

export const initialState: LaunchesState = {
    launches: [],
    loading: false,
    error: undefined
};

export const LaunchesSlice = createSlice({
    name: "Launches",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            return { ...state, loading: payload };
        },
        setLaunches: (state, { payload }: PayloadAction<Launches[]>) => {
            return { ...state, Launches: payload };
        }
    }
});

export default LaunchesSlice.reducer;

export const { setLaunches, setLoading } = LaunchesSlice.actions;
