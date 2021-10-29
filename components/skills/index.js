import Loader from "../Loader";
import { mySkills } from "../../utils/SwrFetcher";

const Skills = () => {
    const skills = mySkills()
    if (!skills) return <Loader />
    return (
        <div className="relative w-full h-screen text-white">
            <h3 className="absolute text-gray-500 top-10">competence.</h3>
            <div className="absolute flex justify-between -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {skills.map((skill) =>{
                    return <p key={skill.id} className="mr-5 text-2xl">{skill.fields.Name}</p>
                })}
            </div>
        </div>
    );
}
 
export default Skills;