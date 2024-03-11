// components/ProjectTile.tsx
import Image from 'next/image';
import React from 'react';
import { Project } from "../utils/types";

interface ProjectTileProps {
    project: Project;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => {
    return (
        <div
            className="flex flex-col bg-white shadow rounded p-2 hover:shadow-lg transition duration-300 m-1"
            style={{ width: '250px', height: '280px' }}
        >
            <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="h-250px object-cover transition duration-300 transform hover:scale-105" />
            <h2 className="text-lg mt-2 text-center">{project.title}</h2>
        </div>
    );
};

export default ProjectTile;
