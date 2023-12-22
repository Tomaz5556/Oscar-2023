import { StyledLinearGradient, StyledActivityIndicator } from "./styles";

import theme from "../../global/styles/theme";
import React from "react";

export function Loading() {
    return (
        <StyledLinearGradient
            colors={['#000000', '#a00000', '#ff0000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <StyledActivityIndicator
                color={theme.colors.secondary}
                size={70}
            />
        </StyledLinearGradient>
    );
}