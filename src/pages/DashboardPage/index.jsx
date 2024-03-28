import { useContext } from "react"
import Styles from "./style.module.scss"
import { Header } from "../../components/Header"
import { HeaderContext } from "../../providers/HeaderContext"
import { SectionTitle } from "../../components/Sections/SectionTitle"
import { SectionPhoto } from "../../components/Sections/SectionPhoto"
import { SectionAboutMe } from "../../components/Sections/SectionAboutMe"

export const DeshboardPage = () => {
    const { theme } = useContext(HeaderContext)

    return (
        <body data-theme={theme}>
            <Header />
            <main>
                <section className={Styles.first_section}>
                    <SectionTitle />
                    <SectionPhoto />
                </section>
                <SectionAboutMe />
            </main>
        </body>
    )
}