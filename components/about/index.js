import { myAbout } from "../../utils/SwrFetcher";

const About = () => {
    const abouts = myAbout()
    if (!abouts) return <div>Loading</div>
    return ( 
        <div className="relative about text-white w-full h-screen">
            <h3 className="text-gray-500">about.</h3>
            {abouts.map((about) => {
                return <div className="absolute w-3/4 text-2xl about_contant"><p>{about.fields.text}</p></div>
            })}
        </div>
    );
}
 
export default About;