import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
        
                /*colors*/
                white: string;
                whiteGrey: string;
                orangePigz1: string;
                orangePigz2: string;

            
            },
        fonts: {
                /*fontcolors*/
                fontGrey1: string;
                fontGrey2: string;
                fontGrey3: string;
                fontWhite: string;
                fontInputPlaceholder: string;
                fontInputBorder: string;
            
                /*fontsize*/
              
                /*fontweight*/
                fontWeightLight: string;
                fontWeightRegular: string;
                fontWeightMedium: string;
                fontWeightSemiold: string;
                fontWeightBold: string;
            
        }

        configs: {
                positionStatic: string;
                positionRelative: string;
                positionAbsolute: string;
        }
    }
}