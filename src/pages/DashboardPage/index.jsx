import { useContext } from "react"
import { Header } from "../../components/Header"
import { HeaderContext } from "../../providers/HeaderContext"

export const DeshboardPage = () => {
    const { theme } = useContext(HeaderContext)

    return (
        <body data-theme={theme}>
            <Header/>
        </body>
    )
}