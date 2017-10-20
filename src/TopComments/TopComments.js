import React, { Component } from 'react';
import './TopComments.css'
import MyCard from '../MyCard/MyCard'
import { Row, Col } from 'react-materialize'
import FullImageCard from './../FullImageCard/FullImageCard'
import HttpUrls from '../HttpUrls'
import axios from 'axios';

class TopComments extends Component {

    constructor(props) {
        super(props)

        this.state = {
            topCommenctedMedia: [],
            selectedMedia: '',
        }

        var myHeaders = { headers: { 'Authorization': localStorage.getItem('username') } };

        axios(HttpUrls.getTopComments(5), myHeaders).then((results) => {
            var array = [];
            results.data.forEach(function (element) {
                array.push(element)
            })
            this.setState({ topCommenctedMedia: array })
        })
    }


    render() {
        return (
            <Row>
                <h1 className='col m8 tab-header'>Top Comments</h1>
                <Col m={10} className='card-wrapper'>
                    {
                        this.state.topCommenctedMedia.map((el, i) => <MyCard key={i} media={this.state.topCommenctedMedia[i]} type='Comments'></MyCard>)
                    }
                </Col>
            </Row>
        );
    }
}

export default TopComments;
