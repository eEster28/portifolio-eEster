import Style from "./style.module.scss"
import Git from "../../assets/footer/git.png"
import Email from "../../assets/footer/email.png"
import Linkedin from "../../assets/footer/linkedim.png"
import copyWhite from "../../assets/copyright/white.png"
import copyBlack from "../../assets/copyright/black.png"
import { useContext } from "react"
import { HeaderContext } from "../../providers/HeaderContext"


export const Footer = () => {
    const { theme } = useContext(HeaderContext)

    return (
        <footer className={Style.conteiner} id="contacts">
            <div className={Style.conteiner_div}>
                <h2 className="title two sub">Contatos</h2>
                <div>
                    <a target="_blank" href="https://github.com/eEster28">
                        <img src={Git} alt="icon git" />
                        <span className="title two sub span">GitHub</span>
                        <span className="title span">@eEster28</span>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ester-moura-silva-2b343b278/">
                        <img src={Linkedin} alt="icon linkedin" />
                        <span className="title two sub span">Linkedin</span>
                        <span className="title span">Ester Moura Silva</span>
                    </a>
                    <a target="_blank" href={"mailto:estermouramg@gmail.com"}>
                        <img src={Email} alt="icon email" />
                        <span className="title two sub span">Email</span>
                        <span className="title span">estermouramg@gmail.com</span>
                    </a>
                </div>

            </div>
            <p className="title span"> {theme === "dark" ? 
            <img src={copyBlack} alt="copyright" />
            :
            <img src={copyWhite} alt="copyright" />  
            } Todos os direitos reservados - Ester Moura Silva </p>
        </footer>
    )
}