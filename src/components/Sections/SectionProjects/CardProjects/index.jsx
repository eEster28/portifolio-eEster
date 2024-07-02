import { useContext } from "react"
import gitWhite from "../../../../assets/git-white.svg"
import gitBlack from "../../../../assets/git-black.svg"
import { HeaderContext } from "../../../../providers/HeaderContext"


export const CardProjectsFront = ({ name, site, link }) => {
    const { theme } = useContext(HeaderContext)

    return (
        <>
            <div>
                <span className="title paragraph card">{name}</span>
                {
                    theme === "dark" ?
                        <img src={gitBlack} alt={`Imagem do icone git`} /> :
                        <img src={gitWhite} alt={`Imagem do icone git`} />
                }

            </div>
            <a className="title sub-title a" target="_blank" href={site}>Visitar site</a>
            <a className="title two sub a" target="_blank" href={link}>Codigo GitHub</a>
        </>
    )
}

export const CardProjectsBack = ({ name, link }) => {
    const { theme } = useContext(HeaderContext)

    return (
        <>
            <div>
                <span className="title paragraph card">{name}</span>
                {
                    theme === "dark" ?
                        <img src={gitBlack} alt={`Imagem do icone git`} /> :
                        <img src={gitWhite} alt={`Imagem do icone git`} />
                }
            </div>
            <a className="title two sub a" target="_blank" href={link}>Codigo GitHub</a>
        </>
    )
}
