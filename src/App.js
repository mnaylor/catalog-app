import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import NavDrawer from "./components/navigation/NavDrawer";
import TopNavBar from "./components/navigation/TopNavBar";
import ROUTES from "./utils/Routes.js"
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '64px'
    }
  }));

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <TopNavBar />
                <NavDrawer />
                <main className={classes.content}>
                    {
                        ROUTES.map(
                            route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    component={route.innerComponent}
                                    exact={route.isExact}
                                />
                        )
                    }
                </main>
            </div>
        </Router>
    );
}

export default App;
