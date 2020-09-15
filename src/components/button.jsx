import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 0.9rem;
  background: transparent;
  border-radius: 9px;
  border: 2px solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--mainDark)")};
  padding: 6px;
  outline: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--mainYellow)" : " var(--lightBlue)"};
    color: var(--mainWhite);
  }
`;
