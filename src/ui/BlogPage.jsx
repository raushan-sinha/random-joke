import React from 'react'
import ParagraphCard from '../component/ParagraphCard';

const BlogPage = () => {
    return (
        <>
            <header className='bg-[#101923] text-cyan-500 text-2xl font-bold font-mono text-center p-2'>Blog for Random Joke Web</header>
            <main className="min-h-screen bg-linear-to-br from-indigo-950 via-slate-900 to-black text-center p-4">
                <h1 className='text-red-500 text-2xl'>On this page, you'll know how I used Joke free API to get random jokes.</h1>

                <div className='flex items-center justify-center p-8'>
                    <article className=''>
                        <ParagraphCard />
                    </article>
                </div>
            </main>
        </>
    )
}

export default BlogPage;