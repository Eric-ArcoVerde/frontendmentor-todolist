import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"

function App() {
  return (
    <main className="bg-dark-navy-950 h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
        <div className="max-w-[43.75rem] m-auto p-2">
          <TodoHeader></TodoHeader>

          <TodoForm></TodoForm>
        </div>
      </div>
    </main>
  )
}

export default App
