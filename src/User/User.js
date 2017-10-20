import React, { Component } from 'react';
import './User.css'
import { Card, CardTitle, Row, Col } from 'react-materialize'

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 6214325310,
            username: "",
            profile_picture: "",
            full_name: "",
            bio: "",
            website: "",
            is_business: "",
            counts: {
                media: "",
                follows: '',
                followed_by: ''
            }
        }
        
        var myHeaders = { headers: {'Authorization': localStorage.getItem('username')} };
        
        fetch('http://localhost:8080/user', myHeaders).then((results) => {
            return results.json()
        }).then(body => {
            this.setState(body)
            console.log(this.state)
        })
    }

    render() {
        return (
            <Row id='my-account'>
                <h1 className='col m8 tab-header'>User details</h1>
                <Col m={8} s={12} className='user-details-wapper'>
                    <img className='col m4 profile-image' src={this.state.profile_picture} />
                    <div className='col m6 push-m1'>
                        <label htmlFor='username'>Username</label>
                        <p id='username'>{this.state.username}</p>
                        <hr />
                        <label htmlFor='profile_picture'>Full name</label>
                        <p id='profile_picture'>{this.state.full_name}</p>
                        <hr />
                        <label htmlFor='media'>Number of posts</label>
                        <p id='media'>{this.state.counts.media}</p>
                        <hr />
                        <label htmlFor='follows'>Follows</label>
                        <p id='follows'>{this.state.counts.follows}</p>
                        <hr />
                        <label htmlFor='followers'>Followers</label>
                        <p id='followers'>{this.state.counts.followed_by}</p>
                        <hr />
                        <label htmlFor='bio'>Biography</label>
                        <p id='bio'><i>
                            {this.state.bio}
                            </i>
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }

}


export default User;
