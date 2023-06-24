import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type LaunchPadsState, type LaunchPads } from "./launchPadsModel";

export const initialState: LaunchPadsState = {
    launchPads: [],
    loading: false
};

export const LaunchPadsSlice = createSlice({
    name: "launchpads",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            return { ...state, loading: payload };
        },
        setLaunchPads: (state, { payload }: PayloadAction<LaunchPads[]>) => {
            return { ...state, launchPads: payload };
        }
    }
});

export default LaunchPadsSlice.reducer;

export const { setLaunchPads, setLoading } = LaunchPadsSlice.actions;
