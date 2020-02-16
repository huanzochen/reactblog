import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

const Homepage = () => {
    const open = React.useState(true);
    return (
        <div>
            <CssBaseline />
            <Drawer
                open={open}
            >
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
            </Drawer>
        </div>


    );

}

export default Homepage;