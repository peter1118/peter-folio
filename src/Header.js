import React from 'react';
import './Header.css';

import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

function Header() {
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const classes = useStyles();
    return (
        <div className='Header'>
            <div className={classes.root}>
            <Button className='Button'>Home</Button>
            <Button className='Button'>About</Button>
            <Button className='Button'>Work</Button>
            </div>
            <div className='HeaderRight'>
                <div className={classes.root}>
                <Button className='Button'>Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
