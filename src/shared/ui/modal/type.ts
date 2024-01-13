export interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  content: React.ReactNode;
}
