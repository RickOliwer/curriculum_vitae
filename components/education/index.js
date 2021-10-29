import { myEducation } from "../../utils/SwrFetcher";

const Education = () => {
    const education = myEducation()
    if (!education) return <div>Loading</div>
    return (
        <div className="relative education text-white w-full h-screen">
            <h3 className="text-gray-500 absolute top-10">education.</h3>
            <div className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                {education.map((edu) =>{
                    return <div key={edu.id}>
                        <p className="text-xs text-gray-500">school.</p>
                        <h4 className="text-4xl">{edu.fields.school}</h4>
                        <p className="text-sm mb-2">{edu.fields.program}</p>
                        <p className="text-gray-500 text-xs">courses.</p>
                        <p className="text-sm mb-2">{edu.fields.courses}</p>
                    </div>
                })}
            </div>
        </div>
    );
}
 
export default Education;