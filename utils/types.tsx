// utils/types.tsx

export interface Project {
    id: number;
    title: string;
    imageUrl: string;
}

export interface StoryDetails {
    completeStory: string;
    characters: Character[];
}

export interface Character {
    name: string;
    bio: string;
}

export interface StoryBoardResponse {
    pagesData: PageData[];
}

export interface PageData {
    story: string;
    panels: Panel[];
}

interface Panel {
    id: number;
    content: string;
    imageUrl?: string;
}

export interface PanelData {
    id: number;
    content: string;
    imageUrl: string;
    tags: string;
    style: string;
    characters: string;
}
