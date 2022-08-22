import "./App.css";
import styled from "styled-components";
import { CalorieTracker } from "./CalorieTracker";
import { ToDoList } from "./ToDoList";
import { MessageAndTime } from "./MessageAndTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

function App() {
  return (
    <>
      <Wrapper>
        <MessageAndTime />
        <ToDoList />
        <CalorieTracker />
      </Wrapper>
    </>
  );
}

export default App;
