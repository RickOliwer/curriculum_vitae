import Loader from "../Loader";
import { myAbout } from "../../utils/SwrFetcher";

const About = () => {
    const abouts = myAbout()
    if (!abouts) return <Loader />
    return ( 
        <div className="relative w-full h-screen text-white about">
            <h3 className="absolute text-gray-500 top-10">about.</h3>
            {abouts.map((about) => {
                return <div key={about.id} className="absolute w-3/4 text-2xl about_contant"><p>{about.fields.text}</p></div>
            })}
        </div>
    );
}
 
export default About;