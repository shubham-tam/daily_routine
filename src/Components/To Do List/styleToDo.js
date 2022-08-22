import styled from "styled-components";

export const Title = styled.div`
  // display: inline-block;
  // color: red;
  font-size: 18px;
  // top: 5%;
  // left: 45%;
  // transform: translate(-50%, -50%);
  // position: absolute;
`;

export const Input = styled.input`
  // display: flex;
  // display: inline-block;

  margin: 10px 0;
  // display: block;
  padding: 15px;
  // width: 10%;
  border: 1px solid #dedede;
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
  width: 230px;
`;

export const ButtonComponents = styled.div`
  // display: inline-block;
  // display: flex;
  // gap: 20px;
  // top: 20%;
  // left: 45%;
  // transform: translate(-50%, -50%);
  // position: absolute;
`;

export const Form = styled.form`
  // display: inline-block;
  display: flex;
  gap: 20px;
  // top: 20%;
  // left: 45%;
  // transform: translate(-50%, -50%);
  // position: absolute;
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

export const H3 = styled.h3`
  // display: inline-block;
  letter-spacing: 1px;

  //   color: red;
  font-size: 22px;
  // top: 25%;
  // left: 45%;
  // transform: translate(-50%, -50%);
  // position: absolute;
`;

export const ButtonDeleteItem = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;
  transform: translate(-100%, -50%);
  transition: opacity 0.3s ease;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  width: 350px;
  // margin-top: 300px;
  // margin-left: 650px;
  position: absolute;
`;

export const Li = styled.li`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover ${ButtonDeleteItem} {
    opacity: 1;
  }
`;
