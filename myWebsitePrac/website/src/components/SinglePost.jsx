import useSelector from 'react-redux'
import React from 'react'
import Modal from 'react-modal'

const SinglePost = ()=>{
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/** 각각의 게시물이 모달에 표시 되어야 한다. */}
        </Modal>
      </div>
    );
  }

export default SinglePost;