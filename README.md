# SpaceXLaunchExplorer

# Setup

-   Clone the repo from git and install all packages.
-   `sh $ npm install`

-   Create a debug.keystore file and add it inside `diff android/app`.
-   Go to `diff /ios` and do a `sh $pod instal`
-   Come back to root folder and run `sh $npm android` or `sh $npm ios` for respetive environments.

# Icon implementation

-   Put your SVG inside `diff src/components/icons/svgs`.
-   You can use the CreateIcon.tsx to create themed icons by passing svg and additonal props such as size and color etc.
-   Refer `diff src/components/CreateIcon.tsx` and `diff src/components/BackIcon.tsx`

# Issues with API

-   Launches API doesn't provide any parameters to handle the pagination(eg. total_count, current_page)
-   LaunchPads API gives null values for location data. So couldn't implement location pins.
