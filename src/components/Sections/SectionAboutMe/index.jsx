import Styles from "./style.module.scss"


export const SectionAboutMe = () => {
    return(
        <section className={Styles.conteiner} id="sobremim">
            <h2 className="title two sub">Sobre mim</h2>
            <p className="title paragraph">Meu nome é Ester Moura, tenho 19 anos. Estou cursando superior em Análise e Desenvolvimento de Sistema, dedicando-me a aprender e desenvolver habilidades essenciais para me destacar no mercado de tecnologia. Miro em uma oportunidade que me permita aplicar meus conhecimentos, crescer profissionalmente e contribuir de forma inovadora. Estou sempre atenta às novas tendências e inovações, buscando estar preparada para enfrentar os desafios do setor e fazer a diferença com soluções tecnológicas criativas e eficazes.
            </p>
        </section>
    )
}