import React, { useState } from 'react';
import { Resizable } from 're-resizable';

interface StoryBoardPanelProps {
    id: number;
    initialContent: string;
    initialImageUrl: string;
    onSave: (id: number, newContent: string, newImageUrl: string, newSize: { width: number; height: number }) => void;
}

const StoryBoardPanel: React.FC<StoryBoardPanelProps> = ({
    id,
    initialContent,
    initialImageUrl,
    onSave,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(initialContent);
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [size, setSize] = useState({ width: 300, height: 200 });

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

    return (
        <div className="panel-container overflow-hidden"> {/* Add overflow-hidden here */}
            <Resizable
                size={size}
                onResizeStop={handleResizeStop}
                enable={{ top: false, right: true, bottom: true, left: false, topRight: false, bottomRight: true, bottomLeft: false, topLeft: false }}
                className={`border-2 p-2 ${isEditing ? 'border-dashed' : 'border-solid'} hover:shadow-lg`}
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
                        <p>{content}</p>
                        {imageUrl && <img src={imageUrl} alt={`Panel ${id}`} className="max-w-full max-h-full object-contain" />}
                    </div>
                )}
            </Resizable>
        </div>
    );
};

export default StoryBoardPanel;
