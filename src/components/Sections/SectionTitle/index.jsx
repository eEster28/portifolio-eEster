import Style from "./style.module.scss"
import curriculo from "../../../docs/CV_EsterMoura.pdf"
import { Typewriter } from 'react-simple-typewriter'

export const SectionTitle = () => {

  return (
    <section className={Style.conteiner}>
      <h2 className="title two">Olá, sou</h2>
      <h3 className="title two sub">
        <Typewriter
          words={['Ester Moura']}
          loop={1} 
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h3>
      <span className={`title sub-title ${Style.titleSub}`}>
        Desenvolvedora FullStack
      </span>
      <button>
        <a className="title button" target="_blank" rel="noopener noreferrer" href={curriculo}>Currículo</a>
      </button>
    </section>

  )
}



