import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { s3 } from "../../../util/Sizes";
import { selectLaunches } from "../../../redux/launches/launchesSelectors";
import LaunchCard from "./LaunchCard";
import { LaunchesSpinner } from "../../../components/Spinner";

interface LaunchListProps {
    launchesLoading: boolean;
}

const LaunchesList = ({ launchesLoading }: LaunchListProps) => {
    const launches = useSelector(selectLaunches);
    // const handleEndReached = () => {
    //     loadMore();
    // };

    if (launchesLoading || !launches) return <LaunchesSpinner />;

    return (
        <StyledFlatList
            data={launches}
            keyExtractor={item => item?.id}
            // refreshing={launchesLoading}
            // onRefresh={handleRefresh}
            // onEndReached={handleEndReached}
            onEndReachedThreshold={0.75}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <LaunchCard launches={item} />;
            }}
        />
    );
};

const StyledFlatList = styled(FlatList)`
    padding-top: ${s3};
`;

export default LaunchesList;
