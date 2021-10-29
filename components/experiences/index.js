import { myExperiences } from "../../utils/SwrFetcher";

const Experiences = () => {
    const experiences = myExperiences()
    if (!experiences) return <div>Loading</div>
    return (
        <div className="text-white relative w-full h-screen">
            <h3 className="text-gray-500 absolute top-10">exeperiences.</h3>
            <div className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                {experiences.map((exp) => {
                    return <div key={exp.id}>
                        <p className="text-xs text-gray-500">company.</p>
                        <h4 className="text-4xl">{exp.fields.company}</h4>
                        <p className="text-sm mb-2">{exp.fields.position}</p>
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