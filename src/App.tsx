import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"


function App() {


  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>

      <TodoForm></TodoForm>

      <TodoList></TodoList>
    </TodoContainer>


  )
}

export default App
