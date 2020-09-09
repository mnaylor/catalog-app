import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from "./components/views/Home";
import PatternSearch from "./components/views/PatternSearch";
import FabricSearch from "./components/views/FabricSearch";
import NavDrawer from "./components/navigation/NavDrawer";
import TopNavBar from "./components/navigation/TopNavBar";
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
                    <Route exact path="/" component={Home} />
                    <Route path="/patterns" component={PatternSearch} />
                    <Route path="/fabrics" component={FabricSearch} />
                </main>
            </div>
        </Router>
    );
}

export default App;
