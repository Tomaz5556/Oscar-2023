import { ActivityIndicator, View } from "react-native";

import theme from "../global/styles/theme";
import React from "react";

export function Loading() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a00000',
        }}>
            <ActivityIndicator
                color={theme.colors.secondary}
                size="large"
            />
        </View>
    );
}