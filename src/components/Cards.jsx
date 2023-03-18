import React from 'react'
import { Link } from "react-scroll";

const Cards = () => {
    return (
        <div className='events'>
            <section class="text-black bg-white body-font mt-7">
                <div class="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                        <div class="text-center lg:w-2/3 w-full">
                            <h1 class="font-[Righteous] title-font sm:text-4xl text-3xl mb-4 font-bold" style={{ fontSize:'4rem' }}>Events</h1>
                        </div>
                </div>
            </section>
            <div className='md:flex md:space-x-4 p-7'>
                <article class="overflow-hidden transition border-2 border-black p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/e7.jpeg')}
                        class="h-56 mx-auto "
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <div>
                            <h3 class="mt-0.5 text-2xl text-black font-bold font-[Righteous]">
                            Biz Arena
                            </h3>
                        </div>

                        <p class="mt-2 text-sm leading-relaxed text-black line-clamp-3 font-Raleway font-bold">
                        BIZ Arena is a startup pitching and investing event that brings together entrepreneurs and investors from all over the world. It is a unique platform for startups to showcase their innovative ideas
                        </p>
                        <Link to='e-1' smooth duration={500}>
                        <button className='text-black mt-2 border-2 border-black hover:border-[#61218C] p-2 hover:text-white hover:bg-[#61218C] duration-150 font-[Righteous]'>Read More</button></Link>
                    </div>
                </article>
                <article class="overflow-hidden transition border-2 border-black p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/e4.jpeg')}
                        class="h-56 mx-auto "
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <div>
                            <h3 class="mt-0.5 text-2xl text-black font-bold font-[Righteous]">
                            IdeaJam
                            </h3>
                        </div>

                        <p class="mt-2 text-sm leading-relaxed text-black line-clamp-3 font-Raleway font-bold">
                        IdeaJam gives students the chance to pitch their idea in front of a panel of judges and receive feedback from industry experts. It's a great way to gain pitching experience.
                        </p>
                        <Link to='e-2' smooth duration={500}>
                        <button className='text-black mt-2 border-2 hover:border-[#61218C] border-black p-2 hover:text-white hover:bg-[#61218C] duration-150 font-Righteous'>Read More</button></Link>
                    </div>
                </article>
                <article class="overflow-hidden transition border-2 border-black p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/e2.jpeg')}
                        class="h-56 mx-auto "
                    />

                    <div class="bg-white p-4 sm:p-6">

                        <div>
                            <h3 class="mt-0.5 text-2xl text-black font-bold font-[Righteous]">
                            The Intern Fair
                            </h3>
                        </div>

                        <p class="mt-2 text-sm leading-relaxed text-black line-clamp-3 font-Raleway font-bold">
                        Attending the Intern Fair allows college students to establish meaningful connections with promising startups, leading to potential internship placements and valuable industry experience.
                        </p>
                        <Link to='e-3' smooth duration={500}>
                        <button className='text-black mt-2 border-2 hover:border-[#61218C] border-black p-2 hover:text-white hover:bg-[#61218C] duration-150 font-Righteous'>Read More</button></Link>
                    </div>
                </article>
                <article class="overflow-hidden transition border-2 border-black p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/e3.jpeg')}
                        class="h-56 mx-auto "
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <div>
                            <h3 class="mt-0.5 text-2xl text-black font-bold font-[Righteous]">
                            Startup Workshop
                            </h3>
                        </div>

                        <p class="mt-2 text-sm leading-relaxed text-black line-clamp-3 font-bold font-Raleway">
                        The Startup Talk Series features a range of industry experts and successful entrepreneurs who share their experiences and advice on a variety of topics, from raising capital to developing a marketing strategy
                        </p>
                        <Link to='e-4' duration={500} smooth>
                        <button className='text-black mt-2 border-2 hover:border-[#61218C] border-black p-2 hover:text-white hover:bg-[#61218C] duration-150 font-Righteous'>Read More</button></Link>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Cards