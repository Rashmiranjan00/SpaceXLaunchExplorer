/*
 * Do not change format of route names. Underscores are used to handle getting correct route name from states
 * as well as easier readability
 *
 * We can split the route name from a navigation event at the `-`.
 */

export const mainRoutes = {
    root: "main_root",
    home: "navigation_bar"
};

export const tabRoutes = {
    launchTab: "launch_tab",
    mapTab: "map_tab",
    profileTab: "profile_tab"
} as const;

export const mapRoutes = {
    home: "map"
} as const;

export const launchesRoutes = {
    home: "launches",
    launchDetails: "launch_details"
} as const;

export default {
    main: mainRoutes
};
