import { useState } from 'react';

interface StoryPaneProps {
    initialStory: string;
    onSave: (updatedStory: string) => void;
}

export const StoryPane: React.FC<StoryPaneProps> = ({ initialStory, onSave }) => {
    const [story, setStory] = useState(initialStory);

    const handleSave = () => {
        onSave(story);
    };

    return (
        <div>
            <h2>Story</h2>
            <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
            />
            <button onClick={handleSave}>Save Story</button>
        </div>
    );
};
