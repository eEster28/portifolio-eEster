import Style from "./style.module.scss"
import { useContext } from "react"
import { HeaderContext } from "../../providers/HeaderContext"
import DarkMode from "../../assets/dark.jpg"
import LigthMode from "../../assets/ligth.jpg"


export const Header = () => {
    const {
        theme,
        switchTheme,
        openMenu,
        burger_class,
        menu_class
    } =
        useContext(HeaderContext)

    return (
        <header className={Style.conteiner}>

            <div>
                <button
                    className={Style.button_clear}
                    onClick={switchTheme}>

                    {theme === "dark" ?
                        <img src={LigthMode} alt="Ligth Mode" className={Style.img_theme} /> :
                        <img src={DarkMode} alt="Dark Mode"
                            className={Style.img_theme} />
                    }
                </button>
            </div>

            <a href="#home"> <h1 className="title">Portifólio</h1></a>

            <div className="burger-menu" onClick={openMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>

            <div className={menu_class}>
                <div className="conteiner_menu">
                    <a className="button_menu title text" href="#sobremim" onClick={openMenu} >Sobre mim</a>
                    <a className="button_menu title text" href="#techs" onClick={openMenu}>Tecnologias</a>
                    <a className="button_menu title text" href="#projects" onClick={openMenu}>Projetos</a>
                    <a className="button_menu title text" href="#contacts" onClick={openMenu}
                    >Contatos</a>
                </div>
            </div>
        </header>
    )
}