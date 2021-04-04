import React from 'react'
import './css/WorkCardMore.css'

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
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function WorkCardMore({ idx, open, onClose }) {
    return (
        <div className="WorkCardMore">
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{data[idx]['title']}</DialogTitle>
                <DialogContent dividers={true}>
                    <Typography component="div">
                        <Box
                            fontSize={18}
                            letterSpacing={3}
                            fontWeight="fontWeightBold"
                            fontFamily="monospace"
                            color="text.disabled"
                            m={1}
                        >
                            개요
                        </Box>
                        <Box textAlign="left">
                            {data[idx]['more']['header'][0]}
                        </Box>
                        <Box
                            fontSize={18}
                            letterSpacing={3}
                            fontWeight="fontWeightBold"
                            fontFamily="monospace"
                            color="text.disabled"
                            m={1}
                        >
                            상세 설명
                        </Box>
                        {data[idx]['more']['detail'].map((para, index) => (
                            <Box key={index} textAlign="center">
                                {para}
                            </Box>
                        ))}
                        <Box
                            fontSize={18}
                            letterSpacing={3}
                            fontWeight="fontWeightBold"
                            fontFamily="monospace"
                            color="text.disabled"
                            m={1}
                        >
                            맡은 역할
                        </Box>
                        <ul className="WorkCardMore-role">
                            {data[idx]['more']['role'].map((para, index) => (
                                <li key={index}>{para}</li>
                            ))}
                        </ul>
                    </Typography>
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
