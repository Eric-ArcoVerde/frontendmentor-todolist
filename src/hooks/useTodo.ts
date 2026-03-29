import { useState, type FormEvent } from "react";


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => { //precisa de começar com "use" pro react entender que é um hook 
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const todoItem = formData.get("todo") as string

        if (!todoItem.trim()) return //verifica se o usuario colocou uma tarefa vazia

        setTodoList(prev => [...prev, { //pega o array anterior e acrescenta a nova tarefa
            id: Date.now(),
            text: todoItem,
            completed: false
        }])

        event.currentTarget.reset()

        setFilter("all")
    }

    const toggleTodoCompleted = (id: number) => {
        console.log(id)
        const newTodoList = todoList.map(todo => {
            if (id === todo.id) {
                const completed = !todo.completed
                return {
                    ...todo,
                    completed //completed(propriedade) = completed(variavel) -como ambos são iguais de nome da para omitir
                }
            }
            return todo

        })
        setTodoList(newTodoList)

    }

    //faz o filtroo
    const filteredTodos = todoList.filter(todo => {
        if (filter === "active") return !todo.completed
        if (filter === "completed") return todo.completed
        return true
    })

    const clearCompleted = () => {
        setTodoList(prev => prev.filter(todo => !todo.completed))
    }

    return {
        addTodo,
        toggleTodoCompleted, //amarelo é função
        filteredTodos, //azul é array
        clearCompleted,
        filter,
        setFilter,
    }
}