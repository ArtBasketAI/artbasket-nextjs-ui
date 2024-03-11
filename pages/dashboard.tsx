// pages/dashboard.tsx
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CreateProjectModal from '../components/CreateProjectModal';
import Navbar from '../components/Navbar';
import { fetchProjects } from '../utils/api';
import { Project } from "../utils/types";
import { AuthContext } from '../context/AuthContext';
import ProjectTile from '../components/ProjectTile';

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const { isLoggedIn } = useContext(AuthContext) || {};
    const router = useRouter();

    // Define breadcrumbs for the Dashboard page
    const breadcrumbs = [
        { label: 'Dashboard', href: '/dashboard' }
    ];

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/');
            return;
        }

        const fetchProjectsData = async () => {
            try {
                const projectsData = await fetchProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error("Failed to load projects:", error);
            }
        };

        fetchProjectsData();
    }, [isLoggedIn, router]);

    return (
        <>
            <Navbar breadcrumbs={breadcrumbs} />
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Add New Project Tile as part of the grid */}
                    <div
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex justify-center items-center bg-white shadow rounded p-4 text-gray-600 cursor-pointer hover:shadow-lg transition duration-300 m-1"
                        style={{ width: '250px', height: '280px' }}
                    >
                        Create New
                    </div>
                    {/* Project tiles */}
                    {projects.map((project) => (
                        <ProjectTile key={project.id} project={project} />
                    ))}
                </div>
                <CreateProjectModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </div>
        </>
    );
};

export default Dashboard;
