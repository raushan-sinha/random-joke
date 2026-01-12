import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOKEAPIRESPONSE } from '../service/helpJokeAPI';

const JokeCard = () => {
    const [showJoke, setShowJoke] = useState('');
    const [showError, setShowError] = useState('');

    const handleJoke = async () => {
        try {
            const responseAPI = await JOKEAPIRESPONSE('https://official-joke-api.appspot.com/random_joke');
            if (responseAPI) {
                setShowJoke(`${responseAPI.setup} ------ ${responseAPI.punchline}`)
            }
        } catch (error) {
            setShowError('Network connection is poor or disconnected. Please check your Network connection.');
            console.error('Error fetching joke:', error);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-indigo-950 via-slate-900 to-black text-white overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

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
                    <div className='text-red-500 text-base font-mono'>{showJoke}</div>
                ) : (
                    <div className='text-red-500 text-base font-mono'>{showError}</div>
                )}

                <br />
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button id="joke-button" className="w-full sm:w-1/2 py-3 rounded-xl font-semibold bg-linear-to-r from-emerald-400 to-teal-500  text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer" onClick={handleJoke}>
                        Get Joke 😄
                    </button>

                    <button id="joke-clear" className="w-full sm:w-1/2 py-3 rounded-xl font-semibold bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer">
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
                </footer>
            </section>
        </main>
    );
}

export default JokeCard;