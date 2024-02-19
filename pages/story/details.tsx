import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

interface Character {
    name: string;
    bio: string;
}

const StoryDetails = () => {
    const [story, setStory] = useState('');
    const [characters, setCharacters] = useState<Character[]>([]);
    const [comicPages, setComicPages] = useState(10);
    const router = useRouter();
    const { storyId, title } = router.query; 

    useEffect(() => {
        // Fetch the story details from the backend
        const fetchStoryDetails = async () => {
            // Update the URL to include the port number and correct endpoint
            const res = await fetch(`http://localhost:3001/api/comic/details/${storyId}`);
            const data = await res.json();
            setStory(data.completeStory);
            setCharacters(data.characters);
        };

        if (storyId) {
            fetchStoryDetails();
        }
    }, [storyId]);

    return (
        <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: title as string, href: `/create/comic?title=${title}` },
                    { label: 'Story Details', href: `/story/details?storyId=${storyId}&title=${title}` },
                ]}
            />
            <div className="p-8">
                <div className="flex mb-8">
                    <div className="w-2/3 mr-4">
                        <label htmlFor="story" className="block mb-2">Story:</label>
                        <textarea
                            id="story"
                            value={story}
                            onChange={(e) => setStory(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            rows={10}
                        />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl font-bold mb-4">Characters</h2>
                        <ul>
                            {characters.map((character, index) => (
                                <li key={index} className="mb-4">
                                    <h3 className="font-bold">{character.name}</h3>
                                    <textarea
                                        value={character.bio}
                                        onChange={(e) => {
                                            const newCharacters = [...characters];
                                            newCharacters[index].bio = e.target.value;
                                            setCharacters(newCharacters);
                                        }}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        rows={3}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <label htmlFor="comicPages" className="block mb-2">Number of Comic Pages:</label>
                        <input
                            type="number"
                            id="comicPages"
                            value={comicPages}
                            onChange={(e) => setComicPages(Math.max(5, Math.min(15, Number(e.target.value))))}
                            className="w-full p-2 border border-gray-300 rounded"
                            min="5"
                            max="15"
                        />
                    </div>
                    <button
                        onClick={() => router.push({
                            pathname: '/storyboarding',
                            query: { storyId, title, comicPages }, // Pass storyId, title, and comicPages as query parameters
                        })}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Begin Storyboarding
                    </button>
                </div>
            </div>
        </>
    );


};

export default StoryDetails;
