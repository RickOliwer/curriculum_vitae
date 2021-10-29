import Link from 'next/link'

import { useState, useEffect, useRef } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = useRef([])

    const createLinksRefs = (link, index) => {
        links.current[index] = link;
    }
    console.log('my Links', links);
    // links.current.map((l) => {
    //     console.log('map links', l);
    // })
    useEffect(() => {
        links.current.map((l, index) => {
        if(isOpen){
            
             console.log('Effect link', l);
             l.style.animation = `LinksActive 0.5s ease forwards ${index / 7 + 1}s`
           
        } else{
            
            l.style.animation = `LinksDestroy 0.5 ease backwards ${index /7 + .5}s`
        }
    })
    }, [isOpen])

    return (
        <>
        <div 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${isOpen ? 'click' : '' } nav_button fixed top-10 right-20 z-50`} 
        id="nav_button"
        >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
         
                <ul className={`${isOpen ? 'items_active' : '' } link_items text-lg font-bold bg-gray-900 py-20`}>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 0)} >
                        <Link href="#intro"><a>intro.</a></Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 1)} >
                        <Link href="#about"><a>about.</a></Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 2)} >
                        <Link href="#skills"><a>competence.</a></Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 3)} >
                        <Link href="#projects"><a>projects.</a></Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 4)} >
                        <Link href="#exeperiences"><a>exeperiences.</a></Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 5)} >
                        <Link href="#education"><a>education.</a></Link>
                    </li>
                </ul>
        </>
    )
}

export default Header;