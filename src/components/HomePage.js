import React, { Component } from 'react'
import UsedBotAlert from './UsedBotAlert'
import ErrorForm from './ErrorForm'
import mainLogo from '../bella.png'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            showButton: true
        }
        this._onButtonClick = this._onButtonClick.bind(this);

    };

    _onButtonClick() {
        this.setState({
            showComponent: true, showButton: false
        });

    }
    render() {
        return (

            <div>
                <Router basename="/">
                    <Navbar></Navbar>
                    <div className="App">
                        <div className="App__Aside"></div>
                        <div className="App__Form">
                            {/* <Route exact path="/" component={UsedBotAlert}>
                            </Route>
                            <Route path="/sign-up" component={UsedBotAlert}>
                            </Route>
                            <Route path="/mail" component={UsedBotAlert}>
                            </Route>
                            <Route path="/mailtree" component={UsedBotAlert}>
                            </Route> */}
                        </div>

                    </div>
                </Router>
                <img src={mainLogo} />
                <center>
                    {this.state.showButton ?
                        <div><Button onClick={this._onButtonClick} variant="contained" style={{ background: "#a80505", color: "white", marginBottom: "50px" }}>פתיחת תקלה</Button></div> :
                        null
                    }

                    {this.state.showComponent ?
                        <div><UsedBotAlert /><ErrorForm /></div> :
                        null
                    }
                </center>
            </div>
        )
    }
}
