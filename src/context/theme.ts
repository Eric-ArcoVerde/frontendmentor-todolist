import IconSun from "/images/icon-sun.svg"
import MoonIcon from "/images/icon-moon.svg"

export const themeConfig = {
    light: {
        name: "light",
        layout: {
            backgroundColor: 'bg-light-purple-300',
            textColor: 'text-light-navy-850'
        },
        todo: {
            backgroundColor: 'bg-light-bg',
            borderColor: 'border-light-purple-300',
            textColor: 'text-light-navy-850'
        },
        icon: IconSun
    },
    dark: {
        name: "dark",
        layout: {
            backgroundColor: 'bg-dark-navy-950',
            textColor: 'text-dark-purple-300'
        },
        todo: {
            backgroundColor: 'bg-dark-navy-900',
            borderColor: 'border-dark-purple-800',
            textColor: 'text-dark-purple-300'
        },
        icon: MoonIcon
    }
}