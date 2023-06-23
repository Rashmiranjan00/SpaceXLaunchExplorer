import { gql } from "@apollo/client";
import { type Mass, type Distance } from "../common/commonModels";

import {
    type RocketEngines,
    type RocketFirstStage,
    type RocketLandingLegs,
    type RocketPayloadWeight,
    type RocketSecondStage
} from "../Rocket/RocketModels";

export interface LaunchPadsState {
    launchPads: LaunchPads[];
    loading: boolean;
}

export interface LaunchPads {
    attempted_launches: number;
    details: string;
    id: string;
    location: Location;
    name: string;
    successful_launches: number;
    vehicles_launched: Rocket[];
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

export const GET_LAUNCHPADS = gql`
    query Launchpads($limit: Int, $offset: Int) {
        launchpads(limit: $limit, offset: $offset) {
            attempted_launches
            details
            id
            location {
                latitude
                longitude
                name
                region
            }
            name
            status
            successful_launches
            vehicles_launched {
                active
                boosters
                company
                cost_per_launch
                country
                description
                diameter {
                    feet
                    meters
                }
                engines {
                    engine_loss_max
                    layout
                    number
                    propellant_1
                    propellant_2
                    thrust_sea_level {
                        kN
                        lbf
                    }
                    thrust_to_weight
                    thrust_vacuum {
                        kN
                        lbf
                    }
                    type
                    version
                }
                first_flight
                first_stage {
                    burn_time_sec
                    engines
                    fuel_amount_tons
                    reusable
                    thrust_sea_level {
                        kN
                        lbf
                    }
                    thrust_vacuum {
                        kN
                        lbf
                    }
                }
                height {
                    feet
                    meters
                }
                id
                landing_legs {
                    material
                    number
                }
                mass {
                    kg
                    lb
                }
                name
                payload_weights {
                    id
                    kg
                    lb
                    name
                }
                second_stage {
                    burn_time_sec
                    engines
                    fuel_amount_tons
                    payloads {
                        composite_fairing {
                            diameter {
                                feet
                                meters
                            }
                            height {
                                feet
                                meters
                            }
                        }
                        option_1
                    }
                    thrust {
                        kN
                        lbf
                    }
                }
                stages
                success_rate_pct
                type
                wikipedia
            }
            wikipedia
        }
    }
`;
