import Styles from "./style.module.scss"
import { techs } from "../../../database/techDatabase"
import { CardTech } from "./CardTechs"

export const SectionTechs = () => {
    return (
        <section className={Styles.conteiner}>
            <h2 className="title two sub">Tecnologias</h2>
            <ul className={Styles.card}>
                {techs.map((technology) => {
                    const { img, name } = technology
                    return (
                        <li key={crypto.randomUUID()}>
                            <CardTech name={name} img={img} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}