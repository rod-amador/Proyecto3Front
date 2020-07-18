import React, { useState } from "react";
import Modal from "react-modal";
import AppContext from "../../AppContext";


// solo si da tiempo 

function ModalButton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
      <AppContext.Consumer>
        {(value) => {
         
            return (
            <section className="uk-margin-top uk-text-center ">
              <button
                style={{ backgroundColor: "#E5E4E2" }}
                className="uk-button"
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                NUEVO TICKET [+]
              </button>
  
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                  setModalIsOpen(false);
                }}
                style={customStyles}
                ariaHideApp={false}
              >
                <div>
                  <button
                    href="#" onClick={() => {setModalIsOpen(false);}}
                    className="uk-button-muted uk-align-right">
                    <span uk-icon="icon: close"> </span>
                  </button>

                  <br />
                </div>
  
                <br />
                <FormikFormTicket tenantId={tenantId} setModalIsOpen={setModalIsOpen} />
              </Modal>
            </section>
          );
        }}
      </AppContext.Consumer>
    );
  }
  
  export default ModalButton;
  
