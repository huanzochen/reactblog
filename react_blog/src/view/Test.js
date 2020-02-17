import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default class Test extends React.Component {
    

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <h1>Hello woorl</h1>
                <Button variant="contained" color="primary">
                    MaterialUI
                </Button>
                


                <div>
                    <Typography variant="h1" component="h2" gutterBottom>
                        h1. Heading
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        h2. Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        h3. Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        h4. Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        h5. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        h6. Heading
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </div>

            </React.Fragment>
        );
    }
  }