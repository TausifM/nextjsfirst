import Link from 'next/link'
import { useState } from 'react'

const DropDownSubMenu = ({ title, subMenu, link }) => {
    const [subMenuActive, setSubMenuActive] = useState(false);
    const handleToggle = () => {
        return setSubMenuActive(!subMenuActive);
    }
    return (
        <li className="dropdown-submenu ps-2 pe-2 pt-3 pb-3" style={{ fontSize: "1.111rem", fontFamily: 'Manrope'}}>
            <Link className="dropdown-item text-white" href={link} onClick={handleToggle} >
                {title} &raquo;
            </Link>
            <ul className={`dropdown-menu  ${subMenuActive ? 'd-block' : ''}`}>
                {subMenu !== undefined ? subMenu.map((item, index) => (
                    <li className="dropdown-submenu ps-2 pe-2 pt-3 pb-3" key={index}>
                        <Link className="dropdown-item text-white" href={item.link} 
                        style={{ fontSize: "1.111rem" }}
                        >
                            {item.sname}
                        </Link>
                    </li>
                )) : null}
            </ul>
        </li>
    )
}

export default DropDownSubMenu