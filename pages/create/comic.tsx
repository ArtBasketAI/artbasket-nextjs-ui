import { useState } from 'react';
import { useRouter } from 'next/router';

const ComicCreate = () => {
    const [story, setStory] = useState('');
    const [storySize, setStorySize] = useState(1000);
    const router = useRouter();
    const { title } = router.query;

    const handleImagineStory = async () => {
        const response = await fetch('http://localhost:3001/api/comic/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ story, length: storySize }),
        });
        const data = await response.json();

        // Use the storyId returned from the backend
        const storyId = data.storyId;
        router.push(`/story/details?storyId=${storyId}`);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8">{title || 'Create a Comic'}</h1>
            <div className="mb-4">
                <label htmlFor="story" className="block mb-2">Enter your story:</label>
                <textarea
                    id="story"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="storySize" className="block mb-2">Size of the final story:</label>
                <input
                    type="range"
                    id="storySize"
                    min="500"
                    max="1500"
                    value={storySize}
                    onChange={(e) => setStorySize(Number(e.target.value))}
                    className="w-full"
                />
                <div className="text-center">{storySize}</div>
            </div>
            <button
                onClick={handleImagineStory}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Imagine Story
            </button>
        </div>
    );
};

export default ComicCreate;
