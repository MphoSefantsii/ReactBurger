//import { useState } from "react";

interface Props{
    type: string;
    color: string;
    id : number;
    removeLayer: (id: number) => void;
}

const Filling: React.FC<Props> = ({color, type,removeLayer,id}) => {
    //const [isVisible, set_isVisible] = useState(true);
    // const makeInvissible = () =>{
    //     set_isVisible(false);
    // }
    //  display: `${isVisible? "block": "none"}`
    return <div onClick={() => removeLayer(id)}
    style={{color: color}}>
        {type}</div>
};

export default Filling;