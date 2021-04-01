import React from 'react'
import './WorkCardMore.css'

import data from './WorkData.js'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

function WorkCardMore({ idx, open, onClose, eleRef }) {
    return (
        <div className="WorkCardMore">
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{data[idx]['title']}</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText ref={eleRef} tabIndex={-1}>
                        contents...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton color="primary">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <LanguageIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default WorkCardMore
