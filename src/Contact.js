import React from 'react'
import './Contact.css'

import Icon from '@material-ui/core/Icon'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Button from '@material-ui/core/Button'

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-wrapper">
                <div className="Contact-title">Contact</div>
                <div className="Contact-buttons">
                    <div className="Contact-btn">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<MailIcon />}
                            fullWidth={true}
                            className="Contact-btn-mail"
                            style={{ justifyContent: 'flex-start' }}
                        >
                            songpetersd@gmail.com
                        </Button>
                    </div>
                    <div className="Contact-btn">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<LinkedInIcon />}
                            fullWidth={true}
                            style={{ justifyContent: 'flex-start' }}
                            href="https://www.linkedin.com/in/peter-song-59569816b/"
                            target="_blank"
                        >
                            linkedin
                        </Button>
                    </div>
                    <div className="Contact-btn">
                        <Button
                            variant="contained"
                            color="default"
                            size="large"
                            startIcon={<GitHubIcon />}
                            fullWidth={true}
                            style={{ justifyContent: 'flex-start' }}
                            href="https://github.com/peter1118"
                            target="_blank"
                        >
                            git
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
