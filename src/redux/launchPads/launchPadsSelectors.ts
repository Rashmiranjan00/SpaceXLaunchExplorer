import { type RootState } from "../store";
import { type LaunchPadsState, type LaunchPads } from "./launchPadsModel";

const base = (state: RootState) => state.main || ({} as RootState["main"]);

export const selectLaunchPadsState = (state: RootState): LaunchPadsState =>
    base(state).launchPads || ({} as LaunchPadsState);

export const selectLaunchPads = (state: RootState): LaunchPads[] | null =>
    selectLaunchPadsState(state).launchPads;

export const selectLoading = (state: RootState): boolean =>
    selectLaunchPadsState(state).loading || false;
