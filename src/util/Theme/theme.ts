export enum DeviceTheme {
    Dark = "dark",
    Light = "light"
}

/*
 ** Colors
 */
interface ColorsInterface {
    sapphire_70: string;
    sapphire_60: string;
    sapphire_50: string;
    sapphire_40: string;
    sapphire_30: string;
    sapphire_20: string;
    sapphire_10: string;
    sapphire_05: string;

    blue_70: string;
    blue_60: string;
    blue_50: string;
    blue_40: string;
    blue_30: string;
    blue_20: string;
    blue_10: string;
    blue_05: string;

    green_70: string;
    green_60: string;
    green_50: string;
    green_40: string;
    green_30: string;
    green_20: string;
    green_10: string;
    green_05: string;

    red_70: string;
    red_60: string;
    red_50: string;
    red_40: string;
    red_30: string;
    red_20: string;
    red_10: string;
    red_05: string;

    red_40_transparent_30: string;
    red_40_transparent_10: string;

    yellow_70: string;
    yellow_60: string;
    yellow_50: string;
    yellow_40: string;
    yellow_30: string;
    yellow_20: string;
    yellow_10: string;
    yellow_05: string;

    yellow_transparent_20: string;

    gray_100: string;
    gray_90: string;
    gray_80: string;
    gray_70: string;
    gray_60: string;
    gray_50: string;
    gray_40: string;
    gray_30: string;
    gray_20: string;
    gray_10: string;
    gray_05: string;

    gray_transparent_90: string;
    gray_transparent_80: string;
    gray_transparent_70: string;
    gray_transparent_60: string;
    gray_transparent_50: string;
    gray_transparent_40: string;
    gray_transparent_30: string;
    gray_transparent_20: string;
    gray_transparent_10: string;
    gray_transparent_05: string;

    white_100: string;

    white_transparent_90: string;
    white_transparent_80: string;
    white_transparent_70: string;
    white_transparent_60: string;
    white_transparent_50: string;
    white_transparent_40: string;
    white_transparent_30: string;
    white_transparent_20: string;
    white_transparent_10: string;
    white_transparent_05: string;

    black_65: string;
    black_100: string;
}

