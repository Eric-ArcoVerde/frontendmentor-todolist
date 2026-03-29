import { themeConfig } from '../../context/theme' //aqui importamos o objeto do tema, para consumir o contexto precisa de um hook
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

const TodoHeader = () => {

  const { theme, toggleTheme } = useContext(ThemeContext) //é o hook do useContext, aqui desestrutura o objeto. theme representa o tema atual e toggleTheme a função que faz a troca do tema

  //dava erro de tipagem porque them não era tipado e recebia any
  //theme = ??? any - 1234, bata, null
  //themeConfig[theme] = pode dar erro, porque eu nem sei de theme existe no themeConfig

  //agora theme = 'light' || 'dark'
  //themeConfig[theme] = sei que light ou dark existe no themeConfig

  return (
    <header className='flex justify-between p-5 items-center mb-6'>

      <h1 className='text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]'>TODO</h1>

      <button className='cursor-pointer' onClick={toggleTheme}>
        <img className='w-8 h-8' src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
      </button>
    </header>
  )
}

export default TodoHeader