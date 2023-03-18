import React from 'react'

const Sponsers = () => {
    return (
        <div className='bg-white text-black'>
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold mt-7 font-Righteous" style={{ fontSize: '3rem' }}>Investors</h1>
                    </div>
                </div>
            </section>
            <div className='md:flex   justify-evenly p-7 mb-9'>
                <article className="overflow-hidden sm:mx-auto  h-[10rem] w-[15rem] md:h-[15rem] md:w-[30rem] transition border-2 border-white bg-white p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/i1.png')}
                        className="h-[10rem] w-[15rem] md:h-[15rem] md:w-[60rem] mx-auto "
                    />
                </article>
                <article className="overflow-hidden sm:mx-auto  h-[10rem] w-[15rem] md:h-[15rem] md:w-[30rem] transition border-2 bg-white border-white p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/i2.png')}
                        className=" h-[10rem] w-[15rem] md:h-[15rem] md:w-[30rem]  mx-auto "
                    />
                </article>
            </div>
        </div>
    )
}

export default Sponsers