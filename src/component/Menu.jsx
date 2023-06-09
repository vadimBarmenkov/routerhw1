import {Link, NavLink} from "react-router-dom";
import {useState} from "react";

export const Menu = () => {
    const [linkId, setLinkId] = useState(1);
    const [links, setLinks] = useState([
        {href: "/", text: "Главная", id: 1},
        {href: "/drift", text: "Дрифт-такси", id: 2},
        {href: "/timeattack", text: "Time Attack", id: 3},
        {href: "/forza", text: "Forza Karting", id: 4}]);



    return(
        <nav className="menu">{
            links.map((link) => <NavLink

                className={({isActive}) =>{
                    if (isActive){
                        return 'menu__item menu__item-active';
                    }
                    return 'menu__item';
                }}
                key={link.id}
                to={link.href}
            >
                {link.text}
            </NavLink>)
        }</nav>)
}
