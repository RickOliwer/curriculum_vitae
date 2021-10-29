import Loader from "../Loader";
import { myEducation } from "../../utils/SwrFetcher";

const Education = () => {
    const education = myEducation()
    if (!education) return <Loader />
    return (
        <div className="relative w-full h-screen text-white education">
            <h3 className="absolute text-gray-500 top-10">education.</h3>
            <div className="absolute w-3/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">

                {education.map((edu) =>{
                    return <div key={edu.id}>
                        <p className="text-xs text-gray-500">school.</p>
                        <h4 className="text-4xl">{edu.fields.school}</h4>
                        <p className="mb-2 text-sm">{edu.fields.program}</p>
                        <p className="text-xs text-gray-500">courses.</p>
                        <p className="mb-2 text-sm">{edu.fields.courses}</p>
                    </div>
                })}
            </div>
        </div>
    );
}
 
export default Education;