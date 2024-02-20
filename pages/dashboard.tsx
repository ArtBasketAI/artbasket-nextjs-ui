import { useEffect, useState } from 'react';
import firebase from '../config/firebase';
import router from 'next/router';
import CreateProjectModal from '../components/CreateProjectModal';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { fetchProjects } from '../utils/api';
import { Project } from "../utils/types";

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    // Define breadcrumbs for the Dashboard page
    const breadcrumbs = [
        { label: 'Dashboard', href: '/dashboard' }
    ];

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                setIsUserLoggedIn(true);
                try {
                    const projectsData = await fetchProjects();
                    setProjects(projectsData);
                } catch (error) {
                    console.error("Failed to load projects:", error);
                }
            } else {
                router.push('/'); // Redirect to the home page
            }
        });

        return () => unsubscribe();
    }, []);

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
