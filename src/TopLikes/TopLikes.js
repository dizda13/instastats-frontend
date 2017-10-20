import React, { Component } from 'react';
import './TopLikes.css'
import MyCard from '../MyCard/MyCard'
import { Row, Col } from 'react-materialize'
import HttpUrls from '../HttpUrls'
import axios from 'axios';

class TopLikes extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            topLikedMedia: [],

        }
        var myHeaders = { headers: { 'Authorization': localStorage.getItem('username') } };

        axios(HttpUrls.getTopLikes(5), myHeaders).then((results) => {
            var array = [];
            results.data.forEach(function (element) {
                array.push(element)
            })
            this.setState({ topLikedMedia: array })
        })
    }

    render() {
        return (
            <Row>
                <h1 className='col m8 tab-header'>Top Likes</h1>
                <Col m={10} className='card-wrapper'>
                    {
                        this.state.topLikedMedia.map((el, i) => <MyCard key={i} media={this.state.topLikedMedia[i]} type='Likes'></MyCard>)
                    }
                </Col>
            </Row>
        );
    }

    getInitTemplate() {
        return [{
            id: "",
            user: {
                id: "",
                username: "",
                profile_picture: "",
                full_name: ""
            },
            images: {
                thumbnail: {
                    width: "",
                    height: "",
                    url: ""
                },
                low_resolution: {
                    width: "",
                    height: "",
                    url: ""
                },
                standard_resolution: {
                    width: "",
                    height: "",
                    url: ""
                }
            },
            created_time: "",
            caption: "",
            user_has_liked: "",
            likes: "",
            tags: [],
            filter: "",
            comments: "",
            type: "",
            link: "",
            location: "",
            attribution: "",
            users_in_photo: []
        }]
    }
}

export default TopLikes;
