// import { useState } from 'react';
import DropDownSubMenu from './DropDownSubMenu';
import { menuData } from './menuContent';
const NavbarItems = () => {
    // const [dropDownactive, setDropDownactive] = useState(false);
    return (
        <>
            {menuData.map((row) => {
                return (<li className={`nav-item dropdown `} key={row.heading} >
                    <h5
                        className="nav-link dropdown-toggle mt-1"
                        role="button"
                        id="navbarDropdownMenuLink"
                        data-mdb-toggle="dropdown"
                        // onClick={() => {
                        //     setDropDownactive(!dropDownactive);
                        // }}
                        // aria-expanded={`${dropDownactive ? "true" : "false"}`}
                        style={{ fontSize: "1.111rem" }}
                    >
                        {row.heading}
                    </h5>
                    <ul
                        className="dropdown-menu multi-level"
                        aria-labelledby="navbarDropdownMenuLinkRight"
                        // style={{ display: dropDownactive ? "block" : "none", backgroundColor: '#007ffd' }}
                    >
                        {row.content.map((item) => {
                            return (
                                <DropDownSubMenu title={item.name} key={item.name} link={item.link} />
                            );
                        })}
                    </ul>
                </li>)
            })}
        </>
    )
};

export default NavbarItems;
