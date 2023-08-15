import React from "react";
import TrollFace from "../images/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img
                src={TrollFace}
                alt="Troll face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}