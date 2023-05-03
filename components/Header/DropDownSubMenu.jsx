import Link from 'next/link'
import { useState } from 'react'

const DropDownSubMenu = ({title, name, link}) => {
    const [subMenuActive, setSubMenuActive] = useState(false);
    const handleToggle = () => {
        return setSubMenuActive(!subMenuActive);
    }
    return (
        <li className="dropdown-submenu">
            <Link className="dropdown-item text-black" href="#" onClick={handleToggle} >
                {title} &raquo;
            </Link>
            <ul className={`dropdown-menu mt-2 ${subMenuActive ? 'd-block' : ''}`}>
                <li className="dropdown-submenu">
                        <Link className="dropdown-item" href={link} >
                            {name}
                        </Link>
                </li>
            </ul>
        </li>
    )
}

export default DropDownSubMenu