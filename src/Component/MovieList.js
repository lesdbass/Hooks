import React from 'react'
import PropTypes from 'prop-types'
// import Movie from './Data';
import MovieCard from './MovieCard';

function MovieList (props) {

      const mov = props.movieData.map(e => {
               
              return <MovieCard key={e.id} id={e.id}
                                 title={e.title} 
                                 description={e.description}
                                 posterURL={e.posterURL}
                                 rating={e.rating} />
      })
      
return (
    
    <>
      {mov}
    </>
)
}



// class MovieList extends React.Component {

//     render () {
//         const mov = Movie.map(e => {
                 
//                 return <MovieCard  id={e.id}
//                                    title={e.title} 
//                                    description={e.description}
//                                    posterURL={e.posterURL}
//                                    rating={e.rating} />
//         })
        
//   return (
      
//       <>
//         {mov}
//       </>
//   )
// }
// }


export default MovieList
