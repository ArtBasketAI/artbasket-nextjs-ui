import React from 'react';

interface ComicPageViewerProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const ComicPageViewer: React.FC<ComicPageViewerProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousPage = () => {
        onPageChange(Math.max(1, currentPage - 1));
    };

    const handleNextPage = () => {
        onPageChange(Math.min(totalPages, currentPage + 1));
    };

    return (
        <div>
            <h3>Comic Page {currentPage} of {totalPages}</h3>
            {/* Placeholder for comic images */}
            <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc', textAlign: 'center' }}>
                Comic images for page {currentPage} will go here.
            </div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
        </div>
    );
};
