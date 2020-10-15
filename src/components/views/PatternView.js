import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "45%",
      padding: "20px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    link: {
      textDecoration: 'none'
    },
    chip: {
        margin: theme.spacing(0.5),
      }
  }));

function PatternView(props) {
    const classes = useStyles();

    const chips = [
        {
            label: "top"
        },
        {
            label: "bottom"
        }
    ];

    const tags = [
        {
            label: "foo"
        },
        {
            label: "bar"
        }
    ];

    function getPhotoGallery() {
        return (
            <Paper>

            </Paper>
        )
    }

    function getMetadataCard() {
        return (
            <Paper className={classes.root}>
                <Typography className={classes.pos} variant="overline" display="block" gutterBottom>
                    Pattern Types
                </Typography>
                {
                    chips.map(chip => (<Chip
                        icon={chip.icon}
                        label={chip.label}
                        className={classes.chip}
                    />)
                    )
                }

                <Typography className={classes.pos} variant="overline" display="block" gutterBottom>
                    Tags
                </Typography>
                {
                    tags.map(chip => (<Chip
                        icon={chip.icon}
                        label={chip.label}
                        className={classes.chip}
                        />)
                    )
                }
            </Paper>
        )
    }

    return (
        <div>
            <Typography className={classes.pos} variant="h4">
                Pattern Name goes here <ExitToAppIcon/>
            </Typography>
            <Typography className={classes.pos} variant="h5">
                Company
            </Typography>
            {getMetadataCard()}
        </div>
    )
}

export default PatternView;