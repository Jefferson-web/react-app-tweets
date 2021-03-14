import React, { Component } from "react";
import Twit from 'twit';
import config from '../twit.config';

class Stream extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getTweets();
    }

    getTweets() {
        var T = new Twit(config);
        T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (err, data, response) {
            console.log(data)
        });
    }

    handleNewTweet(tweet) {
        console.log(tweet);
    }

    render() {
        return (
            <div>
                Stream Works!!!
            </div>
        )
    }

}

export default Stream;