export const Colors: ColorsInterface = {
    sapphire_70: "#050C4D",
    sapphire_60: "#081270",
    sapphire_50: "#0A1899",
    sapphire_40: "#0E1FC1",
    sapphire_30: "#535FCF",
    sapphire_20: "#949CE3",
    sapphire_10: "#D2D7F0",
    sapphire_05: "#EBEDFA",

    blue_70: "#102C60",
    blue_60: "#174291",
    blue_50: "#1E54B7",
    blue_40: "#276EF1",
    blue_30: "#5B91F5",
    blue_20: "#A0BFF8",
    blue_10: "#D4E2FC",
    blue_05: "#EFF3FE",

    green_70: "#10462D",
    green_60: "#03582F",
    green_50: "#03703C",
    green_40: "#05944F",
    green_30: "#06C167",
    green_20: "#66D19E",
    green_10: "#ADDEC9",
    green_05: "#E6F2ED",

    red_70: "#5A0A00",
    red_60: "#870F00",
    red_50: "#AB1300",
    red_40: "#E11900",
    red_30: "#E85C4A",
    red_20: "#F1998E",
    red_10: "#FED7D2",
    red_05: "#FFEFED",

    red_40_transparent_30: "rgba(225,25,0,0.3)",
    red_40_transparent_10: "rgba(225,25,0,0.1)",

    yellow_70: "#FBA402",
    yellow_60: "#FFBA0A",
    yellow_50: "#FFCE00",
    yellow_40: "#FBE402",
    yellow_30: "#FEE57D",
    yellow_20: "#FEECA3",
    yellow_10: "#FEF4C9",
    yellow_05: "#FEFBEF",

    yellow_transparent_20: "rgba(255, 206, 0, 0.2)",

    gray_100: "#0A0909",
    gray_90: "#232222",
    gray_80: "#3B3A3B",
    gray_70: "#545353",
    gray_60: "#6C6C6C",
    gray_50: "#858484",
    gray_40: "#9D9D9D",
    gray_30: "#B6B5B5",
    gray_20: "#CECECE",
    gray_10: "#E7E6E6",
    gray_05: "#F3F3F3",

    gray_transparent_90: "rgba(10, 9, 9, 0.9)",
    gray_transparent_80: "rgba(10, 9, 9, 0.8)",
    gray_transparent_70: "rgba(10, 9, 9, 0.7)",
    gray_transparent_60: "rgba(10, 9, 9, 0.6)",
    gray_transparent_50: "rgba(10, 9, 9, 0.5)",
    gray_transparent_40: "rgba(10, 9, 9, 0.4)",
    gray_transparent_30: "rgba(10, 9, 9, 0.3)",
    gray_transparent_20: "rgba(10, 9, 9, 0.2)",
    gray_transparent_10: "rgba(10, 9, 9, 0.1)",
    gray_transparent_05: "rgba(10, 9, 9, 0.05)",

    white_100: "#FFFFFF",

    white_transparent_90: "rgba(255, 255, 255, 0.9)",
    white_transparent_80: "rgba(255, 255, 255, 0.8)",
    white_transparent_70: "rgba(255, 255, 255, 0.7)",
    white_transparent_60: "rgba(255, 255, 255, 0.6)",
    white_transparent_50: "rgba(255, 255, 255, 0.5)",
    white_transparent_40: "rgba(255, 255, 255, 0.4)",
    white_transparent_30: "rgba(255, 255, 255, 0.3)",
    white_transparent_20: "rgba(255, 255, 255, 0.2)",
    white_transparent_10: "rgba(255, 255, 255, 0.1)",
    white_transparent_05: "rgba(255, 255, 255, 0.05)",

    black_65: "#706D6E",
    black_100: "#000"
};

const paragraphLineHeightMod = 1.1;
const headingLineHeightMod = 1;
const lineHeight = (modifier: number, fontSize: number) =>
    `${modifier * fontSize}px`;

interface TypographyCoreInterface {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    paddingTop?: string;
}

interface TypographyInterface {
    heading_special_lg: TypographyCoreInterface;
    heading_special_md: TypographyCoreInterface;
    heading_special_rg: TypographyCoreInterface;
    heading_special_sm: TypographyCoreInterface;
    heading_xx_lg: TypographyCoreInterface;
    heading_lg: TypographyCoreInterface;
    heading_md: TypographyCoreInterface;
    heading_rg: TypographyCoreInterface;
    heading_sm: TypographyCoreInterface;
    label_med_lg: TypographyCoreInterface;
    label_med_md: TypographyCoreInterface;
    label_med_rg: TypographyCoreInterface;
    label_med_sm: TypographyCoreInterface;
    label_reg_lg: TypographyCoreInterface;
    label_reg_md: TypographyCoreInterface;
    label_reg_rg: TypographyCoreInterface;
    label_reg_sm: TypographyCoreInterface;
    paragraph_reg_lg: TypographyCoreInterface;
    paragraph_reg_md: TypographyCoreInterface;
    paragraph_reg_rg: TypographyCoreInterface;
    paragraph_reg_sm: TypographyCoreInterface;
}

