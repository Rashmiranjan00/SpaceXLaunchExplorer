import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../store";

import {
    type LaunchesState,
    type Launches
} from "./launchesModels/launchesModel";

const base = (state: RootState) => state.main || ({} as RootState["main"]);

export const selectLaunchesState = (state: RootState): LaunchesState =>
    base(state).launches || ({} as LaunchesState);

export const selectLaunches = (state: RootState): Launches[] | null =>
    selectLaunchesState(state).launches;

export const selectLaunchesLoading = (state: RootState): boolean =>
    selectLaunchesState(state).loading ?? false;

export const selectLaunchById = (launchId: string) =>
    createSelector(selectLaunches, launches => {
        return launches.find(({ id }) => id === launchId);
    });
