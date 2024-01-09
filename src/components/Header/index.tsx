import { HeaderContainer } from "./style";
import { Scroll, Timer } from "phosphor-react";

import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={logo} />
            </span>
            <nav>
                <NavLink to='/'>
                    <Scroll />
                </NavLink>
                <NavLink to='/history'>
                    <Timer />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}