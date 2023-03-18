import React from 'react'

const Team = () => {
  return (
    <div className='bg-black'>
            <section className="text-white body-font">
                <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-7 font-Righteous font-bold" style={{ fontSize: '3rem' }}>Our Team</h1>
                    </div>
                </div>
            </section>
            <div className='md:flex md:space-x-4 p-7 justify-evenly'>
            <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/Anish.jpeg')}
                        className="h-56 mx-auto rounded-full "
                    />

                    <div className="bg-black p-4 sm:p-6">
                        <div>
                            <h3 className="mt-0.5 text-2xl text-white font-bold">
                            Anish Barna
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            Startup Conclave Head
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            +91-9354576962
                            </h3>
                        </div>

                    </div>
                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/sarb.jpeg')}
                        className="h-56 mx-auto rounded-full "
                    />

                    <div className="bg-black p-4 sm:p-6">
                        <div>
                            <h3 className="mt-0.5 text-2xl text-white font-bold">
                            Sarbjot Singh
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            Startup Conclave Co-Head
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            +91-7696098488
                            </h3>
                        </div>

                    </div>
                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/nishika.jpeg')}
                        className="h-56 mx-auto rounded-full "
                    />

                    <div className="bg-black p-4 sm:p-6">
                        <div>
                            <h3 className="mt-0.5 text-2xl text-white font-bold">
                            Nishika Nakka
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            Startup Conclave Co-Head
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            +91-7093186321
                            </h3>
                        </div>

                    </div>
                </article>
                <article className="overflow-hidden transition p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/kritika.jpeg')}
                        className="h-56 mx-auto rounded-full "
                    />

                    <div className="bg-black p-4 sm:p-6">
                        <div>
                            <h3 className="mt-0.5 text-2xl text-white font-bold">
                            Kritika Bansal
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            Startup Conclave Co-Head
                            </h3>
                            <h3 className="mt-0.5 text-xl text-white font-medium">
                            +91-7807353240
                            </h3>
                        </div>

                    </div>
                </article>
            </div>
        </div>
  )
}

export default Team