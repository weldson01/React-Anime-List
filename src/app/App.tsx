import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";
import { Footer, Header } from "./shared/components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }
  body{
    background-color: #f7f7f7;

  }
  main{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem 0;
  background-color: #f7f7f7;

  }
`;

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </>
  );
};
