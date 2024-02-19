import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import router from 'next/router';
import CreateProjectModal from '../components/CreateProjectModal';
import Image from 'next/image';
import Navbar from '../components/Navbar';

// Define the shape of a project
interface Project {
    id: number;
    title: string;
    imageUrl: string;
}

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const { isLoggedIn } = useAuth();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    // Define breadcrumbs for the Dashboard page
    const breadcrumbs = [
        { label: 'Dashboard', href: '/dashboard' }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            if (!isLoggedIn) {
                // Redirect to login or handle the logged-out state
                router.push('/'); // Redirect to the home page
                return;
            }
            const res = await fetch('http://localhost:3001/api/projects');
            const data: Project[] = await res.json();
            setProjects(data);
        };

        fetchProjects();
    }, [isLoggedIn]);

    return (
        <>
            <Navbar breadcrumbs={breadcrumbs} />
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Add New Project Tile as part of the grid */}
                    <div
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex justify-center items-center bg-white shadow rounded p-4 text-gray-600 cursor-pointer hover:shadow-lg transition duration-300 m-1" // Add margin here
                        style={{ width: '250px', height: '280px' }}
                    >
                        Create New
                    </div>
                    {/* Project tiles */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col bg-white shadow rounded p-2 hover:shadow-lg transition duration-300 m-1" // Add margin here
                            style={{ width: '250px', height: '280px' }}
                        >
                            <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="h-250px object-cover transition duration-300 transform hover:scale-105" />
                            <h2 className="text-lg mt-2 text-center">{project.title}</h2>
                        </div>
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
