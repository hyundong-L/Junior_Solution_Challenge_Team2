import React from "react";
import Image from "../image/Tree Image.jpg"
import "./HomePage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const goToRecycle = () => {
        navigate("/recycle");
    }
    const goToEating = () => {
        navigate("/eating");
    }
    const goToElectric = () => {
        navigate("/electric");
    }

    return (
        <div className="H-container">
            <img className="homeImage" src={Image} alt="Tree Image" />
            <div className="recycle-text" onClick={goToRecycle}>Recycle</div>
            <div className="eating-text" onClick={goToEating}>Eating Habits</div>
            <div className="electric-text" onClick={goToElectric}>Saving Electricity</div>
        </div>
    );
}

export default HomePage;