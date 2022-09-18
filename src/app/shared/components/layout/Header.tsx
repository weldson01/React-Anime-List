import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const HeaderPage = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3333;
  a {
    text-decoration: none;
  }
  .logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

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
`;

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) return;
    navigate(`/anime/search/${search}`);
    console.log(search);
    setSearch("");
  };
  return (
    <HeaderPage>
      <Link to={"/"}>
        <div className="logo">
          <img src="/src/app/assets/logo.svg" alt="logo" />
          <h2>React Anime List</h2>
        </div>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Faça uma busca"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>
          <MagnifyingGlass weight="regular" />
        </button>
      </form>
    </HeaderPage>
  );
};
