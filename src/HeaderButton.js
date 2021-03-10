import React from 'react';
import "./HeaderButton.css";

import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

function HeaderButton(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            "& > *": {
                margin: theme.spacing(1)
            }
        }
    }));
    const classes = useStyles();
return (
    <div className='HeaderButton'>
        <div className={classes.root}>
            <Button>{props.name}</Button>
        </div>
    </div>
)
}

export default HeaderButton;
