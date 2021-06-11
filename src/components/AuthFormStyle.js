import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 25px;
  width: 45%;
  margin: 20px 0px;
  outline: none;
  border: 2px solid ${props => props.theme.warmPinkColor || "gray"};
  &:focus {
    border: 2px solid ${props => props.theme.cherryColor || "black"};
  }
  padding-left: 15px;
`;

export const Button = styled.button`
  height: 40px;
  width: 45%;
  font-size: 25px;
  font-weight: 600;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.darkCherryColor || "rgba(0,0,0,0.1)"};
  color: ${props => props.theme.warmPinkColor};
  cursor: pointer;
  margin-top: 10px;
`;

export const FormError = styled.span`
  font-weight: 600;
  color: red;
`;