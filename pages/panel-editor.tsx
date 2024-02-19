import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

interface PanelData {
    id: number;
    content: string;
    imageUrl: string;
    tags: string;
    style: string;
    characters: string;
}

const PanelEditor = () => {
    const router = useRouter();
    const { id, title, storyId, comicPages } = router.query;

    const [panelData, setPanelData] = useState<PanelData>({
        id: 0,
        content: '',
        imageUrl: '',
        tags: '',
        style: '',
        characters: '',
    });

    useEffect(() => {
        const fetchPanelData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/panels/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPanelData(data);
                console.log('Image URL:', data.imageUrl); // Log the image URL
            } catch (error) {
                console.error("Fetching panel data failed: ", error);
            }
        };

        if (id) {
            fetchPanelData();
        }
    }, [id]);

    const handleRegenerate = () => {
        console.log('Regenerate button clicked');
        // Add your logic here
    };



    return (
        <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: title as string, href: `/create/comic?title=${title}` },
                    { label: 'Story Details', href: `/story/details?storyId=${storyId}&title=${title}` },
                    { label: 'Storyboarding', href: `/storyboarding?storyId=${storyId}&title=${title}&comicPages=${comicPages}` },
                    { label: `Panel ${id}`, href: `/panel-editor?id=${id}&title=${title}&storyId=${storyId}&comicPages=${comicPages}` },
                ]}
            />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Panel</h1>
                <div className="mb-4">
                    <label htmlFor="content" className="block mb-2">Content:</label>
                    <textarea
                        id="content"
                        value={panelData.content}
                        onChange={(e) => setPanelData({ ...panelData, content: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Panel Image</h2>
                    <div className="image-container p-4 border border-gray-400 rounded-lg shadow"> {/* Add padding, border, and shadow */}
                        <Image
                            src={panelData.imageUrl}
                            alt={`Panel ${id} Image`}
                            width={500} // Adjust the width as needed
                            height={500} // Adjust the height as needed
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block mb-2">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={panelData.imageUrl}
                        onChange={(e) => setPanelData({ ...panelData, content: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tags" className="block mb-2">Tags:</label>
                    <input
                        type="text"
                        id="tags"
                        value={panelData.tags}
                        onChange={(e) => setPanelData({ ...panelData, content: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="style" className="block mb-2">Style:</label>
                    <input
                        type="text"
                        id="style"
                        value={panelData.style}
                        onChange={(e) => setPanelData({ ...panelData, content: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="characters" className="block mb-2">Characters:</label>
                    <input
                        type="text"
                        id="characters"
                        value={panelData.characters}
                        onChange={(e) => setPanelData({ ...panelData, content: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={() => router.push({
                            pathname: '/storyboarding',
                            query: { storyId, title, comicPages }, // Include the necessary query parameters
                        })}
                        className="button"
                    >
                        Back to Storyboarding
                    </button>

                    <button onClick={handleRegenerate} className="button">Regenerate</button>
                </div>
            </div>
        </>
    );
};

export default PanelEditor;
