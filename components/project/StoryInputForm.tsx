import { useState } from 'react';

interface StoryInputFormProps {
    onSubmitStory: (storyDetails: { story: string; length: string }) => void;
}

export const StoryInputForm: React.FC<StoryInputFormProps> = ({ onSubmitStory }) => {
    const [story, setStory] = useState('');
    const [length, setLength] = useState('Short'); // Default length

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmitStory({ story, length });
        // Optionally reset form state here if needed
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="story">Story Idea:</label>
                <textarea
                    id="story"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="length">Story Length:</label>
                <select
                    id="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                >
                    <option value="Short">Short</option>
                    <option value="Medium">Medium</option>
                    <option value="Long">Long</option>
                </select>
            </div>
            <button type="submit">Submit Story</button>
        </form>
    );
};
