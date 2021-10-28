import { myEducation } from "../../utils/SwrFetcher";

const Education = () => {
    const education = myEducation()
    if (!education) return <div>Loading</div>
    return (
        <div className="relative education text-white w-full h-screen">
            <h3 className="text-grey-500">education.</h3>
            {education.map((edu) =>{
                return <div className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p>school.</p>
                </div>
            })}
        </div>
    );
}
 
export default Education;