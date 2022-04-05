import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Rating } from 'react-simple-star-rating'


const MovieCard = props => {

    const [rating , setRating] = useState(props.rating);


    // Catch Rating value
    const handleRating = (rate : number) => 
    {
        setRating(rate)
    }

  return (
    <>
        <div className="MovieCard" key={props.id}>
            <div><img className='imgMovie' src={props.posterURL} alt={props.title} /> </div>
            <div style={{width: "65%"}}>
                <h1 className='h1t'>{props.title}</h1>
                <Rating onClick={handleRating} ratingValue={rating} readonly="false" />
                <p className="ptext">{props.description}</p>
            </div>
        </div>
    </>
  )
}

MovieCard.propTypes = {}

export default MovieCard