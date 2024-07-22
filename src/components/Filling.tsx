//import { useState } from "react";

interface Props{
    type: string;
    color: string;
    id : string;
    removeLayer: (id: string) => void;
}

const Filling: React.FC<Props> = ({color, type,removeLayer,id}) => {
    //const [isVisible, set_isVisible] = useState(true);
    // const makeInvissible = () =>{
    //     set_isVisible(false);
    // }
    //  display: `${isVisible? "block": "none"}`
    return <div className={type.toLowerCase()} onClick={() => removeLayer(id)}
    style={{color: "white",
    backgroundColor:color,
    width:"300px",
    height:"50px",
    borderRadius:"10px",
    margin:"0.5px ",
    textAlign:"center",
    fontSize:"large"}}>
        {type}</div>
};

export default Filling;