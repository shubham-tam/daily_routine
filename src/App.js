import "./App.css";
import { CalorieTracker } from "./CalorieTracker";
import { DateNTime } from "./DateNTime";
import { Message } from "./Message";
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <>
      <DateNTime />
      <Message />
      <ToDoList />
      <CalorieTracker />
    </>
  );
}

export default App;
