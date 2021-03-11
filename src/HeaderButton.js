import React from 'react'
import './HeaderButton.css'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useRouteMatch } from 'react-router-dom'

function HeaderButton(props) {
    const match = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact,
    })
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }))
    const classes = useStyles()
    return (
        <div className="HeaderButton">
            <div className={classes.root}>
                <div className={match ? 'HeaderButton-active' : ''}>
                    <Button component={Link} to={props.to}>
                        {props.label}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderButton
