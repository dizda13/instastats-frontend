import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
import './FullImageCard.css'
import axios from 'axios';
import HttpUrls from '../HttpUrls'

class FullImageCard extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            media: this.getInitMediaTemplate(),
            comments: [],
            likes: [],
            areLikesShowen: false,
            areCommentsShowen: false,
        }

        var myHeaders = { headers: { 'Authorization': localStorage.getItem('username') } };

        this.getLikes.bind(this)
        this.getComments.bind(this)
        axios.get(HttpUrls.getMediaById(this.props.match.params.id), myHeaders).then((results) => {
            this.setState({ media: results.data })
        })

        axios.get(HttpUrls.getLikesByMediaId(this.props.match.params.id), myHeaders).then((results) => {
            var array = [];
            results.data.forEach(function (element) {
                array.push(element)
            })
            this.setState({ likes: array })
        })

        axios.get(HttpUrls.getCommentsByMediaId(this.props.match.params.id), myHeaders).then((results) => {
            var array = [];
            results.data.forEach(function (element) {
                array.push(element)
            })
            this.setState({ comments: array })
        })
    }
    getDate(dateTime) {
        var tempDate = new Date(parseInt(dateTime + "000"))
        return tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
    }

    showLikes() {
        var prevState = this.state
        this.setState({
            areLikesShowen: !this.state.areLikesShowen
        });
    }

    showComments() {
        var prevState = this.state
        this.setState({
            areCommentsShowen: !this.state.areCommentsShowen
        });
    }

    getLikes() {
        if (this.state.areLikesShowen) {
            return (
                this.state.likes.map((el) =>
                    <p className="likes-comments-board">Liked by : {el.full_name}</p>
                )
            )
        }
        return
    }

    getComments() {
        if (this.state.areCommentsShowen) {
            return (
                this.state.comments.map((el) =>
                    <p className="likes-comments-board">Commented by : {el.from.full_name} <br />
                        <i>Text: {el.text}</i>
                    </p>
                )
            )
        }
        return
    }

    render() {
        return (
            <Row id='full-image-card'>
                <Col s={8} m={6} className='full-image-card'>
                    <Card header={<CardTitle reveal image={this.state.media.images.standard_resolution.url} waves='light' />}>
                        <p className="likes-comments-board">Posted at: {this.getDate(this.state.media.created_time)}</p>
                        <p className="likes-comments-board backgroud" onClick={() => this.showLikes()}>Number of likes: {this.state.media.comments}</p>
                        {this.getLikes()}
                        <p className="likes-comments-board backgroud" onClick={() => this.showComments()}>Number of comments: {this.state.media.likes}</p>
                        {this.getComments()}
                    </Card>
                </Col>
            </Row>
        )
    }

    getInitMediaTemplate() {
        return {
            likes: 0,
            comments: 0,
            created_time: '',
            images: {
                standard_resolution: {
                    width: '',
                    height: '',
                    url: ''
                }
            }

        }
    }
}

export default FullImageCard