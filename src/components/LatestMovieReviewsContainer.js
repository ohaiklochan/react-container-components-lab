import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SU34NrvArygku9AysMM8qqPkMi1W2IrK';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => this.setState({ reviews: resp.results }))
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                <h3>The Latest Movie Reviews:</h3>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer