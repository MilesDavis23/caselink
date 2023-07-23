import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: {
                light: '#FFFBFF',
                main: '#FFFDF7'
            }
        },
        background: {
            primary:{
                light: '#0B090A',
                main: '#221C1F'

            }
        }
    }
});

export {
    darkTheme
} ;