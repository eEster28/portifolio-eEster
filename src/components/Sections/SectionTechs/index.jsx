import Styles from "./style.module.scss"
import { techs, techsBlack } from "../../../database/techDatabase"
import { CardTech } from "./CardTechs"
import { useContext } from "react"
import { HeaderContext } from "../../../providers/HeaderContext"

export const SectionTechs = () => {
    const { theme } = useContext(HeaderContext)

    return (
        <section className={Styles.conteiner} id="techs">
            <h2 className="title two sub">Tecnologias</h2>
            <div className={Styles.scroller}>
                <ul className={Styles.card}>
                    {theme === "dark" ?
                        techs.map((technology) => {
                            const { img, name } = technology
                            return (
                                <li key={crypto.randomUUID()}>
                                    <CardTech name={name} img={img} />
                                </li>
                            )
                        })
                        :
                        techsBlack.map((technology) => {
                            const { img, name } = technology
                            return (
                                <li key={crypto.randomUUID()}>
                                    <CardTech name={name} img={img} />
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className={`${Styles.card_clone} ${Styles.card}`}>
                    {theme === "dark" ?
                        techs.map((technology) => {
                            const { img, name } = technology
                            return (
                                <li key={crypto.randomUUID()}>
                                    <CardTech name={name} img={img} />
                                </li>
                            )
                        })
                        :
                        techsBlack.map((technology) => {
                            const { img, name } = technology
                            return (
                                <li key={crypto.randomUUID()}>
                                    <CardTech name={name} img={img} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
}

