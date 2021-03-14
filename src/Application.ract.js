import { Component } from "react";
import Stream from './components/Stream.react';
import Collection from './components/Collection.react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionTweets: {}
    }
    this.addTweetToCollection = this.addTweetToCollection.bind(this);
    this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
    this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
  }

  addTweetToCollection(tweet) {
    var collectionTweets = this.state.collectionTweets;
    collectionTweets[tweet.id] = tweet;
    this.setState({
      collectionTweets
    });
  }

  removeTweetFromCollection(tweet) {
    var collectionTweets = this.state.collectionTweets;
    delete collectionTweets[tweet.id];
    this.setState({
      collectionTweets
    });
  }

  removeAllTweetsFromCollection() {
    this.setState({
      collectionTweets: {}
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div className="col-md-8">
            <Collection tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
