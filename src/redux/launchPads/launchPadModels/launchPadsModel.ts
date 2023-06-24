import { type ApolloError } from "@apollo/client";
import { type Mass, type Distance } from "../../common/commonModels";

import {
    type RocketEngines,
    type RocketFirstStage,
    type RocketLandingLegs,
    type RocketPayloadWeight,
    type RocketSecondStage
} from "../../Rocket/RocketModels";

export interface LaunchPadsState {
    launchPads: LaunchPads[];
    loading?: boolean;
    error?: ApolloError | undefined;
}

export interface LaunchPads {
    attempted_launches: number;
    details: string;
    id: string;
    location: Location;
    name: string;
    successful_launches: number;
    // vehicles_launched: Rocket[];
    wikipedia: string;
}

export interface Rocket {
    active: boolean;
    boosters: number;
    company: string;
    description: string;
    diameter: Distance;
    engines: RocketEngines;
    first_flight: string;
    first_stage: RocketFirstStage;
    height: Distance;
    id: string;
    landing_legs: RocketLandingLegs;
    mass: Mass;
    name: string;
    payload_weights: [RocketPayloadWeight];
    second_stage: RocketSecondStage;
    stages: number;
    success_rate_pct: number;
    type: string;
    wikipedia: string;
}

export interface Location {
    latitude: number;
    longitude: number;
    name: string;
    region: string;
}

export interface GetLaunchPadsVars {
    limit: number;
    offset: number;
}
