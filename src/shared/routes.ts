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

export default {
    welcome: "welcome" as const,
    main: mainRoutes
};
