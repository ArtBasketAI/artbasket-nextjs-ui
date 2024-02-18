import { useRouter } from 'next/router';
import { CreateProjectForm } from '../components/project/CreateProjectForm';

export default function CreateProjectPage() {
    const router = useRouter();

    const handleCreateProject = (project: { name: string; type: string }) => {
        console.log('Creating project:', project);
        // TODO: Replace this with an actual API call to create the project
        // For now, redirect to the dashboard after "creating" the project
        router.push('/dashboard');
    };

    return (
        <div>
            <h1>Create New Project</h1>
            <CreateProjectForm onCreateProject={handleCreateProject} />
        </div>
    );
}
