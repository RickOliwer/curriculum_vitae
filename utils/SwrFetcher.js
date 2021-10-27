import useSWR from "swr"
import { Fetcher } from "../lib/api"


    const getData = (url) => {
        const { data: response, error } = useSWR(url, Fetcher, { refreshInterval: 1000*60*60*24 })

        if (error) return <div>Failed to load</div>
        if (response) return response
    }

    const myWorks = () => {
        return getData('/api/getWork')
    }
    const myAbout = () => {
        return getData('/api/getAbout')
    }
    const mySkills = () => {
        return getData('/api/getSkills')
    }
    const myEducation = () => {
        return getData('/api/getEducation')
    }
    const myExperiences = () => {
        return getData('/api/getExperiences')
    }

    export { myWorks, myAbout, mySkills, myEducation, myExperiences }


