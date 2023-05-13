import React from 'react';
import {withThemes, SignIn } from '@mlambda-net/web-core';
import {Box} from '@mui/material';



const styles = () => ({
  root: {
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  login: {
    width: '600px',
  },
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <SignIn className={classes.login} />
      </Box>
    );
  }
}

export default withThemes(styles)(Login);
