// utils/api.ts
import { Project, StoryDetails, StoryBoardResponse, PanelData } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export async function createComicStory(story: string, length: number): Promise<{ storyId: string }> {
    const response = await fetch(`${API_BASE_URL}/api/comic/generate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ story, length }),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export async function fetchStoryDetails(storyId: string): Promise<StoryDetails> {
    const response = await fetch(`${API_BASE_URL}/api/comic/details/${storyId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export async function fetchPagesData(comicPages: number): Promise<StoryBoardResponse> {
    const response = await fetch(`${API_BASE_URL}/api/comic/storyboard?pages=${comicPages}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export async function fetchPanelData(panelId: string): Promise<PanelData> {
    const response = await fetch(`${API_BASE_URL}/api/panels/${panelId}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}