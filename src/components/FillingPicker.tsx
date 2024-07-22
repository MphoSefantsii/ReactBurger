import React from "react";
import { v4 as uuidv4 } from "uuid";
import tomato from '../images/tomato.jpg';
import lettuce from '../images/lettuce.jpg';
import meat from '../images/meat.jpg';

interface Filling {
    color: string;
    type: string;
    id: string;
}

interface Props {
    setFilling: (filling: Filling[]) => void;
}

const FillingPicker: React.FC<Props> = ({ setFilling }) => {
    const addLayer = (fillingType: string) => {
        let layerBackgroundColor = "";

        if (fillingType === "meat") {
            layerBackgroundColor = "brown";
        } else if (fillingType === "lettuce") {
            layerBackgroundColor = "green";
        } else if (fillingType === "tomato") {
            layerBackgroundColor = "red";
        }

        const newLayer: Filling = {
            color: layerBackgroundColor,
            type: fillingType,
            id: uuidv4()
        };

        setFilling((prevFilling: Filling[]) => [newLayer, ...prevFilling]);
    };
    return (
        <div className="filling-picker">
            <p className="header">
                <b>Click to add in your burger</b><br/>
                <i>Enjoy best meals</i>
            </p>
                <button
                className="tomato"
                type="button"
                onClick={() => addLayer("tomato")}
            >
                <img src={tomato}/>
            </button>
            <button
                className="lettuce"
                type="button"
                onClick={() => addLayer("lettuce")}
            >
                <img src={lettuce}/>
            </button>
            <button
                className="meat"
                type="button"
                onClick={() => addLayer("meat")}
            >
                <img src={meat}/>
            </button>

    </div>
    );
};

export default FillingPicker;
