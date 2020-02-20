import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {    
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Typography,
    Checkbox,
    Avatar
} from "@material-ui/core";
import moment from 'moment';

import { addWord, fetchArticle } from '../../actions/index'
import { getInitials } from '../../example_userlist/helpers';

let Articlelist = ( props ) => {
    const { users } = props;
    const useStyles = makeStyles( (theme) => ({
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
    const classes = useStyles();
    let input;

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

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(!input.value.trim()) {
                    return
                }
                else {
                    console.log("tpe");
                    console.log(input.value);
                    //dispatch(addWord(input.value))
                    //dispatch(fetchArticle('articlelist')).then(() => {
                    //    console.log("fetch 完 Article囉")
                    // })
                    console.log("this.props");
                    console.log(props.ownProps.postByArticle.articlelist.items[0].content);
                    //console.log(ownProps);
                    //console.log(ownProps.postByArticle.articlelist.items[0].content);
                }
                input.value = ''
            }}
            >
            <h1> test </h1>
            <input ref={node => {
                input = node
            }}
            />
            <button type="submit">
                Add word
            </button>
            </form>

            

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
            <p>{props.ownProps.postByArticle.articlelist.items[0].content}</p>
            {
            props.ownProps.postByArticle.articlelist.items.map((articles, index) => {
                return (<p> {articles.content} </p>);
            })
            }
        </div>
    );    



}


const mapStateToProps = (state, ownProps) => {
    return {
      ownProps : ownProps = state
    }
}



Articlelist = connect(mapStateToProps)(Articlelist)



export default Articlelist;