import React from 'react'

const Stake = () => {
    return (
        <div className='text-white bg-black py-9'>
            <div className='md:flex md:space-x-4 p-7 justify-evenly'>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/iit.png')}
                        className="h-56 mx-auto "
                    />
                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/z.png')}
                        className="h-56 mx-auto "
                    />

                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/adi.png')}
                        className="h-56  mx-auto "
                    />
                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/ecell.png')}
                        className="h-56 mx-auto "
                    />
                </article>
                <article className="overflow-hidden transition  p-2 m-3">
                    <img
                        alt="Office"
                        src={require('./img/tbif.png')}
                        className="h-56 mx-auto "
                    />
                </article>
            </div>
        </div>
    )
}

export default Stake