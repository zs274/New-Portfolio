import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="fixed w-full z-30 top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 font-bold text-xl shadow-lg ">
                <div className="container px-4 py-1 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <Link
                            className="hover:underline cursor-pointer"
                            activeClass="active"
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Zarin Salim
                        </Link>

                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "w-full flex-grow lg:flex lg:items-center lg:w-auto mt-1 lg:mt-0 bg-white  text-black  p-2 lg:p-0 z-20" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <Link
                                    className="hover:underline cursor-pointer"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}

                                >
                                    About
                                </Link>
                            </li>

                            <li className="mr-3">
                                <Link
                                    className="hover:underline cursor-pointer"
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li className="mr-3">
                                <Link
                                    className="hover:underline cursor-pointer"
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar