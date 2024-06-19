import Style from "./style.module.scss"
import curriculo from "../../../docs/CV_EsterMoura.pdf"

export const SectionTitle = () => {
  return (
    <section className={Style.conteiner}>
        <h2 className="title two">Olá, sou</h2>
        <h3 className="title two sub">Ester Moura</h3>
        <span className="title sub-title">Desenvlvedora full-stak</span>
        <button ><a className="title button" target="_blank" href={curriculo}>Currículo</a></button>

    </section>
  )
}