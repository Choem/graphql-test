import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <nav>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <Icon>face</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Persons" />
                    </ListItem>
                    <ListItem button component={Link} to="/articles">
                        <ListItemIcon>
                            <Icon>description</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Articles" />
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    );
}

export default Sidebar;