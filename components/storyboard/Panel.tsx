import React, { useState } from 'react';
import { Resizable } from 're-resizable';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface StoryBoardPanelProps {
    id: number;
    initialContent: string;
    initialImageUrl: string;
    title: string; // Add this line for breadcrumbs
    storyId: string; // Add this line for breadcrumbs
    onSave: (id: number, newContent: string, newImageUrl: string, newSize: { width: number; height: number }) => void;
}

const StoryBoardPanel: React.FC<StoryBoardPanelProps> = ({
    id,
    initialContent,
    initialImageUrl,
    title,
    storyId,
    onSave,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(initialContent);
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [size, setSize] = useState({ width: 300, height: 200 });

    const router = useRouter();

    const handleSave = () => {
        onSave(id, content, imageUrl, size);
        setIsEditing(false);
    };

    const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
        setSize((prevSize) => ({
            width: prevSize.width + d.width,
            height: prevSize.height + d.height,
        }));
    };

    const handleClick = () => {
        router.push({
            pathname: '/panel-editor',
            query: { id, title, storyId }, // Pass the additional breadcrumb values
        });
    };

    return (
        <div className="panel-container overflow-hidden relative" onClick={handleClick}>
            <Resizable
                size={size}
                onResizeStop={handleResizeStop}
                enable={{ top: false, right: true, bottom: true, left: false, topRight: false, bottomRight: true, bottomLeft: false, topLeft: false }}
                className={`border-2 p-2 ${isEditing ? 'border-dashed' : 'border-solid'} hover:shadow-lg hover:border-blue-500`}
            >
                {isEditing ? (
                    <div className="edit-mode">
                        <textarea
                            className="w-full p-2 border-b-2 mb-2"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-full p-2 border-b-2 mb-2"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                ) : (
                    <div className="view-mode" onDoubleClick={() => setIsEditing(true)}>
                        <div className="image-container absolute inset-0">
                            {imageUrl && <Image src={imageUrl} alt={`Panel ${id}`} width={500} height={300} className="w-full h-full object-cover opacity-50" />}
                        </div>
                        <p className="relative z-10">{content}</p>
                    </div>
                )}
            </Resizable>
        </div>
    );
};

export default StoryBoardPanel;
