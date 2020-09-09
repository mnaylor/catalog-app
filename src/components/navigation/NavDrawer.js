import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ROUTES from "../../utils/Routes";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const NavigationStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        paddingTop: '64px'
    }
}));

function NavDrawer() {
    const classes = NavigationStyles();

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerContainer}>
                    <List>
                        {ROUTES.map(route => (
                            <ListItem button component="a" key={route.path} href={route.path}>
                                <ListItemText>
                                    {route.label}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default NavDrawer;