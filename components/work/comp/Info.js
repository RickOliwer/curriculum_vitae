import Link from 'next/link'

const Info = ({ Name, description, built_in, git_repo, website_url }) => {
    console.log('my website', website_url);
    return (
        <div className="text-white">
            <h2 className="text-8xl">{Name}</h2>

            <p className="my-3">{built_in}</p>

            <Link href={`${git_repo}`}><a className="inline-block mb-2">Git Repo</a></Link>

            <p>{description}</p>
            
            <Link href={`${website_url}`}><a className="web-button my-4">Web Site</a></Link>
        </div>
    );
}
 
export default Info;