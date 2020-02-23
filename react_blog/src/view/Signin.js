import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';
import axios from 'axios';
import webhookURL from '../util/config';

const useStyles = makeStyles(theme => ({

}));

function Signin() {
  const [user, setUser] = React.useState(
        {
            username: '',
            password: ''
        });
  const classes = useStyles();


  const handleUsernameChange = event => {
    setUser({
        ...user,
        [event.target.name] : event.target.value,
    });
  }
  const handlePasswordChange = event => {
    setUser({
        ...user,
        [event.target.name] : event.target.value,
    });
  }

  return (

    <Container >
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
            
            onSubmit={ event => {
                axios.post( webhookURL.url + '/api/login/login', {
                    user: {
                        username: user.username,
                        password: user.password
                    }
                },
                {
                    withCredentials: true
                },
                )
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.dir("登入失敗!", error);
                })
                console.log(user.username);
                event.preventDefault();
            }}
            
        >
            <TextField 
                name='username'
                value={user.username}
                onChange={handleUsernameChange}
            />
            <TextField
                name='password'
                value={user.password}
                onChange={handlePasswordChange}
            />   
            <FormControlLabel 
                control={ 
                    <Checkbox value="Remember me" color='primary' />}
                label="Remember me"
            />
            <Button
                type='submit'
                color="primary"
                variant='outlined'
                
            > Sign In
            </Button>
            
            <Button
                type='button'
                color="primary"
                variant='outlined'
                onclick={() => {
                    axios.get( webhookURL.url + '/api/login/islogin' )
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.dir("登入失敗!", error);
                    })
                }}
                
            > check if authenticated
            </Button>
            <Button
                type='button'
                color="primary"
                variant='outlined'
                
            > logout
            </Button>


            <Grid xs>
            <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
            </Link>
            </Grid>

        </form>

    </Container> 
    
  );
}
/*
const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        onSubmit: () => {
            axios.post( webhookURL.url + '/api/login/login', {
                user: {
                    username: username,
                    password: password
                }
            },
            {
                withCredentials: true
            },
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.dir("登入失敗!", error);
            })
        }
    }
}
*/

Signin = connect()(Signin);

export default Signin;