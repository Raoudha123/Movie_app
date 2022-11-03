import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(1)

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id:Math.random(),
      name,
      rating,
      date,
      image
    }
    add(newMovie)
    closeModal()
  }

  const handleRating = (x) => setRating(x)
  return (
    <div>
        <button className='btn add-movie-btn' onClick={openModal}>Add Movie</button>
          <Modal
            isOpen={modalIsOpen}
          
            onRequestClose={closeModal}
            style={customStyles}
           
          >
            <form onSubmit={handleSubmit} action="">
              <label htmlFor="">Title</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
              <label htmlFor="">Date</label>
              <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
              <StarRating rating={rating}  handleRating={handleRating} />
              <label htmlFor="">Poster</label>
              <input type="url" value={image} onChange={(e)=>setImage(e.target.value)} />
              <div>
                <button type='submit' className='btn btn-danger' >Confirm</button>
                <button  onClick={closeModal} className='btn btn-danger' >Cancel</button>
              </div>
            </form>
          </Modal>
    </div>
  )
}

export default AddMovie