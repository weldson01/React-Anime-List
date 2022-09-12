import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";
const HeaderPage = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3333;

  div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  div input {
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

  div button {
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
  return (
    <HeaderPage>
      <div>
        <img src="https://via.placeholder.com/80" alt="" />
      </div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Faça uma busca"
        />
        <button>
          <MagnifyingGlass weight="regular" />
        </button>
      </div>
    </HeaderPage>
  );
};
