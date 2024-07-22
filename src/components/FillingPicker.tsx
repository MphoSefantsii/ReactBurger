import React from "react";
import { v4 as uuidv4 } from "uuid";
import tomato from '../images/tomato.jpg';
import lettuce from '../images/lettuce.jpg';
import meat from '../images/meat.jpg';

interface FillingType {
    color: string;
    type: string;
    id: string;
}

interface Props {
    setFilling: React.Dispatch<React.SetStateAction<FillingType[]>>;
}

const FillingPicker: React.FC<Props> = ({ setFilling }) => {
    const addLayer = (fillingType: string) => {
        let layerBackgroundColor = "";

        switch (fillingType) {
            case "meat":
                layerBackgroundColor = "brown";
                break;
            case "lettuce":
                layerBackgroundColor = "green";
                break;
            case "tomato":
                layerBackgroundColor = "red";
                break;
            default:
                layerBackgroundColor = "transparent";
        }

        const newLayer: FillingType = {
            color: layerBackgroundColor,
            type: fillingType,
            id: uuidv4()
        };

        setFilling((prevFilling) => [newLayer, ...prevFilling]);
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
                <img src={tomato} alt="Tomato" />
            </button>
            <button
                className="lettuce"
                type="button"
                onClick={() => addLayer("lettuce")}
            >
                <img src={lettuce} alt="Lettuce" />
            </button>
            <button
                className="meat"
                type="button"
                onClick={() => addLayer("meat")}
            >
                <img src={meat} alt="Meat" />
            </button>
        </div>
    );
};

export default FillingPicker;
