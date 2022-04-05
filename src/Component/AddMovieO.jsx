import React , {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

import { Button,Form } from 'react-bootstrap';

const AddMovie = (props) => {
    //  ;
    const {addNewMovie} = props;
    const [mv,setMv]=useState({
      id:(Math.floor(Math.random() * (100 - 1)) + 1),
      title:"",
      description : "",
      posterURL:"",
      rating:0
    })

  
    // const handleRating = (e) => {
    //   setRating(e);
    // }

const reset = ()=>{
  setMv({
    id:(Math.floor(Math.random() * (100 - 1)) + 1),
    title:"",
    description : "",
    posterURL:"",
    rating:0
  })
}

  const handleChange = ({ target:  { name , value } }) => {
    console.log(name)
    setMv({ ...mv, hasChanged: true, [name]: value });
  };
  
      
  return (
    <Form  >

          <div className="App"  >
              <div className='spInput'>
                 <Form.Group controlId="formBasicId">
                  <Form.Label>Id Movie</Form.Label>
                   <Form.Control type="text" placeholder="Enter Id" name='id' value={mv.id} onChange={handleChange}/>

                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group  controlId="MovieName">
                  <Form.Label>Movie Name</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie Name" name='title' value={mv.title} onChange={handleChange}  />
                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group controlId="MovieDescription">
                  <Form.Label>Movie Description</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie Description" value={mv.description}  name="description" onChange={handleChange} />
                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group  controlId="MovieUrl">
                  <Form.Label>Movie Url Picture</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie url Picture" value={mv.posterURL} name="posterURL" onChange={handleChange}/>
                </Form.Group>
              </div>
          </div>
          <div className="Sub">
                <Rating ratingValue={mv.rating} value={mv.rating} id="rating" onClick={handleChange} />
                <Button type="button" className="btn-danger" onClick={ () => { addNewMovie(mv);reset();}}  >Submit</Button>
          </div>
         
        </Form>


  )
}

export default AddMovie
// addNewMovie({id,title,description,posterURL,rating})