import { projectsFront, projectsBack } from "../../../database/projects"
import { CardProjectsBack, CardProjectsFront } from "./CardProjects"
import Styles from "./style.module.scss"

export const SectionProjects = () => {
    return(
        <section className={Styles.conteiner} id="projects">
            <h2 className="title two sub">Projetos</h2>
            <h3 className="title two project">Front-end:</h3>
            <ul className={Styles.card1}>
                {
                    projectsFront.map((projects)=>{
                        const {name, site, link} = projects
                        return (
                            <li  key={crypto.randomUUID()}>
                                <CardProjectsFront name={name} site={site} link={link} />
                            </li>
                        )
                    })
                }
            </ul>
            <h3 className="title two project">Back-end:</h3>
            <ul className={Styles.card1}>
                {
                    projectsBack.map((projects)=>{
                        const {name, link} = projects
                        return (
                            <li className={Styles.card}  key={crypto.randomUUID()}>
                                <CardProjectsBack name={name}  link={link} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}