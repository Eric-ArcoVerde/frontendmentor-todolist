import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

interface ThemeProviderProps {
    children: React.ReactNode //Serve para tipar qualquer coisa que o React pode rederizar, muito mais seguro usar que o any. Usa interface para Pros de componentes
}

type ThemeName = 'light' | 'dark';

export const ThemeProvider = ({children} : ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>('dark')

    const toogleTheme = () => { //Troca o thema com base no que estava armazenado antes
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        // Value é  o valor que vai ser dado quando quisermos que o contexto seja consumido por alguem. Funciona como uma mochila que tudo o que coloca nela os filhos vão poder acessar com o useContent. O que quer acessar de fora do contexto
        <ThemeContext.Provider value={{theme, toogleTheme}}> 
            {children}
        </ThemeContext.Provider>

    )
}