import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Navbar, NavItem } from 'react-materialize'
import './Header.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
//import { Link } from 'react-router-dom'
import User from './../User/User';
import TopLikes from './../TopLikes/TopLikes'
import TopComments from './../TopComments/TopComments'
import About from './../About/About'
import FullImageCard from './../FullImageCard/FullImageCard'
import Login from './../Login/Login'

class Header extends Component {

    logout(){
        localStorage.removeItem('username')
        window.location='http://localhost:3000'
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar class='blue darken-3' brand='Instagram Statistics' left>
                        <NavItem>
                            <Link to="/user" className='nav-bar-tabs'>
                                <i className="material-icons icon-margin">account_circle</i>
                                User
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/top-comments" className='nav-bar-tabs'>
                                <i className="material-icons icon-margin">chat_bubble_outline</i>
                                Top Comments
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/top-likes" className='nav-bar-tabs'>
                                <i className="material-icons icon-margin">thumb_up</i>
                                Top Likes
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className='nav-bar-tabs icon-margin'>
                                <i className="material-icons">description</i>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <div onClick={()=>this.logout()} className='nav-bar-tabs icon-margin'>
                                <i className="material-icons">exit_to_app</i>
                                Log out
                            </div>
                        </NavItem>
                    </Navbar>
                    <Route exact path="/" component={User} />
                    <Route path="/user" component={User} />
                    <Route path="/top-comments" component={TopComments} />
                    <Route path={"/media/:id"} component={FullImageCard} />
                    <Route path="/top-likes" component={TopLikes} />
                    <Route path="/about" component={About} />
                    {/*<Route path="/login" component={Login}/>*/}
                </div>

            </Router>
        )
    }
}

export default Header;