export const Typography: TypographyInterface = {
    heading_special_lg: {
        fontFamily: "MaisonNeue-Bold",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: lineHeight(headingLineHeightMod, 32)
    },

    heading_special_md: {
        fontFamily: "MaisonNeue-Bold",
        fontWeight: "700",
        fontSize: "28px",
        lineHeight: lineHeight(headingLineHeightMod, 28)
    },

    heading_special_rg: {
        fontFamily: "MaisonNeue-Bold",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: lineHeight(headingLineHeightMod, 24)
    },

    heading_special_sm: {
        fontFamily: "MaisonNeue-Bold",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: lineHeight(headingLineHeightMod, 20)
    },

    heading_xx_lg: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "40px",
        lineHeight: lineHeight(headingLineHeightMod, 40)
    },

    heading_lg: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "32px",
        lineHeight: lineHeight(headingLineHeightMod, 32)
    },

    heading_md: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "28px",
        lineHeight: lineHeight(headingLineHeightMod, 28)
    },

    heading_rg: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: lineHeight(headingLineHeightMod, 24)
    },

    heading_sm: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: lineHeight(headingLineHeightMod, 20)
    },

    label_med_lg: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "18px",
        paddingTop: "4px"
    },

    label_med_md: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "16px",
        paddingTop: "3px"
    },

    label_med_rg: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        paddingTop: "2px"
    },

    label_med_sm: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "12px",
        paddingTop: "1px"
    },

    label_reg_lg: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "18px",
        paddingTop: "4px"
    },
    label_reg_md: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "16px",
        paddingTop: "3px"
    },

    label_reg_rg: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        paddingTop: "2px"
    },

    label_reg_sm: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "12px",
        paddingTop: "1px"
    },

    paragraph_reg_lg: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: lineHeight(paragraphLineHeightMod, 18),
        paddingTop: "4px"
    },

    paragraph_reg_md: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: lineHeight(paragraphLineHeightMod, 16),
        paddingTop: "3px"
    },

    paragraph_reg_rg: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: lineHeight(paragraphLineHeightMod, 14),
        paddingTop: "2px"
    },

    paragraph_reg_sm: {
        fontFamily: "TTCommons-Regular",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: lineHeight(paragraphLineHeightMod, 12),
        paddingTop: "1px"
    }
};

interface CoreStylesInterface {
    background_primary: string;
    background_secondary: string;
    background_tertiary: string;
    content_primary: string;
    content_secondary: string;
    border_opaque: string;
    link: string;
    negative: string;
    validation_color: string;
}

interface ButtonDisabledInterface {
    background_color: string;
    text_color: string;
    border_color?: string;
}

export interface ButtonCoreInterface {
    background_color: string;
    underlay_color: string;
    text_color: string;
    border_color?: string;
    disabled: ButtonDisabledInterface;
}

interface ButtonStylesInterface {
    button_primary: ButtonCoreInterface;
    button_secondary: ButtonCoreInterface;
    button_tertiary: ButtonCoreInterface;
}

interface ProfileImageBorderStyleInterface {
    borderRadius: string;
    borderWidth: string;
    borderColor: string;
}

interface BorderStyleInterface {
    profile_image: ProfileImageBorderStyleInterface;
}

interface ErrorStyleInterface {
    border_left_color: string;
    icon_color: string;
}

interface ToastStyleInterface {
    success: ErrorStyleInterface;
    error: ErrorStyleInterface;
    network: ErrorStyleInterface;
}

interface LoaderStyleInterface {
    primary_button_loader: string;
    secondary_button_loader: string;
    tertiary_button_loader: string;
    page_loader: string;
}

interface NavBar {
    icon_outline_color: string;
    icon_fill_color: string;
}

interface Placeholder {
    iconColor: (typeof Colors)[keyof typeof Colors];
}

export interface Theme {
    mode: DeviceTheme;
    colors: ColorsInterface;
    typography: TypographyInterface;
    core: CoreStylesInterface;
    buttons: ButtonStylesInterface;
    borders: BorderStyleInterface;
    toast: ToastStyleInterface;
    loader: LoaderStyleInterface;
    NavBar: NavBar;
    placeholder: Placeholder;
}

