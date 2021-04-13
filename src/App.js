import React from 'react'
import './css/App.css'

import Home from './Home.js'
import About from './About.js'
import Work from './Work.js'
import Contact from './Contact.js'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }))
    const classes = useStyles()
    return (
        <div className="App">
            <Router>
                <div className="Header">
                    <div className={classes.root}>
                        <Button
                            className="Header-button"
                            component={NavLink}
                            to={'/home'}
                            activeClassName="Header-selected"
                        >
                            Home
                        </Button>
                        <Button
                            className="Header-button"
                            component={NavLink}
                            to={'/about'}
                            activeClassName="Header-selected"
                        >
                            About
                        </Button>
                        <Button
                            className="Header-button"
                            component={NavLink}
                            to={'/work'}
                            activeClassName="Header-selected"
                        >
                            Work
                        </Button>
                    </div>
                    <div className="HeaderRight">
                        <div className={classes.root}>
                            <Button
                                className="Header-button"
                                component={Link}
                                to={'/contact'}
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
            </Router>
        </div>
    )
}

export default App
