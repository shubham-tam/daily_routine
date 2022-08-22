import styled from "styled-components";

export const Title = styled.div`
  display: inline-block;
  color: red;
  font-size: 18px;
  top: 5%;
  left: 45%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Input = styled.input`
  display: flex;
  margin: 10px 0;
  // display: block;
  padding: 15px;
  // width: 10%;
  border: 1px solid #dedede;
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
`;

export const ButtonComponents = styled.div`
  display: inline-block;
  display: flex;
  gap: 20px;
  top: 20%;
  left: 45%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  margin: 10px 0;
  display: block;
  padding: 15px;
  transition: all 0.3s ease;

  border: 1px solid #333;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: #fff;
  overflow: hidden;
  border: 2px solid #28a228;
  color: #28a228;
  font-size: 16px;

  &:hover {
    transition: all 0.3s ease;
    background: #28a228;
    color: white;
    transform: scale(0.95);
  }
`;

export const ButtonDelAll = styled.button`
cursor: pointer;
margin: 10px 0;
display: block;
padding: 15px;
transition: all 0.3s ease;

border: 1px solid #333;
outline: none;
border-radius: 5px;
z-index: 0;
background: #fff;
overflow: hidden;
border: 2px solid #DB4E4E ;
color: #DB4E4E ;
font-size: 16px;

&:hover {
  transition: all 0.3s ease;
  background: #DB4E4E ;
  color: white;
  transform: scale(0.95);`;
