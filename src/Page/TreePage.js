import React from "react";
import Image from "../image/Tree Image.jpg"

const TreePage=()=>{
    return (
        <div>
            <h1>Tree Page</h1>
            <img src={Image} alt="Tree Image" style={{ width:'200px', height:'200px'}}/>
        </div>
    );
}

export default TreePage;