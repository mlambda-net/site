import React from 'react';
import { theme } from './theme';
import Login from "./pages/login";
import { ThemeProvider} from "@mui/material";
import {LangProvider} from "@mlambda-net/web-core"



class App extends React.Component {
    render = () => (
        <ThemeProvider theme={theme}>
            <LangProvider lang="en">
                <Login/>
            </LangProvider>
        </ThemeProvider>
    );
}


export default App;
