import Link from 'next/link';

interface ProjectCardProps {
    id: number;
    name: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, name }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
            <h3>{name}</h3>
            <p>Project ID: {id}</p>
            <Link href={`/project/${id}`}>Edit Project</Link>
            <span style={{ marginRight: '10px' }} /> {/* Spacing */}
            <Link href={`/project_details/${id}`}>View Project</Link>
        </div>
    );
};
