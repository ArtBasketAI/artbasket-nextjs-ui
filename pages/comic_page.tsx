import { useState } from 'react';
import { ComicPageViewer } from '../components/comic_page/ComicPageViewer';

// Assume a fixed number of pages for demonstration purposes
const TOTAL_PAGES = 5;

export default function ComicPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1>Comic Viewer</h1>
            <ComicPageViewer
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
