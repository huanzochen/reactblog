import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from "clsx";
import {    
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Typography,
    Checkbox,
    Avatar,
    Card
} from "@material-ui/core";
import moment from 'moment';

import { addWord, fetchArticle } from '../../actions/index'
import { getInitials } from '../../example_userlist/helpers';

let Articlelist = ( props ) => {
    const { className, users, ...rest } = props;
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
        let selectedUsers;
    
        if (event.target.checked) {
          selectedUsers = props.ownProps.postByArticle.articlelist.items.map(article => article.id);
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
                    console.log("this.props");
                    console.log(props.ownProps.postByArticle.articlelist.items[0].content);
                }
                input.value = ''
            }}
            >
            <input ref={node => {
                input = node
            }}
            />
            <button type="submit">
                Add word
            </button>
            </form>

            
            <Card
                {...rest}
                className={clsx(classes.root)}
            >
            <div className={classes.inner}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                        checked={selectedUsers.length === props.ownProps.postByArticle.articlelist.items.length}
                        color="primary"
                        indeterminate={
                            selectedUsers.length > 0 &&
                            selectedUsers.length < props.ownProps.postByArticle.articlelist.items.length
                        }
                        onChange={handleSelectAll}
                        />
                    </TableCell>
                    <TableCell>作者</TableCell>
                    <TableCell>標題</TableCell>
                    <TableCell>文章內容</TableCell>
                    <TableCell>創建時間</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.ownProps.postByArticle.articlelist.items.slice(0, rowsPerPage).map(article => (
                    <TableRow
                        className={classes.tableRow}
                        hover
                        key={article.id}
                        selected={selectedUsers.indexOf(article.id) !== -1}
                    >
                        <TableCell padding="checkbox">
                        <Checkbox
                            checked={selectedUsers.indexOf(article.id) !== -1}
                            color="primary"
                            onChange={event => handleSelectOne(event, article.id)}
                            value="true"
                        />
                        </TableCell>
                        <TableCell>
                        <div className={classes.nameContainer}>
                            <Avatar
                            className={classes.avatar}
                            src={article.act_name}
                            >
                            {getInitials(article.act_name)}
                            </Avatar>
                            <Typography variant="body1">{article.act_name}</Typography>
                        </div>
                        </TableCell>
                        <TableCell>{article.title}</TableCell>
                        <TableCell>{article.content.slice(0,30) + '...'}</TableCell>
                        <TableCell>{article.create_time}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
            
            </Card>

        </div>
    );    



}


const mapStateToProps = (state, ownProps) => {
    return {
      ownProps : ownProps = state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}


Articlelist = connect(mapStateToProps, mapDispatchToProps)(Articlelist)



export default Articlelist;