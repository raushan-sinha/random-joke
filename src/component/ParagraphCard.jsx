import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext';

const ParagraphCard = () => {
    const data = useContext(BlogContext);

    return (
        <article className="max-w-xl rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">
                {data.heading}
            </h2>
            <p className="text-gray-600">
                {data.info}
            </p>
        </article>
    );
}

export default ParagraphCard;