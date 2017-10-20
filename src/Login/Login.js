import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Input, Row, Col, Navbar, Button } from 'react-materialize'
import './Login.css'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Header from './../Header/Header'
import HttpUrls from '../HttpUrls'
const queryString = require('query-string');

class Login extends Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.state = {
            isLogedIn: false,
            username: ''
        }

        if (localStorage.getItem('username')) {
            var myHeaders = { method: 'GET', headers: { 'Authorization': localStorage.getItem('username') } };
            axios.get(HttpUrls.getUser(), myHeaders).then((results) => {
                this.setState({
                    isLogedIn: true,
                })
            })
        }

    }

    login() {
        var myHeaders = { method: 'GET', headers: { 'Authorization': this.state.username } };
        axios.get(HttpUrls.getUser(), myHeaders).then((results) => {
            this.setSession()
        })
            .catch(function (error) {
                console.log(error)
                axios.get(HttpUrls.getInstagramConnectionLink()).then((results) => {
                    window.location = results.data.redirect_url;
                });

            })
    }

    setSession() {
        localStorage.setItem('username', this.state.username);
        this.setState({
            isLogedIn: true,
        })
    }

    render() {

        if (!this.state.isLogedIn)
            return (
                <Router>
                    <Row>
                        <Navbar id='login-header' class='blue darken-3' brand='Welcom Instagram Statistics' right>
                        </Navbar>
                        <Col id='input-username' m={5} s={6}>
                            <Input className='loginForm' label="Instagram username" onChange={(event, newValue) => this.setState({ username: newValue })} />
                            <Button className='my-button' waves='light' onClick={this.login}>Get Statistics</Button>
                        </Col>
                        <Route path="/register" component={Register}></Route>
                    </Row>
                </Router>
            )
        else
            return (
                <Header></Header>
            )
    }
}

export class Register extends Component {

    constructor(prop) {
        super(prop)
        const parsed = queryString.parse(this.props.location.search);

        axios.post(HttpUrls.postAuth(), { code: parsed.code }).then((results) => {
            localStorage.setItem('username', results.username);
        });
    }

    render() {
        return null;
    }
}

export default Login;