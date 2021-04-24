import React from 'react'
import './css/WorkCardMore.css'

import data from './WorkData.js'
import moreData from './WorkMoreData.js'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
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
                        <Box textAlign="left" p={2}>
                            {moreData[idx]['header'][0]}
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
                        {moreData[idx]['detail'].map((para, index) => (
                            <Box key={index} p={2}>
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
                            {moreData[idx]['role'].map((para, index) => (
                                <li key={index}>{para}</li>
                            ))}
                        </ul>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        size="smal"
                        startIcon={<GitHubIcon />}
                        href={data[idx]['links'][0]}
                        target="_blank"
                    >
                        git
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="smal"
                        startIcon={<LanguageIcon />}
                        href={data[idx]['links'][0]}
                        target="_blank"
                    >
                        Visit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default WorkCardMore
