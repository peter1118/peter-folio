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
            <div className="Contact-title">
                Contact ! Have a question or want to work together?
            </div>
            <div className="Contact-buttons">
                <div className="Contact-btn">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<MailIcon />}
                        fullWidth={true}
                        className="Contact-btn-mail"
                    >
                        songpetersd@gmail.com
                    </Button>
                </div>
                <div className="Contact-btn">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<LinkedInIcon />}
                        fullWidth={true}
                    >
                        linkedin
                    </Button>
                </div>
                <div className="Contact-btn">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        fullWidth={true}
                    >
                        git
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
