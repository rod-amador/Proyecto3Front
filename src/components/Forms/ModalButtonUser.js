import React, {useState} from "react";
import Modal from "react-modal"
import FormikFormUser from "./Formik";

const customStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: "40%",
    height: '50%',
    transform: 'translate(-40%, -20%)',
    border: 'solid 1px #f07e1c'
  },
};

function ModalButtonUser () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    return (
      <nav className="uk-navbar-container">

        <button
            style={{backgroundColor:"#f8f8f8"}}
            className="uk-button"
            onClick= { ()=>{setModalIsOpen(true)}  }
           > 
            SIGNUP
        </button>

          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false)}}
            style={customStyles}
            ariaHideApp={false}
            >

          <div>
                <button 
                    onClick= {()=>{setModalIsOpen(false)}  }
                    className="uk-button uk-button-muted uk-align-right">
                        <span uk-icon="icon: close"> </span>     
                </button> 
                <br/>
          </div>
            
            <br/>
              
            <FormikFormUser/>

             
          </Modal>
      </nav>
    );
  }


export default ModalButtonUser;