import React from "react";

function NavItem({menu}){
    return(
        <div className="nav-item">
            <p>{menu.name}</p>
        </div>
    );
}

export default NavItem;