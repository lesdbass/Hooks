import React,{useState} from "react";
import { Rating } from 'react-simple-star-rating'
import {Button,Modal,Form} from "react-bootstrap"

function Test({addNewMovie}) {
    const [show, setShow] = useState(false);

    const [title,setNewTitle]=useState("");
    const [description,setNewDesc]=useState("");
    const [posterURL,setNewUrl]=useState("");
    const [rating,setNewRating]=useState(0);
    console.log(rating)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <div className="App"  >
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
          <div>
                <Rating onChange={(e)=>setNewRating(e.target.value)}  ratingValue="0" value={rating} name="rating"  />
                
          </div>
         
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();addNewMovie({id:Math.random(),title,description,posterURL,rating})}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default Test