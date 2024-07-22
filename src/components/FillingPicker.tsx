import React from "react";
import { v4 as uuidv4 } from "uuid";

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
        <div>
            <button
                className="tomato"
                type="button"
                onClick={() => addLayer("tomato")}
            >
                Add Tomato
            </button>
            <button
                className="lettuce"
                type="button"
                onClick={() => addLayer("lettuce")}
            >
                Add Lettuce
            </button>
            <button
                className="meat"
                type="button"
                onClick={() => addLayer("meat")}
            >
                Add Meat
            </button>
        </div>
    );
};

export default FillingPicker;
