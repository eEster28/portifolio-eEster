import Style from "./style.module.scss"
import ImgEster from "../../../assets/foto-eEster.png"

export const SectionPhoto = () => {
    return (
        <section>
            <a target="_blank" className={Style.img} href="https://www.linkedin.com/in/ester-moura-silva-2b343b278/">
                <img src={ImgEster} alt="Foto de Ester" />
            </a>
        </section>
    )
}