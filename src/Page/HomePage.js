import React from "react";
import Image from "../image/Tree Image.jpg"
import "./HomePage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate();

    const goToRecycle=()=>{
        navigate("/recycle");
    }
    const goToEating=()=>{
        navigate("/eating");
    }
    const goToElectric=()=>{
        navigate("/electric");
    }

    return (
        <div className="H-container">
            <img className="homeImage" src={Image} alt="Tree Image" />
            <div className="recycle-text" onClick={goToRecycle}>재활용</div>
            <div className="eating-text" onClick={goToEating}>식습관</div>
            <div className="electric-text" onClick={goToElectric}>전기절약</div>
        </div>
    );
}

export default HomePage;