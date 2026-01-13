import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { JOKEAPIRESPONSE } from '../service/helpJokeAPI';
import ThemeButton from '../component/ThemeButton';

const JokeCard = () => {
    const [showJoke, setShowJoke] = useState('');
    const [showError, setShowError] = useState('');
    const focusBtn = useRef(null);

    //TODO: Fetch the API of 'Random Joke'
    const handleJoke = async () => {
        try {
            const responseAPI = await JOKEAPIRESPONSE('https://official-joke-api.appspot.com/random_joke');
            if (responseAPI) {
                setShowJoke(`${responseAPI.setup} ~~~~~~> ${responseAPI.punchline}`)
            }
        } catch (error) {
            setShowError('Network connection is poor or disconnected. Please check your Network connection.');
            console.error('Error fetching joke:', error);
        }
    }


    //TODO: Create a logic to Clear Joke after showing -
    const clearJoke = () => {
        setShowJoke('')
        setShowError('')
    }

    //TODO: Auto focus on 'Get Joke' button 
    useEffect(() => {
        focusBtn.current.focus();
    }, []);

    return (
        <main className='min-h-screen flex items-center justify-center px-4 bg-[#101923] text-black overflow-hidden relative'>

            {/* Card */}
            <section className="relative w-full max-w-md md:max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-purple-500/30">
                {/* Badge */}
                <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-pink-500 to-purple-500 shadow-md">
                    Joke API
                </span>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                    Daily Dose of Humor 😂
                </h2>

                {/* Joke Text */}
                <p id="joke-text" className="mb-8 text-gray-200 leading-relaxed text-sm sm:text-base transition-all duration-300">
                    Click the button and unlock some laughter 🚀
                </p>

                {showJoke ? (
                    <div className='text-yellow-500 text-base font-mono'>{showJoke} 😂</div>
                ) : (
                    <div className='text-red-500 text-base font-mono'>{showError}</div>
                )}

                <br />
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button id="joke-button" className="w-full sm:w-1/2 py-3 rounded-xl font-semibold bg-linear-to-r from-emerald-400 to-teal-500  text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer" onClick={handleJoke} ref={focusBtn}>
                        Get Joke 😄
                    </button>

                    <button id="joke-clear" className="w-full sm:w-1/2 py-3 rounded-xl font-semibold bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer" onClick={clearJoke}>
                        Clear
                    </button>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-xs text-gray-400 flex flex-row justify-between">
                    <div>
                        <span className='text-base font-bolder'>#FrontendFun</span>
                    </div>
                    <div>
                        <Link to='/blog' className='cursor-pointer hover:text-cyan-600 hover:underline underline-offset-4 text-base font-bolder'>Blog</Link>
                    </div>
                    <div>
                        <ThemeButton />
                    </div>
                </footer>
            </section>
        </main>
    );
}

export default JokeCard;