import { FC } from "react";
import { ModalProps } from "./type";

const Modal: FC<ModalProps> = ({ showModal, setShowModal, content }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-blue-700 bg-opacity-20"
              onClick={() => setShowModal(false)}
            ></div>
            {content}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
