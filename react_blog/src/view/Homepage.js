import React, { useState } from 'react';
import clsx from "clsx";
import moment from 'moment';
import PropTypes from 'prop-types';
import { getInitials } from '../example_userlist/helpers';
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
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Checkbox,
    Avatar,

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
    },
    inner: {
        minWidth: 1050
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    actions: {
        justifyContent: 'flex-end'
    }
})

);




const Homepage = (props) => {
    const { users } = props;

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const handleSelectAll = event => {
        const { users } = props;
    
        let selectedUsers;
    
        if (event.target.checked) {
          selectedUsers = users.map(user => user.id);
        } else {
          selectedUsers = [];
        }
    
        setSelectedUsers(selectedUsers);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedUsers.indexOf(id);
        let newSelectedUsers = [];
    
        if (selectedIndex === -1) {
          newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
        } else if (selectedIndex === 0) {
          newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
        } else if (selectedIndex === selectedUsers.length - 1) {
          newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelectedUsers = newSelectedUsers.concat(
            selectedUsers.slice(0, selectedIndex),
            selectedUsers.slice(selectedIndex + 1)
          );
        }
    
        setSelectedUsers(newSelectedUsers);
    };

    const handlePageChange = (event, page) => {
        setPage(page);
    };
    
    const handleRowsPerPageChange = event => {
        setRowsPerPage(event.target.value);
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
                <Articlelist></Articlelist>
                <div className={classes.inner}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                            checked={selectedUsers.length === users.length}
                            color="primary"
                            indeterminate={
                                selectedUsers.length > 0 &&
                                selectedUsers.length < users.length
                            }
                            onChange={handleSelectAll}
                            />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Registration date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(0, rowsPerPage).map(user => (
                        <TableRow
                            className={classes.tableRow}
                            hover
                            key={user.id}
                            selected={selectedUsers.indexOf(user.id) !== -1}
                        >
                            <TableCell padding="checkbox">
                            <Checkbox
                                checked={selectedUsers.indexOf(user.id) !== -1}
                                color="primary"
                                onChange={event => handleSelectOne(event, user.id)}
                                value="true"
                            />
                            </TableCell>
                            <TableCell>
                            <div className={classes.nameContainer}>
                                <Avatar
                                className={classes.avatar}
                                src={user.avatarUrl}
                                >
                                {getInitials(user.name)}
                                </Avatar>
                                <Typography variant="body1">{user.name}</Typography>
                            </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                            {user.address.city}, {user.address.state},{' '}
                            {user.address.country}
                            </TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            {moment(user.createdAt).format('DD/MM/YYYY')}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>

            </main>
        </div>
    );

}

Homepage.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired
};


export default Homepage;