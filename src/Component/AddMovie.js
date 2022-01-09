import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddMovie = ({myMovie}) => {
    const [show, setShow] = useState(false);
    const [addMovie, setAddMovie] = useState({name:'',description:'', posterurl:'', rating:0})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
<Button variant="primary" onClick={handleShow}>
Add Movie      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className="addMovie">
            <label> Name</label>
        <input type="text" name="name" onChange={(e)=>{setAddMovie({...addMovie,name:e.target.value})}}/>
            <label> Description</label>
            <input type="text" name="description" onChange={(e)=>{setAddMovie({...addMovie,description:e.target.value})}}/>
            <label> PosterURL</label>
            <input type="text" name="posterurl" onChange={(e)=>{setAddMovie({...addMovie,posterurl:e.target.value})}}/>
            <label> Rating</label>
            <input type="text" name="rating" onChange={(e)=>{setAddMovie({...addMovie,rating:e.target.value})}}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{myMovie(addMovie);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>        </div>
    )
}

export default AddMovie