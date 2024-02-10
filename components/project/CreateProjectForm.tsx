import { useState } from 'react';

interface CreateProjectFormProps {
    onCreateProject: (project: { name: string; type: string }) => void; // Callback function for when a project is created
}

export const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ onCreateProject }) => {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('Comic'); // Default project type

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onCreateProject({ name: projectName, type: projectType });
        // Reset form
        setProjectName('');
        setProjectType('Comic'); // Reset to default type
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="projectName">Project Name:</label>
                <input
                    id="projectName"
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="projectType">Project Type:</label>
                <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                >
                    <option value="Comic">Comic</option>
                    {/* Additional project types can be added here */}
                </select>
            </div>
            <button type="submit">Create Project</button>
        </form>
    );
};
