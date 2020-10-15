import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from "react-router-dom";
import TypeConstants from "../../utils/TypeConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '95%',
    height: '100%'
  },
  gridList: {
    width: '95%',
    height: '100%',
  }
}));

export default function Gallery(props) {
  const classes = useStyles();
  const {items} = props;

  console.log(items.map(tile => `${tile.photoBucketLocation}/header.jpg`));

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3} className={classes.gridList}>
        {items.map((tile) => (
          <GridListTile key={tile.id} component={Link} to={`${TypeConstants.PATTERN}/${tile.id}`}>
            <img src={`${tile.photoBucketLocation}/header.jpg`} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>by: {tile.source}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}