import { createContext, ReactNode, useContext } from 'react';

interface ModalContextProps {
  currentModal: string | undefined;
}

interface ModalProps {
  id: string;
  children: ReactNode;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(`Error`);
  }
  return context;
}

function ModalProvider({ children }: ModalProviderProps) {
  return (
    <ModalContext.Provider
      value={{
        currentModal: undefined,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Modal({ id, children }: ModalProps) {
  const { currentModal } = useModalContext();

  return <>{currentModal === id ? children : undefined}</>;
}

function Trigger({ id, children }: ModalProps) {}

Modal.Provider = ModalProvider;

export default Modal;
