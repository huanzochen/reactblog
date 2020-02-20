import React, { useState } from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';
import mockData from '../example_userlist/data';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    List,
    Drawer,
    Typography,
    CssBaseline,

} from "@material-ui/core";

// Icons
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import Articlelist from '../component/article/Articlelist';

const drawerWidth = 240;

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    list: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    hide: {
        display: 'none'
    }
})

);




const Homepage = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer" // 只是一個標籤
                    onClick={handleDrawerOpen} // 讓 Drawer open 的funtion 
                    edge="start" // 是否要消除負邊
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon /> 
                </IconButton>
                <Typography variant="h6" noWrap>
                    Blog
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                open = {open}
                className = {classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                variant="persistent"
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['文章列表', '我的文章', '新增文章'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={
                    clsx(classes.content, {
                        [classes.contentShift]: open
                    })
                }
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                   1111111111   2222222222222   3333333333333   4444444444444     555555555555555 
                   1111111111   2222222222222   3333333333333   4444444444444     555555555555555 
                   1111111111   2222222222222   3333333333333   4444444444444     555555555555555 
                   文章內容放置處
                </Typography >    
                <Articlelist users={mockData} ></Articlelist>


            </main>
        </div>
    );

}

Homepage.propTypes = {
    className: PropTypes.string
};


export default Homepage;