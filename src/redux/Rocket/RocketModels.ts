import { type Force, type Distance } from "../common/commonModels";

export interface RocketEngines {
    engine_loss_max: string;
    layout: string;
    number: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: Force;
    thrust_to_weight: number;
    thrust_vaccum: Force;
    type: string;
    version: string;
}

export interface RocketFirstStage {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    reusable: boolean;
    thrust_sea_level: Force;
    thrust_vaccum: Force;
}

export interface RocketLandingLegs {
    material: string;
    number: number;
}

export interface RocketPayloadWeight {
    id: string;
    kg: number;
    lb: number;
    name: string;
}

export interface RocketSecondStage {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    payloads: RocketSecondStagePayloads;
    thrust: Force;
}

export interface RocketSecondStagePayloads {
    composite_fairing: RocketSecondStageCompositeFairing;
    option_1: string;
}

export interface RocketSecondStageCompositeFairing {
    diameter: Distance;
    height: Distance;
}
