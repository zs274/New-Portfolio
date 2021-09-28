import React from 'react';

function Project() {
    return (
        <section className="bg-white border-b py-8" id="projects">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Projects
                </h1>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <div className="w-full font-bold text-xl text-gray-800 px-6 py-3">
                            Covidwise
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            A site built to allow users to check the most up-to-date coronavirus information in their local authority
                            area. The site also has a symptom checker and an area that gives movie suggestions if users are
                            bored in lockdown.
                            <br />
                            <br />
                            For this app, I was responsible for creating the wireframes and developing the UI and UX.
                            <br />
                            <br />
                            This site was built using HTML, CSS, JavaScript, JQuery, and Materialzse CSS.

                        </p>
                        <img className="p-2" src="https://github.com/zs274/Covidwise/raw/main/Assets/Images/covidwise-home.PNG?raw=true" alt="screenshot of homepage of Covidwise site" />

                    </div>
                    <div className="flex-none mt-auto bg-blue-50 rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center space-x-3">
                            <a href="https://github.com/zs274/Covidwise" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Github Repo
                                </button>
                            </a>

                            <a href="https://kvtemadden.github.io/Covidwise" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Live App
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <div className="w-full font-bold text-xl text-gray-800 px-6 py-3">
                            Tradewise
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            A simple and easy to use site for customers to find a tradesman for any given household jobs.
                            Similarly, the site allows tradesmen to connect with customers and leave comments on their posts.
                            <br />
                            <br />
                            For this app, I was responsible for creating the wireframes, developing the UI and UX and some front-end JavaScript.
                            <br />
                            <br />
                            This site was built following MVC principles and using HTML, CSS, JavaScript, Bootstrap, Node, MySQL.

                        </p>
                        <img className="p-2" src="https://github.com/zs274/tradewise/raw/main/public/images/projectscreenshot.PNG?raw=true" alt="screenshot of dashboard of Tradewise site" />

                    </div>
                    <div className="flex-none mt-auto bg-blue-50 rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center space-x-3">
                            <a href="https://github.com/zs274/tradewise" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Github Repo
                                </button>
                            </a>

                            <a href="https://uob-tradewise.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Live App
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-blue-50 rounded-t rounded-b-none overflow-hidden shadow">

                        <div className="w-full font-bold text-xl text-gray-800 px-6 py-3">
                            Music To My Eyes
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            A full stack MERN dating app that uses Spotify's API to allow users to create a list of their favourite songs and find a match based on shared music taste.
                            <br />
                            <br />
                            For this app, I was responsible for creating the wireframes, developing the UI and UX and some front-end JavaScript.
                            <br />
                            <br />
                            This site was built following MERN principles and using MongoDB, Express, React, Node, Tailwind CSS, Bootstrap, Spotify API, and NPM.

                        </p>
                        <img className="p-2" src="https://user-images.githubusercontent.com/74797740/121778763-4ea38300-cb90-11eb-8f06-2f022a7528b3.png?raw=true" alt="screenshot of dashboard of Music To My Eyes site" />

                    </div>
                    <div className="flex-none mt-auto bg-blue-50 rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center space-x-3">
                            <a href="https://github.com/zs274/music-to-my-eyes" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Github Repo
                                </button>
                            </a>

                            <a href="http://music-to-my-eyes.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white text-sm font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Live App
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
