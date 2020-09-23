import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle}>Crea tu mapa</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Crea tu Mapa</ModalHeader>
        <ModalBody>
          Inicia sesión con Strava y podrás acceder a tus trutas, después te redigiremos a una página en la que podrás elegir entre varios modelos de mapas.
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>Inica con Strava</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;