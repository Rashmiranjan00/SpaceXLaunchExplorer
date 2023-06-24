import React from "react";
import { SafeAreaThemedView } from "../components";

const SafeAreaWrapper: React.FC = ({ children }) => (
    <SafeAreaThemedView
        safeAreaEdgesOverride={["top", "left", "right"]}
        customStyles={{ height: "100%" }}>
        {children}
    </SafeAreaThemedView>
);

export default SafeAreaWrapper;
