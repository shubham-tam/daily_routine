import "./App.css";
import { CalorieTracker } from "./CalorieTracker";
import { ToDoList } from "./ToDoList";
import { MessageAndTime } from "./MessageAndTime";

function App() {
  return (
    <>
      <MessageAndTime />
      <ToDoList />
      <CalorieTracker />
    </>
  );
}

export default App;
