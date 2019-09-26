/*
 *  Date        Author                          Description
 *  2019.09.18  Lehan, Ryan                     Initial development
 * 
 *  Remarks:
 *  The following is the defintion of the responsive types
 *  The Responsive Type is a general enum to allow for any type of conditional statements without having to resort to string comparisons
 *  The responsiveCSS is designed to contain the file name of your Responsive CSS, if you choose to go that route.
 */


export enum ResponsiveEnum {
    Mobile,
    Tablet,
    Desktop
  }

export interface ResponsiveType {
    responsiveEnum: ResponsiveEnum;
    responsiveCSS: string;
    responsiveBreakPoint: string;
    minWidth: number;
    maxWidth: number;
}