export const BaseTheme: Theme = {
    mode: DeviceTheme.Light,
    colors: Colors,
    typography: Typography,
    core: {
        background_primary: Colors.white_100,
        background_secondary: Colors.gray_05,
        background_tertiary: Colors.gray_10,

        content_primary: Colors.gray_90,
        content_secondary: Colors.gray_60,

        border_opaque: Colors.gray_10,

        link: Colors.blue_40,
        negative: Colors.red_40,
        validation_color: Colors.red_40
    },

    buttons: {
        button_primary: {
            background_color: Colors.yellow_50,
            underlay_color: Colors.yellow_60,
            text_color: Colors.gray_90,
            disabled: {
                background_color: Colors.gray_05,
                text_color: Colors.gray_40
            }
        },

        button_secondary: {
            background_color: Colors.gray_90,
            underlay_color: Colors.gray_80,
            text_color: Colors.gray_10,
            disabled: {
                background_color: Colors.gray_05,
                text_color: Colors.gray_40
            }
        },

        button_tertiary: {
            background_color: Colors.white_100,
            underlay_color: Colors.gray_80,
            text_color: Colors.gray_90,
            border_color: Colors.gray_90,
            disabled: {
                background_color: Colors.white_100,
                text_color: Colors.gray_20,
                border_color: Colors.gray_20
            }
        }
    },
    borders: {
        profile_image: {
            borderRadius: "100px",
            borderWidth: "0.5px",
            borderColor: Colors.gray_transparent_05
        }
    },
    toast: {
        success: {
            border_left_color: Colors.green_40,
            icon_color: Colors.green_40
        },
        network: {
            border_left_color: Colors.gray_60,
            icon_color: Colors.gray_60
        },
        error: { border_left_color: Colors.red_40, icon_color: Colors.red_40 }
    },
    loader: {
        primary_button_loader: Colors.gray_90,
        secondary_button_loader: Colors.yellow_50,
        tertiary_button_loader: Colors.yellow_50,
        page_loader: Colors.yellow_50
    },
    NavBar: {
        icon_outline_color: Colors.gray_60,
        icon_fill_color: Colors.gray_90
    },
    placeholder: {
        iconColor: Colors.gray_20
    }
};

export const DarkTheme: Theme = {
    ...BaseTheme,
    mode: DeviceTheme.Dark,
    core: {
        background_primary: Colors.gray_90,
        background_secondary: Colors.gray_80,
        background_tertiary: Colors.gray_100,

        content_primary: Colors.gray_10,
        content_secondary: Colors.gray_30,

        border_opaque: Colors.gray_80,

        link: Colors.blue_30,
        negative: Colors.red_30,
        validation_color: Colors.red_30
    },

    buttons: {
        button_primary: {
            ...BaseTheme.buttons.button_primary,
            disabled: {
                background_color: Colors.gray_70,
                text_color: Colors.gray_50
            }
        },

        button_secondary: {
            background_color: Colors.gray_10,
            underlay_color: Colors.gray_20,
            text_color: Colors.gray_90,
            disabled: {
                background_color: Colors.gray_70,
                text_color: Colors.gray_50
            }
        },

        button_tertiary: {
            ...BaseTheme.buttons.button_tertiary,
            background_color: Colors.gray_90,
            underlay_color: Colors.gray_20,
            text_color: Colors.gray_10,
            border_color: Colors.gray_10,
            disabled: {
                background_color: Colors.gray_90,
                text_color: Colors.gray_70,
                border_color: Colors.gray_70
            }
        }
    },
    borders: {
        profile_image: {
            ...BaseTheme.borders.profile_image,
            borderColor: Colors.gray_transparent_20
        }
    },
    toast: {
        success: {
            border_left_color: Colors.green_40,
            icon_color: Colors.green_40
        },
        network: {
            border_left_color: Colors.gray_30,
            icon_color: Colors.gray_30
        },
        error: { border_left_color: Colors.red_30, icon_color: Colors.red_30 }
    },
    NavBar: {
        icon_outline_color: Colors.gray_30,
        icon_fill_color: Colors.gray_10
    },
    placeholder: {
        iconColor: Colors.gray_60
    }
};

export const getTheme = (colorScheme: DeviceTheme) => {
    switch (colorScheme) {
        case DeviceTheme.Dark:
            return DarkTheme;
        case DeviceTheme.Light:
        default:
            return BaseTheme;
    }
};
