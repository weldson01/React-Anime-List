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
  main{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
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
