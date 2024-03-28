import { useContext } from "react"
import { Header } from "../../components/Header"
import { HeaderContext } from "../../providers/HeaderContext"
import { SectionTitle } from "../../components/Sections/SectionTitle"
import { SectionPhoto } from "../../components/Sections/SectionPhoto"

export const DeshboardPage = () => {
    const { theme } = useContext(HeaderContext)

    return (
        <body data-theme={theme}>
            <Header/>
            <main>
                <SectionTitle/>
                <SectionPhoto/>
            </main>
        </body>
    )
}