import { useEffect, useState } from 'react';
import { ProjectCard } from '../components/dashboard/ProjectCard';
import Link from 'next/link';

interface Project {
    id: number;
    name: string;
}

export default function DashboardPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // TODO: Fetch projects from API and set them here
        setProjects([
            { id: 1, name: 'Project A' },
            { id: 2, name: 'Project B' },
        ]);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <Link href="/create_project">Create New Project</Link>
            {projects.map(project => (
                <ProjectCard key={project.id} id={project.id} name={project.name} />
            ))}
        </div>
    );
}
