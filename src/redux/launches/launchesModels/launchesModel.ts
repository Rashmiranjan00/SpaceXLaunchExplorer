import { type ApolloError } from "@apollo/client";
import { type Distance, type Mass } from "../../common/commonModels";
import {
    type RocketEngines,
    type RocketFirstStage,
    type RocketLandingLegs,
    type RocketPayloadWeight,
    type RocketSecondStage
} from "../../Rocket/RocketModels";

export interface LaunchesState {
    launches: Launches[];
    loading?: boolean;
    error?: ApolloError | undefined;
}

export interface Launches {
    details: string;
    id: string;
    is_tentitive: boolean;
    launch_date_local: Date;
    launch_date_unix: Date;
    launch_date_utc: Date;
    launch_site: LaunchSite;
    launch_success: boolean;
    links: LaunchLinks;
    mission_id: string[];
    mission_name: string;
    rocket: LaunchRocket;
    static_fire_date_unix: Date;
    static_fire_date_utc: Date;
    telemetry: LaunchTelemetry;
    tentative_max_precision: string;
    upcoming: boolean;
}

export interface LaunchTelemetry {
    flight_club: string;
}

export interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export interface LaunchLinks {
    article_link: string;
    flickr_images: string[];
    mission_patch: string;
    mission_patch_small: string;
    presskit: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_media: string;
    reddit_recovery: string;
    video_link: string;
    wikipedia: string;
}

export interface LaunchRocket {
    fairings: LaunchRocketFairings;
    first_stage: LaunchRocketFirstStage;
    rocket: Rocket;
    rocket_name: string;
    rocket_type: string;
    second_stage: LaunchRocketSecondStage;
}

export interface LaunchRocketFairings {
    recovered: boolean;
    recovery_attempt: boolean;
    reused: boolean;
    ship: string;
}

export interface LaunchRocketFirstStage {
    cores: LaunchRocketFirstStageCore[];
}

export interface LaunchRocketFirstStageCore {
    block: number;
    core: Core;
    flight: number;
    gridfins: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
    legs: boolean;
    reused: boolean;
}

export interface Core {
    asds_attempts: number;
    asds_landings: number;
    block: number;
    id: string;
    missions: CapsuleMission[];
    original_launch: Date;
    reuse_count: number;
    rtls_attempts: number;
    rtls_landings: number;
    status: string;
    water_landing: boolean;
}

export interface CapsuleMission {
    flight: number;
    name: string;
}

export interface Rocket {
    active: boolean;
    boosters: number;
    company: string;
    cost_per_launch: number;
    country: string;
    description: string;
    diameter: Distance;
    engines: RocketEngines;
    first_flight: Date;
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

export interface LaunchRocketSecondStage {
    block: number;
    payloads: Payload[];
}

export interface Payload {
    customers: string[];
    id: number;
    manufacturer: string;
    nationality: string;
    norad_id: number[];
    orbit: string;
    orbit_params: PayloadOrbitParams;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    payload_type: string;
    reused: boolean;
}

export interface PayloadOrbitParams {
    apoapsis_km: number;
    arg_of_pericenter: number;
    eccentricity: number;
    epoch: Date;
    inclination_deg: number;
    lifespan_years: number;
    longitude: number;
    mean_anomaly: number;
    mean_motion: number;
    periapsis_km: number;
    period_min: number;
    raan: number;
    reference_system: string;
    regime: string;
    semi_major_axis_km: number;
}
