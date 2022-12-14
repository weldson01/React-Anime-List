import { ArrowLeft, ArrowRight } from "phosphor-react";
import styled from "styled-components";

const Navegation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
  list-style: none;
  margin: 2rem 0;
  li {
    button {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 30px;
      background-color: #222;
      color: #fff;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
      &:active {
        border: 1px solid black;
      }
    }
  }
`;
interface IPaginationPopularAnimeProps {
  pageFunction: (page: number) => void;
  page: number;
  maxPage: number;
}

export const Pagination = ({
  pageFunction,
  page,
  maxPage,
}: IPaginationPopularAnimeProps) => {
  const handleChangePage = (page: number) => {
    pageFunction(page);
  };
  return (
    <div>
      {/* todo páginação */}
      <Navegation>
        {page > 1 && (
          <li>
            <button
              onClick={() => {
                handleChangePage(1);
              }}
            >
              {1}
            </button>
          </li>
        )}
        {page > 2 && (
          <li>
            <button
              onClick={() => {
                handleChangePage(page - 1);
              }}
            >
              <ArrowLeft />
            </button>
          </li>
        )}
        <li>
          <button>{page}</button>
        </li>
        {page < maxPage && (
          <li>
            <button
              onClick={() => {
                handleChangePage(page + 1);
              }}
            >
              <ArrowRight />
            </button>
          </li>
        )}
        {page < maxPage - 1 && (
          <li>
            <button
              onClick={() => {
                handleChangePage(maxPage);
              }}
            >
              {maxPage}
            </button>
          </li>
        )}
      </Navegation>
    </div>
  );
};
