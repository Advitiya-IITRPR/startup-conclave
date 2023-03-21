import React from 'react'

const About = () => {
    return (
        <section className="text-white bg-black body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl font-[Righteous] mb-9 font-bold text-white" style={{ fontSize:'3rem' }}>About
                    </h1>
                    <p className="mb-8 text-xl font-[Raleway] font-bold leading-relaxed">Welcome to Startup Conclave, an exciting event presented by IIT Ropar as part of their annual techno-cultural fest, Zeitgeist. This event is perfect for anyone looking to ignite their entrepreneurial spirit. With a pitching competition for up-and-coming startups, an intern fair offering internship opportunities from emerging companies, and a startup talk series for students to learn about the business world, there's something for everyone.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={require('./img/img.jpeg')} />
                </div>
            </div>
        </section>
    )
}

export default About