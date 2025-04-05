import React, { useEffect, useState } from "react";

export const CuerpoSemaforo = () => {
    const [color, setColor] = useState("red");
    const colors = ["green", "yellow", "red"];
    const colorRandom = arr => Math.floor(Math.random() * arr.length);
    const colorValue = arr => arr[colorRandom(arr)];
    const handleClickLight = () => {
        setColor(colorValue(colors))
    }
    useEffect(() => {
        console.log(color);
    }, [color])

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="cuerpo-rectangulo d-flex flex-column justify-content-center align-items-center">
                    <div onClick={() => setColor("green")} className={`circulo-verde mt-5 mb-5 ${color == "green" ? 'shadow-light' : ''}`} />
                    <div onClick={() => setColor("yellow")} className={`circulo-amarillo mb-5 ${color == "yellow" ? 'shadow-light' : ''}`} />
                    <div onClick={() => setColor("red")} className={`circulo-rojo mb-4 ${color == "red" ? 'shadow-light' : ''}`} />
                </div>
                <div className="text-center mt-4">
                    <button onClick={handleClickLight} className="btn btn-primary btn-lg">Random Color</button>
                </div>
            </div>
        </>
    );
}