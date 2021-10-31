import Link from 'next/link'

import { useState, useEffect, useRef } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = useRef([])

    const createLinksRefs = (link, index) => {
        links.current[index] = link;
    }
    useEffect(() => {
        links.current.map((l, index) => {
        if(isOpen){
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
                        <Link href="#intro">intro.</Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 1)} >
                        <Link href="#about">about.</Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 2)} >
                        <Link href="#skills">competence.</Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 3)} >
                        <Link href="#projects">projects.</Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 4)} >
                        <Link href="#exeperiences">experiences.</Link>
                    </li>
                    <li className="ml-20 hover:text-gray-500" ref={(e) => createLinksRefs(e, 5)} >
                        <Link href="#education">education.</Link>
                    </li>
                </ul>
        </>
    )
}

export default Header;