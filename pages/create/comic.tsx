// pages/create/comic.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { createComicStory } from '../../utils/api';

const ComicCreate = () => {
    const [story, setStory] = useState('');
    const [storySize, setStorySize] = useState(1000);
    const router = useRouter();
    const { title } = router.query;

    const handleImagineStory = async () => {
        try {
            const data = await createComicStory(story, storySize);
            const storyId = data.storyId;
            router.push({
                pathname: '/story/details',
                query: { storyId, title },
            });
        } catch (error) {
            console.error('Creating comic story failed:', error);
            // Handle the error appropriately
        }
    };

    return (
        <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: title as string, href: `/create/comic?title=${title}` },
                ]}
            />
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
        </>
    );
};

export default ComicCreate;
