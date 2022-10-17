import { List, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import styled from "styled-components";
import { ModalSearch } from "../ModalSearch";
const HeaderPage = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3333;
  width: 100vw;
  a {
    text-decoration: none;
  }
  .logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    img {
      padding: 0 0.5rem;
    }
    h2 {
      color: #fff;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  input {
    width: 20rem;
    height: 2.5rem;
    border-radius: 30px 0px 0px 30px;
    outline: none;
    padding-left: 20px;
    font-size: 1.5rem;
    &:focus {
      border: 3px solid #a5c9ca;
    }
  }

  button {
    width: 4rem;
    height: 2.5rem;
    font-size: 1.3rem;
    border-radius: 0px 30px 30px 0px;
    cursor: pointer;
    &:active {
      background-color: #e7f6f2;
    }
  }
  .btn-show-modal {
    button {
      background: transparent;
      border: none;
      outline: none;
      svg {
        font-size: 2rem;
        color: #fff;
      }
      &:active {
        background: transparent;
        svg {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    justify-content: space-around;
    height: 15vh;
    .logo {
      width: 80vw;
      padding: 0.5rem;
      gap: 1rem;
      img {
        width: 25vw;
      }
      h2 {
        font-size: 1.5rem;
        width: 80vw;
      }
    }
    .desktop-search {
      form {
        display: none;
      }
    }
  }
`;

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [displayModal, setDisplayModal] = useState(false);
  const [displayBtnModal, setDisplayBtnModal] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) return;
    navigate(`/anime/search/${search}`);
    setSearch("");
  };
  useEffect(() => {
    const windowX = window.screen.width;
    setDisplayBtnModal(() => {
      return windowX <= 420;
    });
  });
  const handleShowModalSearch = () => {
    setDisplayModal((prev) => !prev);
    console.log(displayModal);
  };
  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  return (
    <HeaderPage>
      <Link to={"/"}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>React Anime List</h2>
        </div>
      </Link>
      <div className="desktop-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button>
            <MagnifyingGlass weight="regular" />
          </button>
        </form>
      </div>
      {displayBtnModal && (
        <div className="btn-show-modal">
          <button onClick={handleShowModalSearch}>
            <List />
          </button>
        </div>
      )}
      {displayModal && (
        <ModalSearch
          submit={handleSubmit}
          search={setSearch}
          closeModal={handleCloseModal}
        />
      )}
    </HeaderPage>
  );
};
