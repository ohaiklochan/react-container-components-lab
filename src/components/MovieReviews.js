import React, { Component } from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
              {reviews.map(Review)}  
        </div>
    )
}

MovieReviews.defaultProps = {
    reveiws: []
}

const Review = ({ title, headline }) => {
    return (
        <div className="review">
            <h3>{title}</h3>
            <p>{headline}</p>
        </div>
    )
}


export default MovieReviews