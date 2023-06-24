import { gql } from "@apollo/client";

export const FETCH_LAUNCHPADS = gql`
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
            wikipedia
        }
    }
`;
