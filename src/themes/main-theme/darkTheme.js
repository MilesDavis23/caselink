import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            light: '#FFFBFF',
            main: '#FFFDF7'
        },
        background: {
            defult: '#221C1F',
            paper: '#0B090A'
        }, 
        text: {
            primary: '#FFFBFF',
            secondary: 'FFFDF7'
        }
    }
});

/*
primary is used for primary interface elements for the user.
background.default is the default background color.
background.paper is the background color of components, such as Card and Paper.
text.primary is the text color that is most emphasized.
text.secondary is the text color that is second in line for emphasis.
*/

export {
    darkTheme
} ;
