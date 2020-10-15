import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gallery from '../common/Gallery';
import patterns from "../../testData/patterns.js";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '90%',
      height: '100%',
    },
  }));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Gallery items={patterns}/>
        </div>
    )
}

export default Home;