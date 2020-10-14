import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  link: {
    textDecoration: 'none'
  }
}));

export default function GalleryCard(props) {
  const classes = useStyles();
  const {id, image, title, subheader, cardType} = props;

  return (
    <Card className={classes.root}>
        <CardActionArea component={Link} to={`${cardType}/${id}`}>
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardHeader
                title={title}
                subheader={subheader}
            />
        </CardActionArea>
    </Card>
  );
}
/*
<IconButton aria-label="settings" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
*/