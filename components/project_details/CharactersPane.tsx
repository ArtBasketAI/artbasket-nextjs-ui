import React from 'react';

interface Character {
    id: number;
    name: string;
    description: string;
}

interface CharactersPaneProps {
    characters: Character[];
    onEdit: (id: number) => void; // Placeholder for editing functionality
}

export const CharactersPane: React.FC<CharactersPaneProps> = ({ characters, onEdit }) => {
    return (
        <div>
            <h2>Characters</h2>
            {characters.map((character) => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                    <button onClick={() => onEdit(character.id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};
