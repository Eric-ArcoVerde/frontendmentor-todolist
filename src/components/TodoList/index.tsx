import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { themeConfig } from "../../context/theme"
import type { Todo } from "../../App"
import IconCheck from "/images/icon-check.svg"


interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filter: 'all' | 'active' | 'completed';
}

const TodoList = ({ todoList, toggleTodoCompleted, setFilter, filter }: TodoListProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))] hover:p-[1px]">
                  <button
                    onClick={() => toggleTodoCompleted(todo.id)}
                    className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}
                    ${todo.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))]" : ''}`}
                  >
                    {todo.completed && (
                      <img
                        src={IconCheck}
                        alt="Icone de marcado"
                        className="h-2 w-2 m-auto" />
                    )}
                  </button>
                </span>

                <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>
                  {todo.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
          <p>{todoList.length} items total</p>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`${filter === "all" ? "text-bright-blue-500" : ""} cursor pointer ${theme === "dark"
                ? "hover:text-dark-purple-100"
                : "hover:text-light-navy-850"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`${filter === "active" ? "text-bright-blue-500" : ""} cursor-pointer ${theme === "dark"
                ? "hover:text-dark-purple-100"
                : "hover:text-light-navy-850"} `}
            >
              Active
            </button>
            <button onClick={() => setFilter("completed")} className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"} `}>Completed</button>
          </div>

          <button className={`${filter === "completed" ? "text-bright-blue-500" : ""} cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"} `}>Clear Completed</button>
        </div>
      </div>

      <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}>
        <button onClick={() => setFilter("all")}
          className={`${filter === "all" ? "text-bright-blue-500" : ""} cursor pointer ${theme === "dark"
            ? "hover:text-dark-purple-100"
            : "hover:text-light-navy-850"}`}
        >All</button>
        <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-bright-blue-500" : ""} cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"} `}>Active</button>
        <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "text-bright-blue-500" : ""} cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"} `}>Completed</button>
      </div>
    </>
  )
}

export default TodoList