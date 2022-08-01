import { Route, Switch, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

function LoginModal({ setLoginModalOpen, setUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [signup, setSignup] = useState(false);
  const initialRef = useRef();

  useEffect(() => {
    onOpen();

    return function cleanUp() {
      setSignup("");
    };
  }, []);

  function handleClose() {
    setLoginModalOpen(false);
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        {signup ? (
          <SignupForm
            setSignup={setSignup}
            initialRef={initialRef}
            setUser={setUser}
            handleClose={handleClose}
          />
        ) : (
          <LoginForm
            setSignup={setSignup}
            initialRef={initialRef}
            setUser={setUser}
            handleClose={handleClose}
          />
        )}
      </Modal>
    </>
  );
}

export default LoginModal;
