import React , {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

import { Button,Form } from 'react-bootstrap';

const AddMovie = (props) => {
    //  ;
    const {addNewMovie} = props;

    const [id,setNewID]=useState(Math.floor(Math.random() * (100 - 1)) + 1);
    const [title,setNewTitle]=useState("");
    const [description,setNewDesc]=useState("");
    const [posterURL,setNewUrl]=useState("");
    const [rating,setRating]=useState(0);
  
    // const handleId = (e) => {
    //   setNewID(e.target.value);
    // }
  
    // const handleTitle = (e) => {
    //   setNewTitle(e.target.value);
    // }
  
    // const handleDesc = (e) => {
    //   setNewDesc(e.target.value);
    // }
  
    // const handleUrl = (e) => {
    //   setNewUrl(e.target.value);
    // }
  
    const handleRating = (e) => {
      setRating(e);
    }

const reset = ()=>{
  setNewID(Math.floor(Math.random() * (100 - 1)) + 1);
  setNewTitle("");
  setNewDesc("");
  setNewUrl("");
  setRating(0);
    
}
  return (
    <Form  >

          <div className="App"  >
              <div className='spInput'>
                 <Form.Group controlId="formBasicId">
                  <Form.Label>Id Movie</Form.Label>
                   <Form.Control type="text" placeholder="Enter Id" name='id' value={id} onChange={(e)=>setNewID(e.target.value)}/>
                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group  controlId="MovieName">
                  <Form.Label>Movie Name</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie Name" name='title' value={title} onChange={(e)=>setNewTitle(e.target.value)}  />
                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group controlId="MovieDescription">
                  <Form.Label>Movie Description</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie Description" value={description}  name="description" onChange={(e)=>setNewDesc(e.target.value)} />
                </Form.Group>
              </div>
              <div className='spInput'>
                 <Form.Group  controlId="MovieUrl">
                  <Form.Label>Movie Url Picture</Form.Label>
                   <Form.Control type="text" placeholder="Enter Movie url Picture" value={posterURL} name="posterURL" onChange={(e)=>setNewUrl(e.target.value)}/>
                </Form.Group>
              </div>
          </div>
          <div className="Sub">
                <Rating ratingValue={rating} value={rating} name="rating" onClick={handleRating} />
                <Button type="button" className="btn-danger" onClick={ () => { addNewMovie({id,title,description,posterURL,rating});reset();}}  >Submit</Button>
          </div>
         
        </Form>


  )
}

export default AddMovie
// addNewMovie({id,title,description,posterURL,rating})