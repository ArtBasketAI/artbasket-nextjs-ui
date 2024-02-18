import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import StoryBoardPanel from '../components/storyboard/Panel';

interface Panel {
    id: number;
    content: string;
    imageUrl?: string; // Optional if you have images
}

interface PageData {
    story: string;
    panels: Panel[];
}

const Storyboarding = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagesData, setPagesData] = useState<PageData[]>([]);
    const [currentStory, setCurrentStory] = useState<string>('');
    const router = useRouter();

    const comicPages = Number(router.query.comicPages) || 10;

    useEffect(() => {
        const fetchPagesData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/comic/storyboard?pages=${comicPages}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPagesData(data.pagesData);
                setCurrentStory(data.pagesData[currentPage - 1]?.story || '');
            } catch (error) {
                console.error("Fetching pages data failed: ", error);
            }
        };

        if (router.isReady) {
            fetchPagesData();
        }
    }, [router.isReady, comicPages, currentPage]);

    const handleSavePanelData = (id: number, newContent: string, newImageUrl: string, newSize: { width: number; height: number }) => {
        const updatedPagesData = pagesData.map((page, pageIndex) => {
            if (pageIndex === currentPage - 1) {
                return {
                    ...page,
                    panels: page.panels.map(panel =>
                        panel.id === id ? { ...panel, content: newContent, imageUrl: newImageUrl } : panel
                    )
                };
            }
            return page;
        });
        setPagesData(updatedPagesData);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, comicPages));
    };

    const handleVisualize = () => {
        // Logic for the Visualize button
        console.log('Visualize button clicked');
    };

    if (!pagesData.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="button">Previous Page</button>
                <button onClick={handleNextPage} disabled={currentPage === comicPages} className="button">Next Page</button>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Page Story Summary</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    value={currentStory}
                    onChange={(e) => setCurrentStory(e.target.value)}
                    rows={4}
                />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Storyboard Panels</h2>
                <div className="flex flex-wrap gap-4">
                    {pagesData[currentPage - 1].panels.map((panel) => (
                        <StoryBoardPanel
                            key={`${currentPage}-${panel.id}`} // Unique key for each panel based on the current page and panel id
                            id={panel.id}
                            initialContent={panel.content}
                            initialImageUrl={panel.imageUrl || '/assets/landscape.webp'}
                            onSave={handleSavePanelData}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <button onClick={() => router.push('/create/comic')} className="button">Back to Comic Create</button>
                <button onClick={handleVisualize} className="button">Visualize</button>
            </div>
        </div>
    );
};

export default Storyboarding;
