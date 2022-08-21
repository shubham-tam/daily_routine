import styled from "styled-components";

// Calorie Table

export const CalorieDataTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 350px;
  // background-color: #fff;
  background-color: #ffdfcc;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Target = styled.div``;
export const Current = styled.div``;
export const InputCalorie = styled.input`
  font-size: 14px;
  // background-color: #ffdfcc;
  padding: 15px;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

export const H1 = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 24px;
  // margin-bottom: 20px;
  // align-items: center;
  padding: 10px;
  // background-color: #fff;
  background-color: #ffdfcc;

  // &:first-child {
  //   marign-right: 20px;
  //   border-right: 1px solid #dedede;
  // }
`;

export const Value = styled.div`
  display: flex;
  justify-content: flex-start;
  // float: left;
  // margin-top: 10px;
  font-size: 24px;
  // background-color: #fff;
  background-color: #ffdfcc;
  padding: 10px;

  // border-right: 1px solid #dedede;
`;

export const Difference = styled.div`
  display: flex;
  width: 350px;
  font-weight: 600;
  font-size: 20px;
  // background-color: #fff;
  background-color: #ffdfcc;
  padding: 10px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const DiffValue = styled.div`
  display: flex;
  //   justify-content: center;
  //   justify-content: space-between;
  align-items: center;
  margin-right: 80px;
  font-size: 24px;
  // background-color: #fff;
  background-color: #ffdfcc;
  // padding: 20px;
`;

// Items Table

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
`;

export const Li = styled.li`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  // margin: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover ${ButtonDeleteItem} {
    opacity: 1;
  }
`;

// Add Calorie

export const Input = styled.input`
  display: flex;
  margin: 10px 0;
  // display: block;
  padding: 15px;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  border: 0;
  padding: 15px;
  margin: 20px 0 30px;
  width: 100%;
  font-size: 18px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #28a228;
  // background-color: #9c88ff;
  background-color: #cbebc3;

  &:focus {
    outline: 0;
  }
`;
