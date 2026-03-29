import {useState, type FormEvent} from 'react'
import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const todoItem = formData.get("todo") as string

    console.log(todoItem);

    if(!todoItem.trim()) return //verifica se o usuario colocou uma tarefa vazia

    setTodoList(prev => [...prev, { //pega o array anterior e acrescenta a nova tarefa
      id: Date.now(),
      text: todoItem,
      completed: false
    }])
  }

  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList></TodoList>
    </TodoContainer>


  )
}

export default App
