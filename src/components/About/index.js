import React from "react";
import aboutOne from "../../assets/undraw_Around_the_world_re_n353.svg";
import aboutTwo from "../../assets/undraw_Website_builder_re_ii6e.svg";


function About() {
    return (

        <section id="about" className="bg-white dark:bg-gray-500 border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    About Me
                </h1>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src={aboutOne} alt="illustration of a person looking at the earth with location markers dotted around it" />
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">

                            <p className="text-gray-600 mb-8">
                                After graduating from York St John Univeristy in 2014 with a BA
                                Joint Honours in History and American Studies, I worked in retail for a year before moving to South
                                Korea. I worked there as an ESL teacher teaching elementary school children at 3 different schools.
                                I also took the opportunity while living there to travel around Asia and visit many different countries.
                                I interacted with all kinds of people and I think living and travelling abroad for a year truly enhanced my personality and skillset.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-4">
                    <div classname="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <p className="text-gray-600 mb-8">
                            However, upon my return to the UK I found myself without any real goals for the
                            future. I  thought a lot about going back into studying, but I never took the
                            leap. That was until I saw an advertisement for the coding bootcamp at the University of Birmingham. I had some
                            previous experience with coding and it had always been a keen interest of mine but I could never find the time
                            or resources to properly study it. After finishing the bootcamp I have continued my studies and hope to learn more languages.

                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <img src={aboutTwo} alt="illustration of a person building a website" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About