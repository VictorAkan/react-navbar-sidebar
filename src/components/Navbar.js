import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links,social } from './data'
import logo from "../logo.svg"

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height
    //     if (showLinks) {
    //         linksContainerRef.current.style.height = `${linksHeight}px`
    //     } else {
    //         linksContainerRef.current.style.height = '0px'
    //     }
    // }, [showLinks])
    return (
        <nav>
            <div className="navbar container align-items-center">
                <div className="nav--header navbar-brand d-md-flex align-items-center">
                    <img src={logo} alt="header" />
                    <a className="display-4" href="/">React</a>
                </div>
                <button 
                className="toggle--button d-md-none ms-auto display-4 mb-2"
                data-bs-toggle="offcanvas"
                data-bs-target="#canvas"
                aria-controls="canvas"
                >
                    <FaBars />
                </button>
                <div className="nav--links d-md-flex mt-3">
                    {links.map((link) => {
                        const { id,url,text } = link
                        return (
                            <ul className="link--container">
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="nav--social--links d-md-flex mt-3">
                    {social.map((socialLink) => {
                        const { id,url,icon } = socialLink
                        return(
                            <ul className="link--container">
                                <li key={id}>
                                    <a href={url}>{icon}</a>                
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="d-md-none offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="canvas">
                <div className="offcanvas-header">
                    <a href="/" className="text-primary display-4">React</a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                    <div className="offcanvas-body">
                    {links.map((link) => {
                        const { id,url,text } = link
                        return (
                            <ul className="link--toggle--container">
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            </ul>
                        )
                    })}
                    <div className="d-flex">
                    {social.map((socialLink) => {
                        const { id,url,icon } = socialLink
                        return(
                            <ul className="link--toggle--container">
                                <li key={id}>
                                    <a href={url}>{icon}</a>                
                                </li>
                            </ul>
                        )
                    })}
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar