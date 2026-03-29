import IconSun from '/images/icon-sun.svg'
import { themeConfig } from '../../context/theme' //aqui importamos o objeto do tema, para consumir o contexto precisa de um hook
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

const TodoHeader = () => {

  const { theme, toogleTheme } = useContext(ThemeContext) //é o hook do useContext, aqui desestrutura o objeto. theme representa o tema atual e toogleTheme a função que faz a troca do tema

  return (
    <header className='flex justify-between mb-6 pt-20'>

      <h1 className='text-white text-[2.5rem] font-bold tracking-[1rem]'>TODO</h1>

      <button className='cursor-pointer' onClick={toogleTheme}>
        <img className='w-8 h-8' src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
      </button>
    </header>
  )
}

export default TodoHeader