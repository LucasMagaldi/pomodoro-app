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
                    <Timer size={24}/>
                </NavLink>
                <NavLink to='/history'>
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}