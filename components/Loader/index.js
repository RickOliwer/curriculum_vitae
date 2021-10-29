import { useState } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return ( 
        <div className="bg-gray-900 loader">
            <div className="">
                <PacmanLoader  color={color} loading={loading} size={50} />
            </div>
        </div>
    );
}
 
export default Loader;