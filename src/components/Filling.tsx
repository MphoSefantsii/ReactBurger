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
    return <div className={type.toLowerCase()} onClick={() => removeLayer(id)}
    style={{color: "black",backgroundColor:color,width:"300px",height:"50px",borderRadius:"20px",margin:"5px 0",textAlign:"center",fontSize:"large"}}>
        {type}</div>
};

export default Filling;