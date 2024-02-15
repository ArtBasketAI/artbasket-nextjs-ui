import { useState } from 'react';
import { StoryPane } from '../components/project_details/StoryPane';
import { CharactersPane } from '../components/project_details/CharactersPane';

// Mock data for demonstration
const initialStory = "This is the initial full story...";
const initialCharacters = [
    { id: 1, name: 'Alice', description: 'The main character' },
    { id: 2, name: 'Bob', description: 'A supporting character' },
];

export default function ProjectDetailsPage() {
    // State for the story and characters; in a real app, this might come from an API
    const [story, setStory] = useState(initialStory);
    const [characters, setCharacters] = useState(initialCharacters);

    const handleSaveStory = (updatedStory: string) => {
        console.log('Saving story:', updatedStory);
        setStory(updatedStory);
        // Here you would also make an API call to save the updated story
    };

    const handleEditCharacter = (id: number) => {
        console.log('Editing character with ID:', id);
        // Placeholder function; in a real app, you'd use this to open an edit form
    };

    return (
        <div>
            <StoryPane initialStory={story} onSave={handleSaveStory} />
            <CharactersPane characters={characters} onEdit={handleEditCharacter} />
        </div>
    );
}
