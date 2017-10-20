import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
import './MyCard.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import FullImageCard from './../FullImageCard/FullImageCard'
class MyCard extends Component {

    constructor(props) {
        super(props)
    }

    getDate(dateTime) {
        var tempDate = new Date(parseInt(dateTime + "000"))
        return tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
    }

    getCardByType() {
        if (this.props.type == 'Comments')
            return (<Card className='card-on-hover' header={<CardTitle reveal image={this.props.media.images.low_resolution.url} waves='light' />}
                title={"Number of comments: " + this.props.media.comments}>
                <p>{"Number of likes: " + this.props.media.likes}</p>
                <p>{"Posted at: " + this.getDate(this.props.media.created_time)}</p>
            </Card>)
        else
            return (<Card className='card-on-hover' header={<CardTitle reveal image={this.props.media.images.low_resolution.url} waves='light' />}
                title={"Number of likes: " + this.props.media.likes}>
                <p>{"Number of comments: " + this.props.media.comments}</p>
                <p>{"Posted at: " + this.getDate(this.props.media.created_time)}</p>
            </Card>)
    }

    render() {
        return (
            <Col s={4} className='card-position'>
                <Link to={"/media/" + this.props.media.id}>
                    {this.getCardByType()}
                </Link>
            </Col>
        )
    }
}

export default MyCard