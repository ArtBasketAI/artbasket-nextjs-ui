import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Assuming you have defined your Panel and PageData interfaces somewhere
interface Panel {
    id: number;
    content: string;
}

interface PageData {
    story: string;
    panels: Panel[];
}

const Storyboarding = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagesData, setPagesData] = useState<PageData[]>([]);
    const router = useRouter();

    // Convert comicPages to a number since query parameters are strings by default
    const comicPages = Number(router.query.comicPages) || 10;

    useEffect(() => {
        const fetchPagesData = async () => {
            try {
                // Log the request for debugging
                console.log(`Fetching data for ${comicPages} pages.`);

                const response = await fetch(`http://localhost:3001/api/comic/storyboard?pages=${comicPages}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPagesData(data.pagesData);

                // Log the response data
                console.log('Data fetched:', data.pagesData);
            } catch (error) {
                console.error("Fetching pages data failed: ", error);
            }
        };

        fetchPagesData();
    }, [comicPages]);

    // Check for data and if currentPage is within the valid range
    useEffect(() => {
        if (pagesData.length > 0) {
            setCurrentPage(current => Math.max(1, Math.min(current, pagesData.length)));
        }
    }, [pagesData]);

    // Early return if the data is still loading
    if (!pagesData.length) {
        return <p>Loading...</p>; // Provide a loading state
    }

    // Safely access the current page data
    const pageData = pagesData[currentPage - 1];
    const { story, panels } = pageData;

    // Handlers for page navigation
    const handlePreviousPage = () => setCurrentPage(current => Math.max(current - 1, 1));
    const handleNextPage = () => setCurrentPage(current => Math.min(current + 1, pagesData.length));

    // Handler to initiate storyboarding (placeholder for your logic)
    const handleVisualize = () => {
        // You can implement the logic to transition to the next step here
        // For now, just logging to the console
        console.log('Visualizing...');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'}`}
                >
                    Previous Page
                </button>
                <span>Page {currentPage} of {pagesData.length}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pagesData.length}
                    className={`px-4 py-2 rounded ${currentPage === pagesData.length ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'}`}
                >
                    Next Page
                </button>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Story</h2>
                    <p>{story}</p>
                </div>
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Storyboard Panels</h2>
                    {panels.map((panel) => (
                        <div key={panel.id} className="p-4 border border-gray-300 mb-4">
                            {panel.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => router.push('/create/comic')}
                    className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 hover:shadow-lg"
                >
                    Back to Project Home
                </button>
                <button
                    onClick={handleVisualize}
                    className="px-4 py-2 rounded bg-purple-500 hover:bg-purple-600 hover:shadow-lg animate-pulse"
                >
                    Visualize
                </button>
            </div>
        </div>
    );
};

export default Storyboarding;
