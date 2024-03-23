import React from 'react'

const SideMenu = () => {
    return (
        <>
            <nav className="sidebar card py-2 mb-4">
                <ul className="nav flex-column" id="nav_accordion">
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Link name </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#menu_item1" href="#" aria-expanded="false"> Submenu links <i className="bi small bi-caret-down-fill"></i> </a>
                        <ul id="menu_item1" className="submenu collapse" data-bs-parent="#nav_accordion" >
                            <li><a className="nav-link" href="#">Submenu item 1 </a></li>
                            <li><a className="nav-link" href="#">Submenu item 2 </a></li>
                            <li><a className="nav-link" href="#">Submenu item 3 </a> </li>
                        </ul>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#menu_item2" href="#" aria-expanded="true"> More menus <i className="bi small bi-caret-down-fill"></i> </a>
                        <ul id="menu_item2" className="submenu collapse show" data-bs-parent="#nav_accordion">
                            <li><a className="nav-link" href="#">Submenu item 4 </a></li>
                            <li><a className="nav-link" href="#">Submenu item 5 </a></li>
                            <li><a className="nav-link" href="#">Submenu item 6 </a></li>
                            <li><a className="nav-link" href="#">Submenu item 6 </a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Another page </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Demo link </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Menu item </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Something </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Other link </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideMenu