import React, { useState } from 'react';
import DropDownSubMenu from './DropDownSubMenu';
import { menuData } from './menuContent';
const NavbarItems = () => {
    const [dropDownactive, setDropDownactive] = useState(false);
    const [selectedHeading, setSelectedHeading] = useState(null);
    const handleSelectedHeading = (heading) => {
        console.log(heading, "header")
        setSelectedHeading(heading);
    }

    console.log(selectedHeading, "ddfvs", )
    return (
        <>
            {menuData.map((row) => {
                return (
                    <li className={`nav-item dropdown `} key={row.heading}>
                        <h5
                            className="nav-link dropdown-toggle"
                            role="button"
                            id="navbarDropdownMenuLink"
                            data-mdb-toggle="dropdown"
                            onClick={() => {
                                setDropDownactive(!dropDownactive);
                            }}
                            aria-expanded={`${dropDownactive ? "true" : "false"}`}
                            style={{ fontSize: "1.111rem" }}
                        >
                            {row.heading}
                        </h5>
                        <ul
                            className={`dropdown-menu multi-level ${dropDownactive ? "d-block" : ""}`}
                            aria-labelledby="navbarDropdownMenuLinkRight"
                        // style={{ display: dropDownactive ? "block" : "none"}}
                        >{row.content
                            // .filter((item) => item.name === selectedHeading)
                            // .flatMap((item) => item.subMenuContent)
                            .map((subItem) => {
                                return (
                                    <DropDownSubMenu
                                        // handleSelectedHeading={handleSelectedHeading()}
                                        title={subItem.name}
                                        subMenu={subItem.subMenuContent}
                                        link={subItem.link}
                                    />
                                );
                            })}
                        </ul>
                    </li>)
            })}
        </>
    )
};

export default React.memo(NavbarItems);
