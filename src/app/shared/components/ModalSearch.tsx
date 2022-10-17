import { MagnifyingGlass, X } from "phosphor-react";
import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 300;
  form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    width: 100%;
    input {
      width: 90%;
      border-radius: 30px;
    }
    .btn-submit {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: 1px solid black;
    }
  }
  /* button to close modal*/
  .close-btn {
    button {
      border: none;
      border-radius: none;
      background-color: transparent;
      svg {
        font-size: 2rem;
        color: #fff;
      }
    }
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .close-menu {
    display: none;
  }
`;

interface IModalSearchProps {
  submit: (e: any) => void;
  closeModal: () => void;
  search: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalSearch = ({
  submit,
  search,
  closeModal,
}: IModalSearchProps) => {
  const handleCloseModal = (e: any) => {
    closeModal();
    submit(e);
  };

  return (
    <Modal id={"modalId"}>
      <div className="close-btn">
        <button onClick={closeModal}>
          <X fill="bold" />
        </button>
      </div>
      <form onSubmit={handleCloseModal}>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
        <button className="btn-submit">
          <MagnifyingGlass weight="regular" />
        </button>
      </form>
    </Modal>
  );
};
