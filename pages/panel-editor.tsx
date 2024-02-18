import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const PanelEditor = () => {
    const router = useRouter();
    const { id } = router.query; // Assuming the panel ID is passed as a query parameter

    // Example state for panel details - these would be fetched based on the panel ID
    const [panelData, setPanelData] = useState({
        content: '',
        imageUrl: '',
        tags: '',
        style: '',
        characters: ''
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
            } catch (error) {
                console.error("Fetching panel data failed: ", error);
            }
        };

        if (id) {
            fetchPanelData();
        }
    }, [id]);

    const handleRegenerate = () => {
        // Logic to regenerate the panel based on the updated details
        console.log('Regenerate button clicked');
        // Add your logic here
    };

    return (
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
                <button onClick={() => router.push('/storyboarding')} className="button">Back to Storyboarding</button>
                <button onClick={handleRegenerate} className="button">Regenerate</button>
            </div>
        </div>
    );
};

export default PanelEditor;
