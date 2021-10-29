import Loader from "../Loader";
import { myExperiences } from "../../utils/SwrFetcher";

const Experiences = () => {
    const experiences = myExperiences()
    if (!experiences) return <Loader />
    return (
        <div className="relative w-full h-screen text-white">
            <h3 className="absolute text-gray-500 top-10">exeperiences.</h3>
            <div className="absolute w-3/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">

                {experiences.map((exp) => {
                    return <div key={exp.id}>
                        <p className="text-xs text-gray-500">company.</p>
                        <h4 className="text-4xl">{exp.fields.company}</h4>
                        <p className="mb-2 text-sm">{exp.fields.position}</p>
                        <p className="text-xs text-gray-500">description.</p>
                        <p className="mb-2">{exp.fields.description}</p>
                        <p className="text-xs text-gray-500">tasks.</p>
                        <p>{exp.fields.tasks}</p>
                    </div>
                })}
            </div>
            
        </div>
    );
}
 
export default Experiences;