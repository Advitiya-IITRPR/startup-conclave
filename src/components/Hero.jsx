import React from 'react'
import background from "./img/bg.png";

const Hero = () => {
    return (
        <section
            className="relative img" style={{ backgroundImage: `url(${background})` }}
        >
            <div
                className="absolute"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold font-[Righteous] sm:text-5xl text-white">
                        The <strong className='md:text-9xl text-5xl'>Startup</strong>
                        <strong className="block font-extrabold text-[#61218C] bg- px-2 py-1 mt-4 md:text-9xl">
                            Conclave.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white" style={{ fontSize: '2rem' }} >
                        23 - 24 March | IIT Ropar
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center font-[Righteous]">
                        <a
                            href='https://zeitgeist.org.in/register-step1' target={"_blank"} smooth duration={500}
                            className="block w-full bg-[#61218C] px-12 py-3  font-bold text-white shadow focus:outline-none focus:ring hover:bg-white hover:text-[#61218C] sm:w-auto
                            text-xl duration-150"
                        >
                            Register for Zeitgeist | Startup Conclave 
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero