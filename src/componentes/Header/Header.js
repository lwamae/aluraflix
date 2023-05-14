import { styled } from "styled-components"
import "./Header.css"
import Boton from "../Boton"

function Header() {
    return <header className="header">
        <img src="/img/header.png" alt='logo' />
        <Boton></Boton>
    </header>
}

export default Header