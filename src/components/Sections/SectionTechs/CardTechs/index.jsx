import Styles from "./style.module.scss"

export const CardTech = ({ name, img }) => {
    return(
        <>
            <img src={img} alt={`Imagem do icone ${name}`}/>
            <span className="title paragraph">{name}</span>
        </>
    )
}