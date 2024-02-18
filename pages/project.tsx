import { useRouter } from 'next/router';
import { StoryInputForm } from '../components/project/StoryInputForm';

export default function ProjectPage() {
    const router = useRouter();

    const handleSubmitStory = (storyDetails: { story: string; length: string }) => {
        console.log('Story details:', storyDetails);
        // TODO: Here you would typically make an API call to save the story details
        // For now, let's just redirect to the dashboard or a story details page as a placeholder
        router.push('/dashboard');
    };

    return (
        <div>
            <h1>Project Story Input</h1>
            <StoryInputForm onSubmitStory={handleSubmitStory} />
        </div>
    );
}
