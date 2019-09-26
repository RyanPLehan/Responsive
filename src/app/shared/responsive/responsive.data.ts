/*
 *  Date        Author                          Description
 *  2019.09.18  Lehan, Ryan                     Initial development
 * 
 *  Remarks:
 *  The following are two sets of data points for a responsive layout
 *  You can taylor the existing data points or create your own.
 *  The responsiveCSS is designed to contain the file name of your Responsive CSS, if you choose to go that route.
 *  If your CSS file has a different name, just replace it
 */


import { ResponsiveEnum } from './responsive.types';


// Custom Responsive 
export const CustomResponsiveData = [
    {
        "responsiveEnum": ResponsiveEnum.Mobile,
        "responsiveCSS": "ResponsiveMobileCSS",
        "responsiveBreakPoint": "sm",
        "minWidth": 0,
        "maxWidth": 768
    },

    {
        "responsiveEnum": ResponsiveEnum.Tablet,
        "responsiveCSS": "ResponsiveTabletCSS",
        "responsiveBreakPoint": "md",
        "minWidth": 769,
        "maxWidth": 992
    },

    {
        "responsiveEnum": ResponsiveEnum.Desktop,
        "responsiveCSS": "ResponsiveDesktopCSS",
        "responsiveBreakPoint": "lg",
        "minWidth": 993,
        "maxWidth": 5000
    }

]


// Media Query Repsonsive
export const MQResponsiveData = [
    {
        "responsiveEnum": ResponsiveEnum.Mobile,
        "responsiveCSS": "ResponsiveMobileCSS",
        "responsiveBreakPoint": "xs",
        "minWidth": 0,
        "maxWidth": 599
    },

    {
        "responsiveEnum": ResponsiveEnum.Mobile,
        "responsiveCSS": "ResponsiveMobileCSS",
        "responsiveBreakPoint": "sm",
        "minWidth": 600,
        "maxWidth": 767
    },

    {
        "responsiveEnum": ResponsiveEnum.Tablet,
        "responsiveCSS": "ResponsiveTabletCSS",
        "responsiveBreakPoint": "md",
        "minWidth": 768,
        "maxWidth": 991
    },

    {
        "responsiveEnum": ResponsiveEnum.Desktop,
        "responsiveCSS": "ResponsiveDesktopCSS",
        "responsiveBreakPoint": "lg",
        "minWidth": 992,
        "maxWidth": 1199
    },

    {
        "responsiveEnum": ResponsiveEnum.Desktop,
        "responsiveCSS": "ResponsiveDesktopCSS",
        "responsiveBreakPoint": "xl",
        "minWidth": 1200,
        "maxWidth": 5000
    }

]