import { mySkills } from "../../utils/SwrFetcher";

const Skills = () => {
    const skills = mySkills()
    if (!skills) return <div>Loading</div>
    return (
        <div className="text-white relative w-full h-screen">
            <h3 className="text-gray-500 absolute top-10">competence.</h3>
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
                {skills.map((skill) =>{
                    return <p key={skill.id} className="mr-5 text-2xl">{skill.fields.Name}</p>
                })}
            </div>
        </div>
    );
}
 
export default Skills;