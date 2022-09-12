import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #2c3333;
  color: #e7f6f2;
  height: 2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #e7f6f2;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      A project by 
      <a href="https://www.linkedin.com/in/weldson-carlos/" target="blank">
        Weldson Carlos
      </a>
    </FooterStyled>
  );
};
