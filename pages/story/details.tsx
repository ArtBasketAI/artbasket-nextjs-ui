// pages/story/details.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { fetchStoryDetails } from '../../utils/api';
import { Character } from "../../utils/types";

const StoryDetails = () => {
    const [story, setStory] = useState('');
    const [characters, setCharacters] = useState<Character[]>([]);
    const [comicPages, setComicPages] = useState(10);
    const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);
    const router = useRouter();
    const { storyId, title } = router.query;

    useEffect(() => {
        if (storyId) {
            const loadStoryDetails = async () => {
                try {
                    const data = await fetchStoryDetails(storyId as string);
                    setStory(data.completeStory);
                    setCharacters(data.characters);
                } catch (error) {
                    console.error("Failed to load story details:", error);
                }
            };

            loadStoryDetails();
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
                        <div className="tabs flex space-x-2 mb-4">
                            {characters.map((character, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCharacterIndex(index)}
                                    className={`tab p-2 rounded-lg ${index === selectedCharacterIndex ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-purple-300 transition duration-300`}
                                >
                                    {character.name}
                                </button>
                            ))}
                        </div>
                        <div className="character-details">
                            <h3 className="font-bold mb-2">{characters[selectedCharacterIndex]?.name}</h3>
                            <textarea
                                value={characters[selectedCharacterIndex]?.bio}
                                onChange={(e) => {
                                    const newCharacters = [...characters];
                                    newCharacters[selectedCharacterIndex].bio = e.target.value;
                                    setCharacters(newCharacters);
                                }}
                                className="w-full p-2 border border-gray-300 rounded"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <label htmlFor="comicPages" className="block mb-2">Number of Comic Pages:</label>
                        <div className="flex items-center space-x-4">
                            <input
                                type="range"
                                id="comicPages"
                                min="5"
                                max="15"
                                value={comicPages}
                                onChange={(e) => setComicPages(Math.max(5, Math.min(15, Number(e.target.value))))}
                                className="w-full"
                            />
                            <input
                                type="number"
                                value={comicPages}
                                onChange={(e) => setComicPages(Math.max(5, Math.min(15, Number(e.target.value))))}
                                className="w-16 p-2 border border-gray-300 rounded text-center"
                                min="5"
                                max="15"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => router.push({
                                pathname: '/storyboarding',
                                query: { storyId, title, comicPages },
                            })}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Begin Storyboarding
                        </button>
                    </div>
                </div>
            </div>
        </>
    );


};

export default StoryDetails;
