import React from 'react';
import adobe from '../../assets/adobe.svg';
import han from "../../assets/han-eng.svg";
import web from "../../assets/undraw_noted_pc9f.svg"

function Skills() {
    return (
        <section id="skills">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Skills
                </h1>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <img className="p-4" src={adobe} alt="adobe illustrator, xd and photoshop icons" />

                        <p className="text-gray-800 text-lg m-5 p-4">
                            I am proficient with Adobe Illustrator, Photoshop and XD. I use PS and AI on a daily basis and used XD to create wireframes for the above projects.
                        </p>

                    </div>
                </div>


                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <img className="p-4" src={han} alt="icon representing Korean to English translation" />

                        <p className="text-gray-800 text-lg m-5 p-4">
                            I have a keen interest in languages and started studying Korean in 2015. I can speak it at an intermediate level and hope to soon take the Test of Proficiency in Korean exam.
                        </p>


                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <img className="p-4" src={web} alt="illustration of a person sitting on the edge of a laptop" />

                        <p className="text-gray-800 text-lg m-5 p-4">
                            Currently I am proficient in HTML, CSS, JavaScript, JQuery, Node, and React. In my free time I have begun studying PHP and TypeScript and I hope to learn even more languages as my career develops.
                        </p>


                    </div>


                </div>
            </div>


        </section>
    )
}

export default Skills
